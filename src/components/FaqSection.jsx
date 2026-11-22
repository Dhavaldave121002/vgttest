import React, { useState } from "react";
import { FAQ_ITEMS } from "../data/seoData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // Open first item by default for accessible visual cue

  const toggleAccordion = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section id="faq" className="site-section bg-subtle" aria-labelledby="faq-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Informed Decisions</span>
          <h2 id="faq-heading" className="section-title">
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle">
            Clear, transparent answers regarding professional website design, technical requirements, 
            development timelines, and maintenance in Ahmedabad.
          </p>
        </div>

        <div className="faq-accordion-list">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const headingId = `faq-title-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
                <h3>
                  <button
                    type="button"
                    id={headingId}
                    className="faq-question-btn"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span>{item.question}</span>
                    <svg
                      className="faq-icon-arrow"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="faq-answer-panel"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
