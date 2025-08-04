import { BookAppHeroSection } from "../_components/sections/hero-section";
import { ProblemSection } from "../_components/sections/problem-section";
import { WhatIsBookAppSection } from "../_components/sections/what-is-book-app-section";
import { UspSection } from "../_components/sections/usp-section";
import { PricingSection } from "../_components/sections/pricing-section";
import { TargetAudienceSection } from "../_components/sections/target-audience-section";
import { DemoSection } from "../_components/sections/demo-section";
import { AboutSection } from "../_components/sections/about-section";
import BlogPreviewSection from "@/components/sections/blog-preview-section";

export default function BookAppPage() {
  return (
    <div className="min-h-screen">
      <BookAppHeroSection />
      <ProblemSection />
      <div id="dla-kogo">
        <TargetAudienceSection />
      </div>
      <div id="o-bookapp">
        <WhatIsBookAppSection />
      </div>
      {/* unique selling point (USP) */}
      <div id="dlaczego-warto">
        <UspSection />
      </div>

      <DemoSection />
      <div id="ceny">
        <PricingSection />
      </div>
      <AboutSection />
      <BlogPreviewSection />
    </div>
  );
}
