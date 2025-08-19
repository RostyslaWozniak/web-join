import { GridBackground } from "@/components/grid-background";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { H1, Text } from "@/components/ui/typography";
import { LockIcon, SearchIcon, SparklesIcon, ZapIcon } from "lucide-react";
import { GradientButton } from "../ui/gradient-button";
import { AccessibleLink } from "../accesible-link";
import { SectionWrapper } from "../section-wrapper";

export function HomeHeroSection() {
  return (
    <SectionWrapper paddingBlock="none" id="start" className="overflow-hidden">
      <GridBackground className="flex items-center justify-center">
        <MaxWidthWrapper className="relative flex min-h-[60vh] flex-col items-center justify-center py-8 sm:gap-y-4 md:py-16 lg:min-h-[70vh]">
          <div className="relative z-10 flex max-w-6xl flex-grow flex-col items-center justify-center sm:flex-none">
            <H1 className="mb-3 flex text-start text-foreground sm:text-center sm:text-6xl lg:text-8xl">
              <div>
                Strona internetowa, która napędzi{" "}
                <span className="bg-primary-gradient bg-clip-text pr-1 text-transparent">
                  Twój biznes
                </span>
              </div>
            </H1>

            <Text
              variant="muted"
              size="subtitle"
              className="mb-3 max-w-4xl sm:text-center"
            >
              Rozwijasz firmę – ja zadbam o technologię. Tworzę szybkie,
              bezpieczne i skuteczne strony, które napędzają sprzedaż{" "}
              <br className="hidden md:block" /> i oszczędzają Twój czas.
            </Text>
          </div>
          <div className="relative z-10 flex w-full flex-col-reverse gap-y-3 sm:flex-col">
            <AccessibleLink
              href="/kontakt"
              aria-label="Przejdź do strony kontakt"
            >
              <GradientButton showIcon>Wyślij zapytanie</GradientButton>
            </AccessibleLink>
            <div className="flex flex-col items-start justify-center gap-x-14 gap-y-4 sm:flex-row sm:flex-wrap sm:items-center sm:pt-12">
              <div className="flex items-center gap-x-2 text-base tracking-widest">
                <ZapIcon className="stroke-accent-lime" /> Szybkie ładowanie
              </div>
              <div className="flex items-center gap-x-2 text-base tracking-widest">
                <LockIcon className="stroke-accent-green" />
                Bezpieczeństwo
              </div>
              <div className="flex items-center gap-x-2 text-base tracking-widest">
                <SparklesIcon className="stroke-accent-cyan" /> Nowoczesny UX
              </div>
              <div className="flex items-center gap-x-2 text-base tracking-widest">
                <SearchIcon className="stroke-accent-green" /> SEO
              </div>
            </div>
          </div>
          <div className="absolute -inset-10 rounded-full bg-background opacity-40 md:block" />
        </MaxWidthWrapper>
      </GridBackground>
    </SectionWrapper>
  );
}
