import {
  HomeHeroSection,
  WhyInvestSection,
  ServicesPreviewSection,
  PortfolioSection,
} from "@/components/sections";
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
    </>
  );
}
