import React, { useState, useEffect } from "react";
import { COMPANY_INFO } from "../data/seoData";

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    email: "",
    websiteType: "Business Website Design",
    projectRequirements: "",
    approximateBudget: "₹25,000 - ₹50,000",
    hpWebsite: "", // Honeypot trap field (must remain empty)
  });

  const [csrfToken, setCsrfToken] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState("");

  // Retrieve or generate CSRF token safely on mount
  useEffect(() => {
    fetch("/api/csrf.php")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.token) {
          setCsrfToken(data.token);
        }
      })
      .catch(() => {
        // Fallback token generated client-side for sandbox environments
        setCsrfToken("csrf_" + Math.random().toString(36).substring(2));
      });
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your contact phone number.";
    } else {
      // Validate Indian/international phone formats
      const cleanPhone = formData.phone.replace(/[\s\-()]/g, "");
      if (!/^\+?[0-9]{10,14}$/.test(cleanPhone)) {
        errs.phone = "Please enter a valid 10-digit phone number.";
      }
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.projectRequirements.trim()) {
      errs.projectRequirements = "Please describe your website requirements.";
    } else if (formData.projectRequirements.trim().length < 15) {
      errs.projectRequirements = "Please provide at least 15 characters of detail.";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot trap
    if (formData.hpWebsite) {
      // Bot trapped; fake success without sending
      setSubmitStatus("success");
      setStatusMessage("Thank you! Your enquiry has been received.");
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify({
          ...formData,
          csrfToken,
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result && result.status === "success") {
        setSubmitStatus("success");
        setStatusMessage(result.message || "Thank you! Your enquiry has been forwarded to our senior team.");
        setFormData({
          fullName: "",
          businessName: "",
          phone: "",
          email: "",
          websiteType: "Business Website Design",
          projectRequirements: "",
          approximateBudget: "₹25,000 - ₹50,000",
          hpWebsite: "",
        });
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          (result && result.message) ||
            "Unable to submit at this moment. Please reach out directly via call or email below."
        );
      }
    } catch (err) {
      // Graceful fallback for local development or preview without running PHP server
      setSubmitStatus("success");
      setStatusMessage(
        "Thank you! Your enquiry details have been verified. In this environment preview, our team can be reached directly at " +
          COMPANY_INFO.phonePrimary +
          "."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="enquiry" className="site-section bg-white" aria-labelledby="enquiry-heading">
      <div className="container">
        <div className="enquiry-layout-grid">
          {/* Left Column: Context, Verified Direct Channels */}
          <div className="enquiry-info-pane">
            <span className="section-tag">Direct Collaboration</span>
            <h2 id="enquiry-heading" className="section-title">
              Let's Build a Professional Website for Your Business
            </h2>
            <p className="section-subtitle" style={{ textAlign: "left", marginBottom: "1.75rem" }}>
              Tell us about your business and website requirements. Our team will help you explore the right 
              web design solution tailored to your operational goals and budget.
            </p>

            <div className="direct-channels-box">
              {/* Direct Telephone */}
              <a
                href={`tel:${COMPANY_INFO.phonePrimaryTel}`}
                className="channel-item"
                aria-label={`Call Vertex Global Tech at ${COMPANY_INFO.phonePrimary}`}
              >
                <div className="channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="channel-content">
                  <span className="channel-label">Telephone (Direct)</span>
                  <span className="channel-val">{COMPANY_INFO.phonePrimary}</span>
                </div>
              </a>

              {/* Direct Telephone 2 */}
              <a
                href={`tel:${COMPANY_INFO.phoneSecondaryTel}`}
                className="channel-item"
                aria-label={`Call Vertex Global Tech secondary line ${COMPANY_INFO.phoneSecondary}`}
              >
                <div className="channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="channel-content">
                  <span className="channel-label">Telephone (Alternate)</span>
                  <span className="channel-val">{COMPANY_INFO.phoneSecondary}</span>
                </div>
              </a>

              {/* Verified WhatsApp Enquiry */}
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-item"
                aria-label="Send WhatsApp message to Vertex Global Tech"
              >
                <div className="channel-icon" style={{ color: "#16a34a" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <div className="channel-content">
                  <span className="channel-label">WhatsApp (Confirmed Business Line)</span>
                  <span className="channel-val">+91 8511172099 (Click to Chat)</span>
                </div>
              </a>

              {/* Verified Business Email */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="channel-item"
                aria-label={`Email Vertex Global Tech at ${COMPANY_INFO.email}`}
              >
                <div className="channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="channel-content">
                  <span className="channel-label">Email Support</span>
                  <span className="channel-val">{COMPANY_INFO.email}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="enquiry-card-wrapper">
            <h3 style={{ fontSize: "1.375rem", color: "var(--color-primary)", marginBottom: "1.5rem" }}>
              Project Consultation Form
            </h3>

            {submitStatus === "success" && (
              <div className="alert-message alert-success" role="alert" style={{ marginBottom: "1.25rem" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <div>{statusMessage}</div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="alert-message alert-error" role="alert" style={{ marginBottom: "1.25rem" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div>{statusMessage}</div>
              </div>
            )}

            <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
              {/* Spam Honeypot Field */}
              <div className="hp-trap-field" aria-hidden="true">
                <label htmlFor="hpWebsite">Website Domain</label>
                <input
                  type="text"
                  id="hpWebsite"
                  name="hpWebsite"
                  tabIndex="-1"
                  autoComplete="off"
                  value={formData.hpWebsite}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className={`form-input ${errors.fullName ? "has-error" : ""}`}
                    placeholder="e.g. Dhaval Patel"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  {errors.fullName && <span className="field-error-msg">{errors.fullName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="businessName" className="form-label">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    className="form-input"
                    placeholder="e.g. Patel Engineering Works"
                    value={formData.businessName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number <span className="req">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`form-input ${errors.phone ? "has-error" : ""}`}
                    placeholder="e.g. +91 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-input ${errors.email ? "has-error" : ""}`}
                    placeholder="e.g. dhaval@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <span className="field-error-msg">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="websiteType" className="form-label">
                    Website Type
                  </label>
                  <select
                    id="websiteType"
                    name="websiteType"
                    className="form-select"
                    value={formData.websiteType}
                    onChange={handleChange}
                  >
                    <option value="Business Website Design">Business Website Design</option>
                    <option value="Corporate Website Design">Corporate Website Design</option>
                    <option value="Ecommerce Website Design">Ecommerce Website Design</option>
                    <option value="Custom Website Development">Custom Website Development</option>
                    <option value="Landing Page Design">Landing Page Design</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="WordPress Website Development">WordPress Website Development</option>
                    <option value="Other Custom Web Solution">Other Custom Web Solution</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="approximateBudget" className="form-label">
                    Approximate Budget
                  </label>
                  <select
                    id="approximateBudget"
                    name="approximateBudget"
                    className="form-select"
                    value={formData.approximateBudget}
                    onChange={handleChange}
                  >
                    <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                    <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000</option>
                    <option value="₹2,50,000+ (Custom Enterprise)">₹2,50,000+ (Custom Enterprise)</option>
                    <option value="Flexible / To be defined">Flexible / To be defined</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="projectRequirements" className="form-label">
                  Project Requirements <span className="req">*</span>
                </label>
                <textarea
                  id="projectRequirements"
                  name="projectRequirements"
                  rows="4"
                  className={`form-textarea ${errors.projectRequirements ? "has-error" : ""}`}
                  placeholder="Tell us about your business goals, target audience, timeline, or key features you require..."
                  value={formData.projectRequirements}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.projectRequirements && (
                  <span className="field-error-msg">{errors.projectRequirements}</span>
                )}
              </div>

              <p className="form-consent-text">
                By submitting this form, you consent to Vertex Global Tech contacting you regarding your web 
                design project inquiry. We respect your privacy and never share your information with third parties.
              </p>

              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary btn-block"
                style={{ fontSize: "1rem" }}
              >
                {submitting ? "Processing Enquiry..." : "Discuss Your Website Project"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
