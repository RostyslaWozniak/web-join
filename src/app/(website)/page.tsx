import {
  HomeHeroSection,
  PortfolioSection,
  BlogPreviewSection,
  BookAppPreviewSection,
  FaqSection,
  GridCTASection,
  DontHaveWebsiteSection,
} from "@/components/sections";
import { ProblemsPreviewSection } from "@/features/problems/components/problems-preview-section";
import { SectionWrapper } from "@/components/section-wrapper";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { SectionSeparator } from "@/components/ui/section-separator";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HomeHeroSection />
      {/* DONT HAVE A WEBSITE */}
      <SectionWrapper id="uslugi">
        <MaxWidthWrapper>
          <DontHaveWebsiteSection />
        </MaxWidthWrapper>
      </SectionWrapper>
      {/* SECTION SEPARATOR */}
      <SectionSeparator />
      {/* PROBLEMS PREVIEW SECTION */}
      <SectionWrapper>
        <MaxWidthWrapper>
          <ProblemsPreviewSection />
        </MaxWidthWrapper>
      </SectionWrapper>
      {/* SECTION SEPARATOR */}
      <SectionSeparator />
      {/* BOOK APP PREVIEW */}
      <SectionWrapper>
        <MaxWidthWrapper size="sm">
          <BookAppPreviewSection />
        </MaxWidthWrapper>
      </SectionWrapper>
      {/* SECTION SEPARATOR */}
      <SectionSeparator />
      {/* PORTFOLIO */}
      <SectionWrapper className="overflow-hidden" id="portfolio">
        <MaxWidthWrapper size="lg">
          <PortfolioSection />
        </MaxWidthWrapper>
      </SectionWrapper>
      {/* SECTION SEPARATOR */}
      <SectionSeparator />
      {/* FAQ */}
      <SectionWrapper id="faq">
        <MaxWidthWrapper size="sm">
          <FaqSection />
        </MaxWidthWrapper>
      </SectionWrapper>
      {/* CTA */}
      <SectionWrapper paddingBlock="none">
        <GridCTASection />
      </SectionWrapper>
      {/* BLOG PREVIEW */}
      <SectionWrapper>
        <MaxWidthWrapper>
          <BlogPreviewSection />
        </MaxWidthWrapper>
      </SectionWrapper>
    </>
  );
}
