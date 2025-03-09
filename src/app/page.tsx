import {
  HomeHeroSection,
  WhyInvestSection,
  ServicesPreviewSection,
  PortfolioSection,
} from "@/components/sections";
import { FaqSection } from "@/components/sections/faq-section";
import { GridCTASection } from "@/components/sections/grid-cta-section";
import { SectionSeparator } from "@/components/ui/section-separator";

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <WhyInvestSection />
      {/* SEPARATOR */}
      <SectionSeparator />
      <ServicesPreviewSection />
      {/* SEPARATOR */}
      <SectionSeparator />
      <PortfolioSection />
      {/* SEPARATOR */}
      <SectionSeparator />
      <FaqSection />
      <GridCTASection />
    </>
  );
}
