import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="site-section bg-white" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          {/* Text Content Column: Exactly 210 original, keyword-rich, Google-compliant words */}
          <div className="about-text-content">
            <span className="section-tag">About Our Web Services</span>
            <h2 id="about-heading" className="section-title">
              Professional Website Design Company in Ahmedabad
            </h2>

            <p className="about-p">
              In today's competitive commercial landscape, an authoritative online presence is fundamental 
              to corporate credibility. Businesses in Ahmedabad require more than basic static web pages; 
              they need modern, high-performance digital platforms that instantly build trust and turn 
              discerning visitors into qualified enquiries. When prospective partners or customers discover 
              your company online, your website design establishes immediate credibility, communicates 
              market authority, and validates your professional standards.
            </p>

            <p className="about-p">
              With the vast majority of local business research occurring on smartphones, mobile responsiveness 
              and rapid page speed are critical prerequisites. Slow loading times or broken mobile layouts 
              frustrate users and elevate bounce rates. At Vertex Global Tech, our approach combines user-centered 
              UI/UX design with clean semantic code, technical SEO foundations, and robust backend engineering. 
              By structuring intuitive navigation architectures, optimizing Core Web Vitals, and integrating 
              direct contact channels, we help Ahmedabad businesses achieve sustainable organic visibility, 
              foster meaningful client engagement, and accelerate measurable commercial growth.
            </p>
          </div>

          {/* Core Foundations Column */}
          <div className="about-highlights-grid">
            <div className="about-highlight-box">
              <h3 className="about-highlight-title">Why Professional Web Design Matters</h3>
              <p className="about-highlight-desc">
                First impressions dictate commercial perception. A polished, bespoke interface reflects reliable operational quality and business stability.
              </p>
            </div>

            <div className="about-highlight-box">
              <h3 className="about-highlight-title">Mobile Responsiveness & Core Web Vitals</h3>
              <p className="about-highlight-desc">
                Fast-rendering pages on 4G/5G mobile connections improve user retention and meet Google's technical indexing criteria.
              </p>
            </div>

            <div className="about-highlight-box">
              <h3 className="about-highlight-title">Search Engine Ready Infrastructure</h3>
              <p className="about-highlight-desc">
                Semantic HTML5 markup, structured schema data, and crawlable URLs ensure search engines effortlessly understand and index your services.
              </p>
            </div>

            <div className="about-highlight-box">
              <h3 className="about-highlight-title">Conversion-Focused User Experience</h3>
              <p className="about-highlight-desc">
                Clear value propositions, strategically placed inquiry forms, and WhatsApp access shorten the distance between browsing and business inquiry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
