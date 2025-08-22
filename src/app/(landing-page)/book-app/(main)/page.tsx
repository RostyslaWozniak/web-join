import { BookAppHeroSection } from "../_components/sections/hero-section";
import { ProblemSection } from "../_components/sections/problem-section";
import { WhatIsBookAppSection } from "../_components/sections/what-is-book-app-section";
import { UspSection } from "../_components/sections/usp-section";
import { PricingSection } from "../../../../components/sections/pricing-section";
import { TargetAudienceSection } from "../_components/sections/target-audience-section";
import { AboutSection } from "../_components/sections/about-section";
import { BlogPreviewSection } from "@/components/sections";
import { SectionWrapper } from "@/components/section-wrapper";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { CtaForm } from "@/features/forms/cta-form";
import { SectionHeader } from "@/components/section-header";

export default function BookAppPage() {
  return (
    <>
      <BookAppHeroSection />

      <SectionWrapper id="dla-kogo">
        <MaxWidthWrapper>
          <TargetAudienceSection />
        </MaxWidthWrapper>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <MaxWidthWrapper>
          <ProblemSection />
        </MaxWidthWrapper>
      </SectionWrapper>

      <SectionWrapper id="o-bookapp">
        <MaxWidthWrapper size="md">
          <WhatIsBookAppSection />
        </MaxWidthWrapper>
      </SectionWrapper>

      <SectionWrapper id="dlaczego-warto" className="bg-white">
        <MaxWidthWrapper>
          <UspSection />
        </MaxWidthWrapper>
      </SectionWrapper>

      <SectionWrapper id="form" className="relative">
        <MaxWidthWrapper size="sm" className="relative z-10">
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

      <SectionWrapper id="ceny" className="bg-white">
        <MaxWidthWrapper>
          <PricingSection
            title="Dla małych i średnich firm – elastyczne opcje"
            pricing={pricing}
          />
        </MaxWidthWrapper>
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
    </>
  );
}

const pricing = [
  {
    id: 1,
    name: "basic",
    price: 3900,
    pricePerMonth: 249,
    benefits: [
      "Profesjonalna strona główna z nowoczesnym designem",
      "System rezerwacji wizyt dla jednego specjalisty",
      "Intuicyjny terminarz dostępny online 24/7",
      "Automatyczne potwierdzenia wizyt (e-mail)",
      "Podstawowa optymalizacja SEO (widoczność w Google)",
      "Możliwość dalszej rozbudowy w przyszłości",
    ],
    styles: "bg-emerald-100 text-emerald-800",
  },
  {
    id: 2,
    name: "standard",
    price: 5900,
    pricePerMonth: 349,
    benefits: [
      "Wszystko z Basic",
      "Rozbudowana strona z podstronami (o nas, usługi, kontakt, blog, każda usługa osobno — lepsze SEO)",
      "Możliwość zarządzania grafikami dla 2–4 specjalistów",
      "Panel zarządzania dla właściciela lub kierownika firmy",
      "Osobne widoki kalendarza dla każdego specjalisty",
      "Statystyki — ile wizyt dziennie, tygodniowo, miesięcznie",
      "Regularne wsparcie i aktualizacje",
      "Przygotowanie do dalszej rozbudowy (np. płatności online, CMS itd.)",
    ],
    styles: "bg-blue-100 text-blue-800",
    isMostPopular: true,
  },
  {
    id: 3,
    name: "premium",
    price: 9900,
    pricePerMonth: 499,
    benefits: [
      "Wszystko z pakietu Standard",
      "Obsługa dowolnej liczby specjalistów",
      "Możliwość dodania płatności online i planów subskrypcyjnych",
      "Strona w wielu językach (jeśli potrzebna)",
      "Stała współpraca w ramach rozwoju i strategii online",
      "Priorytetowe wsparcie — szybka reakcja na potrzeby i zmiany",
      "Regularne konsultacje i analizy rozwoju strony",
    ],
    styles: "bg-purple-100 text-purple-800",
  },
];
