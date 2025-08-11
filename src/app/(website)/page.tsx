import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { MotionWrapper } from "@/components/motion-wrapper";
import { HomeHeroSection, PortfolioSection } from "@/components/sections";
import BlogPreviewSection from "@/components/sections/blog-preview-section";
import { BookAppPreviewSection } from "@/components/sections/book-app-preview-section";
import { FaqSection } from "@/components/sections/faq-section";
import { GridCTASection } from "@/components/sections/grid-cta-section";
import { Card, CardContent } from "@/components/ui/card";

import { SectionSeparator } from "@/components/ui/section-separator";
import { H2, H3, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { problemsData } from "@/data/problems";
import {
  ArrowUpRightIcon,
  Clock10Icon,
  PhoneIcon,
  SparklesIcon,
} from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { AccessibleLink } from "@/components/accesible-link";
import { SectionWrapper } from "@/components/section-wrapper";

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <SectionWrapper>
        <DontHaveWebsiteSection />
      </SectionWrapper>
      {/* SEPARATOR */}
      <SectionSeparator />
      <SectionWrapper>
        <IsYourWebsiteBad />
      </SectionWrapper>
      {/* SEPARATOR */}
      <SectionSeparator />
      <SectionWrapper>
        <BookAppPreviewSection />
      </SectionWrapper>
      {/* SEPARATOR */}
      <SectionSeparator />
      <SectionWrapper className="overflow-hidden">
        <PortfolioSection />
      </SectionWrapper>
      {/* SEPARATOR */}
      <SectionSeparator />
      <FaqSection />
      <GridCTASection />
      <BlogPreviewSection />
    </>
  );
}

function IsYourWebsiteBad() {
  return (
    <MaxWidthWrapper className="space-y-10 md:space-y-16">
      <div className="text-center">
        <H2 className="mb-3">
          Masz już stronę?
          <br /> A może tracisz przez nią klientów?
        </H2>
        <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
          Sprawdź, czy Twoja obecna strona nie sabotuje Twojego biznesu
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {problemsData
          .slice(0, 3)
          .map(({ title, description, color, icon: Icon, slug }, index) => (
            <MotionWrapper
              key={index}
              transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Card
                key={index}
                className={cn(
                  color,
                  "group relative h-full overflow-hidden border-0 bg-white/80 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-lg",
                )}
              >
                <CardContent className="p-6 pb-8">
                  <div className="flex justify-between">
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${color} `}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowUpRightIcon className="duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 md:opacity-0 md:group-hover:opacity-100" />
                  </div>

                  <H3 className="text-start group-hover:underline">{title}</H3>

                  <p className="flex-grow text-sm leading-relaxed text-gray-600">
                    {description}
                  </p>
                </CardContent>
                <AccessibleLink
                  href={`/problemy/${slug}`}
                  className="absolute inset-0 min-w-full"
                  aria-label={`Przejdż do strony ${title}`}
                />
              </Card>
            </MotionWrapper>
          ))}
      </div>
      <div className="mx-auto max-w-4xl">
        <AccessibleLink
          href="/problems"
          aria-label="Zobacz więcej problemów z którymi stykają się firmy usługowe"
        >
          <GradientButton outline>
            Zobacz więcej
            <ArrowUpRightIcon className="ml-1 h-4 w-4 text-accent-emerald" />
          </GradientButton>
        </AccessibleLink>
      </div>
    </MaxWidthWrapper>
  );
}

function DontHaveWebsiteSection() {
  return (
    <MaxWidthWrapper>
      <div className="mx-auto max-w-7xl text-center">
        <div className="relative mx-auto mb-12 max-w-4xl">
          <H2>
            Nie masz jeszcze strony?
            <br /> Pomogę Ci zacząć od zera
          </H2>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
            Tworzenie strony internetowej nie musi być trudne. W prostych
            krokach przeprowadzę Cię przez cały proces – bez technicznych
            komplikacji i zbędnych kosztów.
          </p>
        </div>
        <div className="space-y-4">
          <Text size="subtitle" className="!text-start">
            Jak to wygląda?
          </Text>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: "1",
                icon: PhoneIcon,
                title: "Krótka rozmowa",
                text: "W 30 minut opowiesz mi o swoim biznesie – dowiem się, co robisz i czego potrzebujesz.",
                style: "border-accent-cyan text-accent-cyan bg-cyan-100",
              },
              {
                id: "2",
                icon: SparklesIcon,
                title: "Dopasowana propozycja",
                text: "Otrzymasz konkretny projekt strony internetowej dopasowanej do Twoich potrzeb.",
                style: "border-accent-green text-accent-green bg-green-100",
              },
              {
                id: "3",
                icon: Clock10Icon,
                title: "Szybka realizacja",
                text: "Gotową stronę możesz mieć nawet w 14 dni – od projektu po wdrożenie.",
                style:
                  "border-accent-emerald text-accent-emerald bg-emerald-100",
              },
            ].map(({ id, title, text, style }, index) => (
              <MotionWrapper
                key={id}
                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                <Card
                  className={cn(
                    style,
                    "h-full border-0 bg-white/80 shadow-xl backdrop-blur-sm",
                  )}
                >
                  <CardContent className="space-y-2 p-4 md:p-6">
                    <div
                      className={cn(
                        style,
                        "mb-4 flex h-12 w-12 items-center justify-center rounded-lg text-lg font-bold text-foreground md:text-xl",
                      )}
                    >
                      {id}
                    </div>
                    <H3 className="text-start">{title}</H3>
                    <p className="text-start text-foreground">{text}</p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <AccessibleLink
            href="/kontakt"
            aria-label="Przejdź do strony kontakt"
          >
            <GradientButton outline>
              Umów bezpłatną konsultację
              <ArrowUpRightIcon className="ml-1 h-4 w-4 text-accent-emerald" />
            </GradientButton>
          </AccessibleLink>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
