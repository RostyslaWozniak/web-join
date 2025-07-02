import {
  HomeHeroSection,
  // WhyInvestSection,
  ServicesPreviewSection,
  PortfolioSection,
} from "@/components/sections";
import BlogPreviewSection from "@/components/sections/blog-preview-section";
import { BookAppPreviewSection } from "@/components/sections/book-app-preview-section";
import { FaqSection } from "@/components/sections/faq-section";
import { GridCTASection } from "@/components/sections/grid-cta-section";

import { SectionSeparator } from "@/components/ui/section-separator";

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      {/* SEPARATOR */}
      {/* <SectionSeparator /> */}
      <ServicesPreviewSection />
      {/* SEPARATOR */}
      <BookAppPreviewSection />
      {/* SEPARATOR */}
      <SectionSeparator />
      <PortfolioSection />
      {/* SEPARATOR */}
      <SectionSeparator />
      <FaqSection />
      <GridCTASection />
      <BlogPreviewSection />
    </>
  );
}
