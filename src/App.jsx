import React from "react";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import HeroSection from "./components/HeroSection";
import ValueProposition from "./components/ValueProposition";
import AboutSection from "./components/AboutSection";
import ServicesGrid from "./components/ServicesGrid";
import ProcessTimeline from "./components/ProcessTimeline";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturesGrid from "./components/FeaturesGrid";
import IndustriesSection from "./components/IndustriesSection";
import PricingApproach from "./components/PricingApproach";
import PortfolioShowcase from "./components/PortfolioShowcase";
import LocalSeoAhmedabad from "./components/LocalSeoAhmedabad";
import FaqSection from "./components/FaqSection";
import EnquirySection from "./components/EnquirySection";
import Footer from "./components/Footer";
import QuickContactFloating from "./components/QuickContactFloating";

export default function App() {
  return (
    <div className="app-root">
      {/* Primary Accessible Navigation */}
      <Header />

      {/* Semantic Main Content Landmark */}
      <main id="main-content" tabIndex="-1">
        {/* Breadcrumb Hierarchy */}
        <Breadcrumbs />

        {/* Section 1: Hero Section */}
        <HeroSection />

        {/* Section 2: Trust & Value Proposition */}
        <ValueProposition />

        {/* Section 3: About Our Web Design Services */}
        <AboutSection />

        {/* Section 4: Our Web Design Services */}
        <ServicesGrid />

        {/* Section 5: Our Development Process */}
        <ProcessTimeline />

        {/* Section 6: Why Choose Vertex Global Tech */}
        <WhyChooseUs />

        {/* Section 7: Website Features & Capabilities */}
        <FeaturesGrid />

        {/* Section 8: Industries We Serve */}
        <IndustriesSection />

        {/* Section 9: Website Design Pricing Approach */}
        <PricingApproach />

        {/* Section 10: Portfolio Showcase */}
        <PortfolioShowcase />

        {/* Section 11: Local SEO Section (Ahmedabad Localities) */}
        <LocalSeoAhmedabad />

        {/* Section 12: Frequently Asked Questions (FAQ) */}
        <FaqSection />

        {/* Section 13: Final Conversion & Lead Generation */}
        <EnquirySection />
      </main>

      {/* Section 14: Comprehensive Footer */}
      <Footer />

      {/* Floating Direct Contact Actions */}
      <QuickContactFloating />
    </div>
  );
}
