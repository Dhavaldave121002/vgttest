import React from "react";

export default function ValueProposition() {
  const values = [
    {
      title: "Professional Design Approach",
      description:
        "Every layout is thoughtfully designed from visual hierarchy to interaction design, crafting an authoritative brand impression that earns visitor trust.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m4.93 4.93 4.24 4.24"></path>
          <path d="m14.83 9.17 4.24-4.24"></path>
          <path d="m14.83 14.83 4.24 4.24"></path>
          <path d="m9.17 14.83-4.24 4.24"></path>
        </svg>
      ),
    },
    {
      title: "Mobile-First Development",
      description:
        "Engineered for high-intent mobile users across Gujarat and India, ensuring lightning load speeds, intuitive touch gestures, and flawless rendering on any handheld screen.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
    },
    {
      title: "SEO-Friendly Architecture",
      description:
        "Built strictly around Google Search Essentials with semantic HTML5 tags, crawlable internal linking, Schema.org structured data, and clean URL routing.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
    },
    {
      title: "User-Focused Experiences",
      description:
        "Streamlined information architecture and intentional navigation paths that guide prospective commercial clients smoothly toward conversion touchpoints.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Performance-Focused Implementation",
      description:
        "Strict adherence to Core Web Vitals thresholds—optimizing Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
    },
    {
      title: "Custom Business Requirements",
      description:
        "Bespoke technical solutions tailored to your unique enterprise workflow, avoid rigid generic themes to deliver sustainable software code you fully control.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <section className="site-section bg-subtle" aria-labelledby="value-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Value & Trust Proposition</span>
          <h2 id="value-heading" className="section-title">
            Web Design Solutions That Help Your Business Grow
          </h2>
          <p className="section-subtitle">
            We engineer websites grounded in engineering precision, transparent project execution, 
            and authentic commercial value for enterprises across Ahmedabad.
          </p>
        </div>

        <div className="value-props-grid">
          {values.map((item, idx) => (
            <div key={idx} className="value-card">
              <div className="value-card-icon">{item.icon}</div>
              <h3 className="value-card-title">{item.title}</h3>
              <p className="value-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
