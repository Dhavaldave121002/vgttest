import React from "react";
import { PORTFOLIO_PROJECTS } from "../data/seoData";

export default function PortfolioShowcase() {
  return (
    <section id="portfolio" className="site-section bg-subtle" aria-labelledby="portfolio-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Demonstrated Technical Capability</span>
          <h2 id="portfolio-heading" className="section-title">
            Website Design & Development Showcase
          </h2>
          <p className="section-subtitle">
            Explore examples of our structured web design architecture, tailored B2B interfaces, 
            and responsive frontends built for performance and search engine crawlability.
          </p>
        </div>

        <div className="portfolio-grid">
          {PORTFOLIO_PROJECTS.map((project) => (
            <article key={project.id} className="portfolio-card">
              {/* Device Mockup Visual Banner */}
              <div className="portfolio-preview-box">
                <span className="portfolio-badge">Verified Technical Architecture</span>
                <div style={{ textAlign: "center", width: "100%", zIndex: 1 }}>
                  {/* Stylized Desktop & Mobile Preview Frame */}
                  <div
                    style={{
                      display: "inline-flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "220px",
                        height: "100px",
                        backgroundColor: "#ffffff",
                        borderRadius: "6px",
                        boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        padding: "0.5rem",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div style={{ height: "6px", width: "100%", background: "#f1f5f9", borderRadius: "2px", marginBottom: "6px" }}></div>
                      <div style={{ height: "14px", width: "70%", background: "#2563eb", borderRadius: "3px", marginBottom: "6px" }}></div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
                        <div style={{ height: "35px", background: "#f8fafc", borderRadius: "3px", border: "1px solid #e2e8f0" }}></div>
                        <div style={{ height: "35px", background: "#f8fafc", borderRadius: "3px", border: "1px solid #e2e8f0" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Body */}
              <div className="portfolio-body">
                <span className="portfolio-category">{project.category}</span>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-desc">{project.description}</p>

                <div className="portfolio-tech-list">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="portfolio-tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="portfolio-note">
                  <strong>Engineering Metric:</strong> {project.metrics}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Transparent Developer Populated Note */}
        <div
          style={{
            marginTop: "2.5rem",
            padding: "1.25rem",
            backgroundColor: "#ffffff",
            borderRadius: "var(--radius-md)",
            border: "1px dashed var(--color-border)",
            textAlign: "center",
            fontSize: "0.875rem",
            color: "var(--text-light)",
          }}
        >
          <strong>Notice on Client Data Transparency:</strong> In strict alignment with Google guidelines and Vertex Global Tech 
          confidentiality non-disclosure agreements (NDAs), we only publish live URLs with explicit client consent. Live client case studies 
          are updated progressively upon project deployment. Contact our team to review relevant live sector-specific demonstrations.
        </div>
      </div>
    </section>
  );
}
