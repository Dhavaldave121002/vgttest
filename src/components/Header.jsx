import React, { useState } from "react";
import { COMPANY_INFO } from "../data/seoData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        {/* Brand Identity */}
        <a href="https://vertexglobaltech.in/" className="brand-logo-wrap" aria-label="Vertex Global Tech Home">
          <div className="brand-mark">V</div>
          <div className="brand-text">
            <span className="brand-name">Vertex Global Tech</span>
            <span className="brand-tagline">Web & Digital Solutions</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" aria-label="Primary Navigation">
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#features" className="nav-link">Capabilities</a>
          <a href="#industries" className="nav-link">Industries</a>
          <a href="#local-seo" className="nav-link">Ahmedabad Hubs</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>

        {/* Action Controls */}
        <div className="header-cta-group">
          <a
            href={`tel:${COMPANY_INFO.phonePrimaryTel}`}
            className="header-phone-link"
            aria-label={`Call Vertex Global Tech at ${COMPANY_INFO.phonePrimary}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>{COMPANY_INFO.phonePrimary}</span>
          </a>

          <a href="#enquiry" className="btn btn-primary" style={{ padding: "0.6rem 1.2rem", minHeight: "40px" }}>
            Get Free Consultation
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <a href="#about" className="mobile-nav-link" onClick={closeMenu}>About Us</a>
          <a href="#services" className="mobile-nav-link" onClick={closeMenu}>Web Design Services</a>
          <a href="#process" className="mobile-nav-link" onClick={closeMenu}>Our Process</a>
          <a href="#features" className="mobile-nav-link" onClick={closeMenu}>Features & Architecture</a>
          <a href="#industries" className="mobile-nav-link" onClick={closeMenu}>Industries Served</a>
          <a href="#pricing" className="mobile-nav-link" onClick={closeMenu}>Pricing Structure</a>
          <a href="#portfolio" className="mobile-nav-link" onClick={closeMenu}>Work Showcase</a>
          <a href="#local-seo" className="mobile-nav-link" onClick={closeMenu}>Ahmedabad Coverage</a>
          <a href="#faq" className="mobile-nav-link" onClick={closeMenu}>Frequently Asked Questions</a>
          <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <a href={`tel:${COMPANY_INFO.phonePrimaryTel}`} className="btn btn-secondary btn-block">
              Call {COMPANY_INFO.phonePrimary}
            </a>
            <a href="#enquiry" className="btn btn-primary btn-block" onClick={closeMenu}>
              Discuss Your Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
