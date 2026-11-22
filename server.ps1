# ==============================================================================
# Vertex Global Tech - High Performance Local HTTP Web Server
# Serves the complete Ahmedabad Web Design Landing Page and Mock API
# ==============================================================================

param(
    [int]$Port = 8080
)

$baseDir = if ($PSScriptRoot) { $PSScriptRoot } else { "C:\Users\Dhaval\.gemini\antigravity\scratch\vertex-web-design-ahmedabad" }
$publicDir = Join-Path $baseDir "public"
$storageDir = Join-Path $baseDir "storage"
if (!(Test-Path $storageDir)) {
    New-Item -ItemType Directory -Path $storageDir -Force | Out-Null
}

$endpoint = New-Object System.Net.IPEndPoint([System.Net.IPAddress]::Loopback, $Port)
$server = New-Object System.Net.Sockets.TcpListener($endpoint)

try {
    $server.Start()
    Write-Host "====================================================================" -ForegroundColor Cyan
    Write-Host " Vertex Global Tech - Local Web Server Running!" -ForegroundColor Green
    Write-Host " URL: http://localhost:$Port/" -ForegroundColor Yellow
    Write-Host " Primary Landing Page: http://localhost:$Port/web-design-services-ahmedabad/" -ForegroundColor Yellow
    Write-Host " Root Directory: $publicDir" -ForegroundColor Gray
    Write-Host "====================================================================" -ForegroundColor Cyan

    while ($true) {
        $client = $server.AcceptTcpClient()
        $stream = $client.GetStream()
        $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8)
        $writer = New-Object System.IO.BinaryWriter($stream)

        $requestLine = $reader.ReadLine()
        if ([string]::IsNullOrEmpty($requestLine)) {
            $client.Close()
            continue
        }

        # Parse HTTP Method and Path
        $tokens = $requestLine.Split(" ")
        $method = $tokens[0]
        $rawPath = if ($tokens.Length -gt 1) { $tokens[1] } else { "/" }
        $urlPath = $rawPath.Split("?")[0]

        # Read remaining headers and optional POST content
        $contentLength = 0
        while ($true) {
            $line = $reader.ReadLine()
            if ([string]::IsNullOrEmpty($line)) { break }
            if ($line -match "^Content-Length:\s*(\d+)") {
                $contentLength = [int]$matches[1]
            }
        }

        $postBody = ""
        if ($method -eq "POST" -and $contentLength -gt 0) {
            $chars = New-Object char[] $contentLength
            $readCount = $reader.Read($chars, 0, $contentLength)
            $postBody = New-Object string($chars, 0, $readCount)
        }

        # Route matching
        $responseBytes = @()
        $contentType = "text/html; charset=utf-8"
        $statusCode = "200 OK"

        if ($urlPath -eq "/" -or $urlPath -eq "/web-design-services-ahmedabad/" -or $urlPath -eq "/index.html" -or $urlPath -eq "/preview.html") {
            $filePath = Join-Path $publicDir "preview.html"
            if (Test-Path $filePath) {
                $responseBytes = [System.IO.File]::ReadAllBytes($filePath)
                $contentType = "text/html; charset=utf-8"
            }
        }
        elseif ($urlPath -eq "/favicon.svg") {
            $filePath = Join-Path $publicDir "favicon.svg"
            if (Test-Path $filePath) {
                $responseBytes = [System.IO.File]::ReadAllBytes($filePath)
                $contentType = "image/svg+xml"
            }
        }
        elseif ($urlPath -eq "/robots.txt") {
            $filePath = Join-Path $publicDir "robots.txt"
            if (Test-Path $filePath) {
                $responseBytes = [System.IO.File]::ReadAllBytes($filePath)
                $contentType = "text/plain; charset=utf-8"
            }
        }
        elseif ($urlPath -eq "/sitemap.xml") {
            $filePath = Join-Path $publicDir "sitemap.xml"
            if (Test-Path $filePath) {
                $responseBytes = [System.IO.File]::ReadAllBytes($filePath)
                $contentType = "application/xml; charset=utf-8"
            }
        }
        elseif ($urlPath -eq "/api/csrf.php") {
            $json = '{"status":"success","token":"vgt_csrf_' + [System.Guid]::NewGuid().ToString("N") + '"}'
            $responseBytes = [System.Text.Encoding]::UTF8.GetBytes($json)
            $contentType = "application/json; charset=utf-8"
        }
        elseif ($urlPath -eq "/api/contact.php") {
            # Log lead to storage/leads.jsonl
            $leadsFile = Join-Path $storageDir "leads.jsonl"
            $leadEntry = [ordered]@{
                timestamp = (Get-Date).ToString("o")
                ip = $client.Client.RemoteEndPoint.ToString()
                body = $postBody
            }
            $leadJson = ($leadEntry | ConvertTo-Json -Compress) + "`n"
            [System.IO.File]::AppendAllText($leadsFile, $leadJson, [System.Text.Encoding]::UTF8)

            $json = '{"status":"success","message":"Thank you! Your enquiry has been received. Our senior web strategy team will contact you shortly."}'
            $responseBytes = [System.Text.Encoding]::UTF8.GetBytes($json)
            $contentType = "application/json; charset=utf-8"
        }
        else {
            $relativeFile = $urlPath.TrimStart("/").Replace("/", "\")
            $candidatePath = Join-Path $publicDir $relativeFile
            if (Test-Path $candidatePath -PathType Leaf) {
                $responseBytes = [System.IO.File]::ReadAllBytes($candidatePath)
                if ($candidatePath.EndsWith(".css")) { $contentType = "text/css; charset=utf-8" }
                elseif ($candidatePath.EndsWith(".js")) { $contentType = "application/javascript; charset=utf-8" }
                elseif ($candidatePath.EndsWith(".svg")) { $contentType = "image/svg+xml" }
            } else {
                $statusCode = "404 Not Found"
                $notFoundHtml = "<h1>404 Not Found</h1><p>Requested resource was not found on this server.</p>"
                $responseBytes = [System.Text.Encoding]::UTF8.GetBytes($notFoundHtml)
            }
        }

        # Build HTTP Response Header
        $headerText = "HTTP/1.1 $statusCode`r`n" +
                      "Content-Type: $contentType`r`n" +
                      "Content-Length: $($responseBytes.Length)`r`n" +
                      "Connection: close`r`n" +
                      "Access-Control-Allow-Origin: *`r`n" +
                      "`r`n"
        $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($headerText)

        $writer.Write($headerBytes)
        if ($responseBytes.Length -gt 0) {
            $writer.Write($responseBytes)
        }
        $writer.Flush()
        $client.Close()
    }
}
finally {
    $server.Stop()
}
