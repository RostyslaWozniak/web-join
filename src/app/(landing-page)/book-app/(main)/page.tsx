import { BookAppHeroSection } from "../_components/sections/hero-section";
import { ProblemSection } from "../_components/sections/problem-section";
import { WhatIsBookAppSection } from "../_components/sections/what-is-book-app-section";
import { UspSection } from "../_components/sections/usp-section";
import { PricingSection } from "../_components/sections/pricing-section";
import { TargetAudienceSection } from "../_components/sections/target-audience-section";
import { DemoSection } from "../_components/sections/demo-section";
import { AboutSection } from "../_components/sections/about-section";
import { BlogPreviewSection } from "@/components/sections";
import { SectionWrapper } from "@/components/section-wrapper";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { CtaForm } from "@/features/forms/cta-form";
import { SectionHeader } from "@/components/section-header";

export default function BookAppPage() {
  return (
    <div className="min-h-screen">
      <BookAppHeroSection />
      <SectionWrapper>
        <MaxWidthWrapper>
          <ProblemSection />
        </MaxWidthWrapper>
      </SectionWrapper>
      <SectionWrapper id="dla-kogo" className="bg-white">
        <MaxWidthWrapper>
          <TargetAudienceSection />
        </MaxWidthWrapper>
      </SectionWrapper>
      <SectionWrapper id="o-bookapp">
        <MaxWidthWrapper size="md">
          <WhatIsBookAppSection />
        </MaxWidthWrapper>
      </SectionWrapper>
      {/* unique selling point (USP) */}
      <SectionWrapper id="dlaczego-warto" className="bg-white">
        <MaxWidthWrapper>
          <UspSection />
        </MaxWidthWrapper>
      </SectionWrapper>
      <SectionWrapper className="bg-card-gradient">
        <MaxWidthWrapper>
          <DemoSection />
        </MaxWidthWrapper>
      </SectionWrapper>
      <SectionWrapper id="ceny" className="bg-white">
        <MaxWidthWrapper>
          <PricingSection />
        </MaxWidthWrapper>
      </SectionWrapper>
      <SectionWrapper id="form" className="relative">
        <MaxWidthWrapper size="md" className="relative z-10">
          <SectionHeader
            title="Zacznij już dziś!"
            subtitle="Umów się na bezpłatną prezentację i poznaj możliwości systemu BookApp"
            className="mx-auto max-w-2xl"
          />
          <div>
            <CtaForm typeOfProject="rezerwacji wizyt online BookApp" />
          </div>
        </MaxWidthWrapper>
        <div className="absolute inset-0 bg-card-gradient opacity-50"></div>
      </SectionWrapper>
      <SectionWrapper>
        <MaxWidthWrapper size="sm">
          <AboutSection />
        </MaxWidthWrapper>
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <MaxWidthWrapper>
          <BlogPreviewSection />
        </MaxWidthWrapper>
      </SectionWrapper>
    </div>
  );
}
