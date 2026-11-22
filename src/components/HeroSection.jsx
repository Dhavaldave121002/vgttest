import React from "react";
import { COMPANY_INFO } from "../data/seoData";

export default function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        {/* Hero Content Column */}
        <div className="hero-content">
          <div className="section-tag">
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--color-accent)" }}></span>
            Ahmedabad's Trusted Web Engineering Agency
          </div>

          <h1 id="hero-heading" className="hero-h1">
            Professional Web Design Services in Ahmedabad
          </h1>

          <p className="hero-p">
            Build a powerful online presence with professionally designed, responsive and SEO-friendly websites. 
            Vertex Global Tech helps businesses in Ahmedabad create modern digital experiences that improve brand credibility, 
            engage visitors and support business growth.
          </p>

          <div className="hero-cta-group">
            <a href="#enquiry" className="btn btn-primary">
              <span>Get a Free Consultation</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#services" className="btn btn-secondary">
              Explore Our Services
            </a>
          </div>

          {/* Genuine Trust Indicators */}
          <div className="hero-trust-bar">
            <div className="trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Custom Coded Architecture</span>
            </div>
            <div className="trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Mobile-First Responsive</span>
            </div>
            <div className="trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>SEO-Ready Hierarchy</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Column: Interactive Realistic Agency Mockup */}
        <div className="hero-mockup-wrapper" aria-hidden="true">
          {/* Desktop Browser Window Mockup */}
          <div className="desktop-mockup-frame">
            <div className="mockup-browser-header">
              <div className="browser-dots">
                <span className="browser-dot"></span>
                <span className="browser-dot"></span>
                <span className="browser-dot"></span>
              </div>
              <div className="browser-address-bar">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>https://vertexglobaltech.in/web-design-services-ahmedabad/</span>
              </div>
            </div>

            <div className="mockup-inner-preview">
              {/* Internal Mockup Header */}
              <div className="mockup-wireframe-nav">
                <div className="wireframe-logo"></div>
                <div className="wireframe-links">
                  <div className="wireframe-link"></div>
                  <div className="wireframe-link"></div>
                  <div className="wireframe-link"></div>
                </div>
              </div>

              {/* Internal Mockup Hero Area */}
              <div className="mockup-wireframe-hero">
                <div>
                  <div className="wireframe-hero-title"></div>
                  <div className="wireframe-hero-sub"></div>
                  <div className="wireframe-hero-btn"></div>
                </div>
                <div className="wireframe-hero-box"></div>
              </div>

              {/* Internal Mockup Cards */}
              <div className="mockup-wireframe-cards">
                <div className="wireframe-card">
                  <div className="wireframe-card-icon"></div>
                  <div className="wireframe-card-line"></div>
                  <div className="wireframe-card-line sm"></div>
                </div>
                <div className="wireframe-card">
                  <div className="wireframe-card-icon"></div>
                  <div className="wireframe-card-line"></div>
                  <div className="wireframe-card-line sm"></div>
                </div>
                <div className="wireframe-card">
                  <div className="wireframe-card-icon"></div>
                  <div className="wireframe-card-line"></div>
                  <div className="wireframe-card-line sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Overlapping Mobile Device Mockup */}
          <div className="mobile-mockup-frame">
            <div className="mobile-notch"></div>
            <div className="mobile-content-screen">
              <div className="mobile-row-line"></div>
              <div className="mobile-text-line"></div>
              <div className="mobile-text-line" style={{ width: "80%" }}></div>
              <div className="mobile-badge">Ahmedabad B2B</div>
              <div style={{ marginTop: "0.5rem", padding: "0.3rem", background: "#f1f5f9", borderRadius: "4px" }}>
                <div style={{ height: "4px", width: "90%", background: "#2563eb", borderRadius: "2px", marginBottom: "3px" }}></div>
                <div style={{ height: "4px", width: "60%", background: "#94a3b8", borderRadius: "2px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
