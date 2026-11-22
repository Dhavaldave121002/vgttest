import React from "react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Custom-Designed Websites",
      desc: "Tailored visual design built specifically for your brand identity and market sector, avoiding generic prefabricated templates.",
    },
    {
      title: "Responsive Cross-Device Development",
      desc: "Pixel-accurate rendering calibrated across mobile devices (360px to 414px), tablets, and high-resolution desktop viewports.",
    },
    {
      title: "Clean and Maintainable Code",
      desc: "Standards-compliant component architecture in React and modular PHP backends, making future modifications straightforward.",
    },
    {
      title: "SEO-Ready Website Structure",
      desc: "Engineered around Google Search Essentials with semantic markup, OpenGraph protocol, JSON-LD schemas, and crawlable links.",
    },
    {
      title: "Performance Optimization",
      desc: "Optimized for Google Core Web Vitals targets—reducing payload size, minimizing render blocking, and preventing layout shift.",
    },
    {
      title: "Business-Focused Design",
      desc: "Interface structures designed to clarify your commercial offerings, establish brand credibility, and encourage qualified user enquiries.",
    },
    {
      title: "Direct & Clear Communication",
      desc: "Transparent project timelines, defined scope milestones, and direct communication throughout the design and development lifecycle.",
    },
    {
      title: "Post-Launch Support",
      desc: "Ongoing maintenance, technical updates, and guidance provided as formally agreed within the defined project scope.",
    },
  ];

  return (
    <section className="site-section bg-subtle" aria-labelledby="why-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Direct Partnership</span>
          <h2 id="why-heading" className="section-title">
            Why Choose Vertex Global Tech?
          </h2>
          <p className="section-subtitle">
            We focus on authentic technical execution, clear communication, and business-focused web development 
            without inflated marketing claims or empty guarantees.
          </p>
        </div>

        <div className="value-props-grid">
          {points.map((pt, idx) => (
            <div key={idx} className="value-card">
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  backgroundColor: "var(--color-accent-soft)",
                  color: "var(--color-accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                  fontWeight: "bold",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="value-card-title" style={{ fontSize: "1.125rem" }}>
                {pt.title}
              </h3>
              <p className="value-card-desc">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
