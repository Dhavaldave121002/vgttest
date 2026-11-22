import React from "react";
import { DEVELOPMENT_PROCESS } from "../data/seoData";

export default function ProcessTimeline() {
  return (
    <section id="process" className="site-section bg-white" aria-labelledby="process-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Engineering Methodology</span>
          <h2 id="process-heading" className="section-title">
            Our Website Design & Development Process
          </h2>
          <p className="section-subtitle">
            A transparent, structured eight-stage development framework ensuring complete alignment, 
            technical excellence, and predictable milestone delivery.
          </p>
        </div>

        <div className="timeline-grid">
          {DEVELOPMENT_PROCESS.map((item) => (
            <div key={item.step} className="process-card">
              <span className="process-step-num">{item.step}</span>
              <h3 className="process-step-title">{item.title}</h3>
              <p className="process-step-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
