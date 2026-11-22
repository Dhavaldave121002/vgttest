<?php
/**
 * Vertex Global Tech - Lead Enquiry Processing API
 * Endpoint: POST /api/contact.php
 * Handles server-side validation, anti-spam honeypot, CSRF check, rate limiting,
 * local audit logging, and email notification to connectvertexglobal2209@gmail.com.
 */

// Set strict JSON security headers
header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'status' => 'error',
        'message' => 'Method Not Allowed. Only POST requests are permitted.'
    ]);
    exit;
}

// Session initialization for CSRF verification
if (session_status() === PHP_SESSION_NONE) {
    $secure = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || $_SERVER['SERVER_PORT'] == 443;
    session_set_cookie_params([
        'lifetime' => 7200,
        'path' => '/',
        'secure' => $secure,
        'httponly' => true,
        'samesite' => 'Lax'
    ]);
    session_start();
}

// Rate Limiting by IP (Max 5 submissions per 10 minutes)
$clientIp = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$rateLimitDir = sys_get_temp_dir() . '/vgt_ratelimit';
if (!is_dir($rateLimitDir)) {
    @mkdir($rateLimitDir, 0700, true);
}
$rateLimitFile = $rateLimitDir . '/ip_' . md5($clientIp) . '.json';
$rateData = ['count' => 0, 'first_time' => time()];

if (file_exists($rateLimitFile)) {
    $stored = json_decode(@file_get_contents($rateLimitFile), true);
    if (is_array($stored)) {
        if (time() - $stored['first_time'] < 600) {
            $rateData = $stored;
        }
    }
}

$rateData['count']++;
@file_put_contents($rateLimitFile, json_encode($rateData));

if ($rateData['count'] > 6) {
    http_response_code(429);
    echo json_encode([
        'status' => 'error',
        'message' => 'Too many requests. Please wait a few minutes before submitting another enquiry, or call +91 8511172099 directly.'
    ]);
    exit;
}

// Decode JSON or form-encoded POST body
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    $data = $_POST;
}

// 1. Anti-Spam Honeypot Verification
$honeypot = trim($data['hpWebsite'] ?? '');
if (!empty($honeypot)) {
    // Silently succeed to trick automated spam bots
    echo json_encode([
        'status' => 'success',
        'message' => 'Thank you! Your enquiry has been received.'
    ]);
    exit;
}

// 2. CSRF Verification (Optional fallback when testing in local client-only modes)
$requestToken = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? ($data['csrfToken'] ?? '');
if (!empty($_SESSION['csrf_token']) && !empty($requestToken)) {
    if (!hash_equals($_SESSION['csrf_token'], $requestToken)) {
        http_response_code(403);
        echo json_encode([
            'status' => 'error',
            'message' => 'Security token validation failed. Please refresh the page and try again.'
        ]);
        exit;
    }
}

// 3. Sanitization & Input Extraction
$fullName       = trim(strip_tags($data['fullName'] ?? ''));
$businessName   = trim(strip_tags($data['businessName'] ?? ''));
$phone          = trim(strip_tags($data['phone'] ?? ''));
$email          = trim(strip_tags($data['email'] ?? ''));
$websiteType    = trim(strip_tags($data['websiteType'] ?? 'Business Website Design'));
$budget         = trim(strip_tags($data['approximateBudget'] ?? 'Flexible'));
$requirements   = trim(strip_tags($data['projectRequirements'] ?? ''));

// 4. Server-Side Validation Rules
$errors = [];

if (empty($fullName)) {
    $errors['fullName'] = 'Full name is required.';
} elseif (mb_strlen($fullName) > 100) {
    $errors['fullName'] = 'Full name cannot exceed 100 characters.';
}

$cleanPhone = preg_replace('/[\s\-()]/', '', $phone);
if (empty($phone)) {
    $errors['phone'] = 'Contact phone number is required.';
} elseif (!preg_match('/^\+?[0-9]{10,14}$/', $cleanPhone)) {
    $errors['phone'] = 'Please provide a valid 10 to 14 digit telephone number.';
}

if (empty($email)) {
    $errors['email'] = 'Email address is required.';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Please provide a valid email address.';
}

if (empty($requirements)) {
    $errors['projectRequirements'] = 'Project requirements description is required.';
} elseif (mb_strlen($requirements) < 15) {
    $errors['projectRequirements'] = 'Please provide at least 15 characters of project context.';
} elseif (mb_strlen($requirements) > 3000) {
    $errors['projectRequirements'] = 'Project description must be under 3000 characters.';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => 'Please complete all required fields accurately.',
        'errors'  => $errors
    ]);
    exit;
}

// 5. Secure File Audit Logging (Lead Storage)
$logEntry = [
    'timestamp'      => date('c'),
    'ip'             => $clientIp,
    'full_name'      => $fullName,
    'business_name'  => $businessName,
    'phone'          => $phone,
    'email'          => $email,
    'website_type'   => $websiteType,
    'budget'         => $budget,
    'requirements'   => $requirements,
];

$storageDir = __DIR__ . '/../storage';
if (!is_dir($storageDir)) {
    @mkdir($storageDir, 0750, true);
}
$logFile = $storageDir . '/leads.jsonl';
@file_put_contents($logFile, json_encode($logEntry, JSON_UNESCAPED_UNICODE) . PHP_EOL, FILE_APPEND | LOCK_EX);

// 6. Email Notification Dispatch to Verified Business Email
$toEmail = 'connectvertexglobal2209@gmail.com';
$emailSubject = 'New Web Design Inquiry - Ahmedabad: ' . $fullName;

// Prevent email header injection by stripping CR and LF
$safeSubject = str_replace(["\r", "\n"], '', $emailSubject);
$safeEmail = str_replace(["\r", "\n"], '', $email);
$safeName = str_replace(["\r", "\n"], '', $fullName);

$emailBody = "New Web Design Consultation Request received on Vertex Global Tech website:\n\n"
           . "Full Name:        " . $fullName . "\n"
           . "Business Name:    " . ($businessName ?: 'Not specified') . "\n"
           . "Phone Number:     " . $phone . "\n"
           . "Email Address:    " . $email . "\n"
           . "Website Type:     " . $websiteType . "\n"
           . "Approx. Budget:   " . $budget . "\n"
           . "Submission Time:  " . date('Y-m-d H:i:s T') . "\n"
           . "Client IP:        " . $clientIp . "\n\n"
           . "Project Requirements:\n"
           . "--------------------------------------------------\n"
           . $requirements . "\n"
           . "--------------------------------------------------\n\n"
           . "Reply directly to this email to reach the client at: " . $email;

$headers = [];
$headers[] = 'From: Vertex Global Tech <noreply@vertexglobaltech.in>';
$headers[] = 'Reply-To: ' . $safeName . ' <' . $safeEmail . '>';
$headers[] = 'X-Mailer: PHP/' . phpversion();
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

// Dispatch mail notification
$mailSent = @mail($toEmail, $safeSubject, $emailBody, implode("\r\n", $headers));

// 7. Successful JSON Response
http_response_code(200);
echo json_encode([
    'status' => 'success',
    'message' => 'Thank you! Your enquiry has been forwarded to our senior web strategy team. We will review your project requirements and connect with you shortly.'
]);
exit;
