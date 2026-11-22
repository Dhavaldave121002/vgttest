import React from "react";

export default function PricingApproach() {
  const factors = [
    {
      title: "Number of Unique Page Layouts",
      desc: "A single-page landing site requires different development resources than a multi-tier corporate portal with dedicated service pages.",
    },
    {
      title: "Custom Design & Interaction Complexity",
      desc: "Tailored UI design systems, micro-interactions, custom SVG diagrams, and advanced UI prototyping require targeted creative hours.",
    },
    {
      title: "Required Functionalities & Workflows",
      desc: "Advanced search filtering, user authentication, customer portals, or interactive booking systems impact the development scope.",
    },
    {
      title: "Ecommerce & Transaction Integrations",
      desc: "Product variations, inventory logic, payment gateways (UPI, Netbanking, Cards), and shipping API webhooks determine the store's architecture.",
    },
    {
      title: "Backend Requirements & Custom CMS",
      desc: "Custom PHP API layers, secure database schemas, automated notifications, and bespoke content management setups.",
    },
    {
      title: "Third-Party Integrations",
      desc: "Connecting your web platform with enterprise ERP systems, CRM software, marketing analytics, or external WhatsApp APIs.",
    },
  ];

  return (
    <section id="pricing" className="site-section bg-white" aria-labelledby="pricing-heading">
      <div className="container">
        <div className="pricing-content-box">
          <div className="section-header left-aligned" style={{ maxWidth: "800px", marginBottom: "2rem" }}>
            <span className="section-tag">Transparent Investment Scope</span>
            <h2 id="pricing-heading" className="section-title">
              Website Design Solutions for Different Business Needs
            </h2>
            <p className="section-subtitle">
              Every business possesses distinct operational needs and market objectives. Because we build custom, 
              scalable digital solutions rather than cookie-cutter templates, our pricing is determined transparently 
              based on your verified project requirements.
            </p>
          </div>

          <div className="pricing-factors-grid">
            {factors.map((item, idx) => (
              <div key={idx} className="pricing-factor-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2rem", padding: "1.5rem", backgroundColor: "var(--color-bg-subtle)", borderRadius: "var(--radius-sm)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
            <div>
              <h3 style={{ fontSize: "1.125rem", color: "var(--color-primary)", marginBottom: "0.25rem" }}>
                Request a Detailed Scope & Quotation
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", margin: 0 }}>
                Share your website vision with our team. We evaluate your functional specifications and provide an honest, itemized quotation.
              </p>
            </div>
            <a href="#enquiry" className="btn btn-primary">
              Get Custom Quotation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
