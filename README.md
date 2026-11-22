# Vertex Global Tech - Professional Web Design Services Ahmedabad

Production-ready, SEO-optimized, responsive landing page engineered for **Vertex Global Tech** targeting businesses and enterprises in Ahmedabad, Gujarat, India.

---

## 🌐 Project Overview
- **Brand:** Vertex Global Tech
- **Website:** [https://vertexglobaltech.in/](https://vertexglobaltech.in/)
- **Target Location:** Ahmedabad, Gujarat, India
- **Canonical URL:** `https://vertexglobaltech.in/web-design-services-ahmedabad/`
- **Primary Keyword:** `Web Design Services Ahmedabad`
- **Architecture:** Clean Semantic HTML5 + React Components + Modular CSS + Secure PHP API Backend

---

## 🚀 Instant Local Run & Preview

### Option 1: Live HTTP Server (Port 8080)
The local server is already running! You can immediately open:
👉 **[http://localhost:8080/web-design-services-ahmedabad/](http://localhost:8080/web-design-services-ahmedabad/)**

To restart or run the server anytime, simply double-click:
`start_server.bat`

### Option 2: Direct File Open
Double-click `open_page.bat` or open `public/preview.html` in your web browser:
`file:///C:/Users/Dhaval/.gemini/antigravity/scratch/vertex-web-design-ahmedabad/public/preview.html`

---

## 📁 Project Directory Structure
```
vertex-web-design-ahmedabad/
├── public/
│   ├── preview.html        # 100% self-contained runnable preview with embedded CSS & JS
│   ├── index.html          # Pre-rendered SEO HTML with JSON-LD schemas & React mounting point
│   ├── favicon.svg         # Vertex Global Tech SVG favicon
│   ├── robots.txt          # Production robots.txt with sitemap reference
│   └── sitemap.xml         # XML sitemap with 0.9 priority for Ahmedabad landing page
├── src/
│   ├── components/
│   │   ├── Header.jsx               # Sticky nav, mobile drawer, click-to-call, CTA
│   │   ├── Breadcrumbs.jsx          # Schema.org BreadcrumbList navigation
│   │   ├── HeroSection.jsx          # Section 1: H1, supporting copy, mockups, trust indicators
│   │   ├── ValueProposition.jsx     # Section 2: 6 value & trust propositions
│   │   ├── AboutSection.jsx         # Section 3: ~210 words original SEO copy for Ahmedabad
│   │   ├── ServicesGrid.jsx         # Section 4: 10 service cards with icons & internal links
│   │   ├── ProcessTimeline.jsx      # Section 5: 8-stage development methodology
│   │   ├── WhyChooseUs.jsx          # Section 6: 8 verifiable agency differentiators
│   │   ├── FeaturesGrid.jsx         # Section 7: 12 technical capabilities visual grid
│   │   ├── IndustriesSection.jsx    # Section 8: 10 key industries across Gujarat
│   │   ├── PricingApproach.jsx      # Section 9: Transparent pricing factors & custom quote CTA
│   │   ├── PortfolioShowcase.jsx    # Section 10: Verified project showcase with developer notes
│   │   ├── LocalSeoAhmedabad.jsx    # Section 11: 14 Ahmedabad commercial & industrial localities
│   │   ├── FaqSection.jsx           # Section 12: 10 interactive accordions (40-70 words answers)
│   │   ├── EnquirySection.jsx       # Section 13: Premium consultation form with spam protection
│   │   ├── Footer.jsx               # Section 14: Comprehensive footer with verified contacts & links
│   │   └── QuickContactFloating.jsx # Floating WhatsApp and Click-to-Call buttons
│   ├── data/
│   │   └── seoData.js               # Centralized data repository for all text, links, and schemas
│   ├── styles/
│   │   └── index.css                # Modern agency design system with responsive breakpoints
│   ├── App.jsx                      # Main React orchestrator
│   └── main.jsx                     # React entry point & hydration logic
├── api/
│   ├── csrf.php                     # Secure CSRF token generator & session validator
│   └── contact.php                  # Secure lead handler: sanitization, honeypot, rate-limiting, mailer
├── storage/
│   └── leads.jsonl                  # Local audit log storing submitted inquiries
├── .htaccess                        # Apache/LiteSpeed clean URL routing & security headers
├── package.json                     # React 18 & Vite configuration
├── vite.config.js                   # Vite bundler build settings & API proxy
├── server.ps1                       # Standalone PowerShell Winsock HTTP web server
├── start_server.bat                 # One-click Windows server launcher
├── open_page.bat                    # One-click browser preview launcher
└── README.md                        # Complete project documentation
```

---

## 🔍 SEO Strategy & Compliance Summary

### 1. Title & Meta Information
- **Title:** `Professional Web Design Services Ahmedabad | Vertex Global Tech`
- **Description:** `Looking for professional web design services in Ahmedabad? Vertex Global Tech creates responsive, SEO-friendly business websites, ecommerce websites and custom web solutions.`
- **Canonical:** `https://vertexglobaltech.in/web-design-services-ahmedabad/`
- **Robots:** `index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1`

### 2. Semantic Heading Hierarchy
- **H1 (Single occurrence):** `Professional Web Design Services in Ahmedabad`
- **H2s:** Clear thematic section headings (Trust & Value, About, Services, Process, Why Choose Us, Features, Industries, Pricing, Showcase, Local SEO, FAQ, Enquiry)
- **H3s:** Card titles, process steps, and accordion triggers

### 3. Structured Data (JSON-LD)
Pre-configured in `<head>` conforming strictly to Schema.org:
1. `Organization`: Verified business entity data, phone numbers, email, sameAs Instagram link.
2. `WebSite`: Search authority mapping.
3. `BreadcrumbList`: Home > Services > Web Design Services Ahmedabad.
4. `Service`: Detailed service catalog, areaServed (Ahmedabad, Gujarat, India), provider mapping.
5. `FAQPage`: 10 visible questions and answers matching the page content verbatim.

### 4. Verified Contact Details
- **Primary Phone:** `+91 8511172099` (Click-to-Call & WhatsApp)
- **Secondary Phone:** `+91 7069412729`
- **Email:** `connectvertexglobal2209@gmail.com`
- **Instagram:** `@vertex_global_tech` ([https://www.instagram.com/vertex_global_tech](https://www.instagram.com/vertex_global_tech))
- **Location:** Ahmedabad, Gujarat, India (No fabricated street address)

---

## 🛡️ Lead Generation & Security Features
- **Frontend Validation:** Regex checking for Indian/international phone numbers, valid email formatting, and minimum 15 characters of requirement description.
- **Spam Trap:** Hidden honeypot field (`hpWebsite`) catches automated spam bots without CAPTCHA friction.
- **CSRF Protection:** Secure session token validation against cross-site request forgery.
- **Rate Limiting:** Prevents denial-of-service abuse by throttling excessive submissions per IP.
- **Email Routing:** Dispatches formatted lead notifications to `connectvertexglobal2209@gmail.com` with anti-header injection sanitization.
- **Local Fallback:** Records all leads to `storage/leads.jsonl` with `LOCK_EX` to ensure zero lead loss even during mail server hiccups.

# vgttest
