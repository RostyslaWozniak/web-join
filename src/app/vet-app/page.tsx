import { VetAppHeroSection } from "./_components/sections/hero-section";
import { ProblemSection } from "./_components/sections/problem-section";
import { WhatIsVetAppSection } from "./_components/sections/what-is-vet-app-section";
import { UspSection } from "./_components/sections/usp-section";
import { PricingSection } from "./_components/sections/pricing-section";
import { TargetAudienceSection } from "./_components/sections/target-audience-section";
import { DemoSection } from "./_components/sections/demo-section";
// import { CtaSection } from "./_components/sections/cta-section";
import { AboutSection } from "./_components/sections/about-section";

export default function VetAppPage() {
  return (
    <div className="min-h-screen">
      <VetAppHeroSection />

      <ProblemSection />

      <WhatIsVetAppSection />

      {/* unique selling point (USP) */}
      <UspSection />

      <PricingSection />

      <TargetAudienceSection />

      <DemoSection />

      <AboutSection />

      {/* <CtaSection /> */}
    </div>
  );
}
