import React from "react";
import { AHMEDABAD_LOCALITIES } from "../data/seoData";

export default function LocalSeoAhmedabad() {
  return (
    <section id="local-seo" className="site-section bg-white" aria-labelledby="localseo-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Regional Commercial Coverage</span>
          <h2 id="localseo-heading" className="section-title">
            Website Design Services for Businesses Across Ahmedabad
          </h2>
          <p className="section-subtitle">
            From premier commercial corridors and corporate high-rises to sprawling GIDC industrial estates, 
            Vertex Global Tech engineers digital experiences designed to meet the business standards of Gujarat's 
            commercial capital.
          </p>
        </div>

        <div className="localities-grid">
          {AHMEDABAD_LOCALITIES.map((loc, idx) => (
            <div key={idx} className="locality-card">
              <div className="locality-header">
                <h3 className="locality-name">{loc.name}</h3>
                <span className="locality-type">{loc.type}</span>
              </div>
              <p className="locality-desc">{loc.description}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "2.5rem",
            padding: "1.5rem",
            backgroundColor: "var(--color-bg-subtle)",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--color-border)",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <h3 style={{ fontSize: "1.0625rem", color: "var(--color-primary)" }}>
            Centralized Web Engineering Agency in Ahmedabad, Gujarat
          </h3>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
            Vertex Global Tech is headquartered in Ahmedabad, Gujarat, India. Rather than creating fabricated branch 
            addresses, our centralized development agency directly provides comprehensive digital strategy, frontend UI/UX design, 
            custom PHP backend programming, and technical SEO support for enterprises throughout the entire Ahmedabad metropolitan 
            region and Western India.
          </p>
        </div>
      </div>
    </section>
  );
}
