import {
  ArrowRightIcon,
  CodeIcon,
  GlobeIcon,
  PaletteIcon,
  SearchIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
} from "lucide-react";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { H2, H3 } from "@/components/ui/typography";

import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { MotionWrapper } from "../motion-wrapper";
import { Button } from "../ui/button";

const servicesData = [
  {
    title: "Tworzenie oprogramowania",
    icon: CodeIcon,
    text: "Projektuję i wdrażam nowoczesne rozwiązania webowe, które napędzają Twój biznes – szybkie, bezpieczne, bez zbędnych wtyczek. Pracuję na technologiach takich jak Next.js, React czy PostgreSQL. Obsługuję klientów z Warszawy i całej Polski.",
    href: "#",
    color: "bg-cyan-100 text-cyan-600 border-cyan-600",
  },

  {
    title: "Projektowanie stron internetowych",
    icon: GlobeIcon,
    text: "Specjalizuję się w tworzeniu superszybkich, responsywnych stron internetowych, które działają doskonale na każdym urządzeniu. Obsługuję lokalne firmy z Warszawy, pomagając im zaistnieć w sieci bez kompromisów.",
    href: "#",
    color: "bg-emerald-100 text-emerald-600 border-emerald-600",
  },
  {
    title: "Optymalizacja SEO",
    icon: SearchIcon,
    text: "Zwiększ swoją widoczność lokalnie! Optymalizuję strony pod kątem wyszukiwarek, przyspieszam ładowanie i dbam o techniczne SEO. Dzięki temu Twoja firma z Warszawy pojawia się tam, gdzie szukają jej klienci – w Google.",
    href: "#",
    color: "bg-teal-100 text-teal-600 border-teal-600",
  },

  {
    title: "Sklepy internetowe i e-commerce",
    icon: ShoppingCartIcon,
    text: "Projektuję i wdrażam sklepy online, które sprzedają. Szybkie ładowanie, integracje z płatnościami, optymalizacja pod SEO i konwersję. Twój sklep będzie gotowy na klientów z Warszawy, Polski i całego świata.",
    href: "#",
    color: "bg-purple-100 text-purple-600 border-purple-600",
  },
  {
    title: "Projektowanie graficzne i UX/UI",
    icon: PaletteIcon,
    text: "Tworzę nowoczesne, estetyczne i funkcjonalne projekty graficzne, które budują markę i przyciągają uwagę. UI/UX dopasowane do Twoich klientów, z myślą o konwersji. Profesjonalny design od podstaw, zaprojektowany w Figma.",
    href: "#",
    color: "bg-lime-100 text-lime-600 border-lime-600",
  },
  {
    title: "Konsultacje marketingowe",
    icon: TrendingUpIcon,
    text: "Pomagam firmom z Warszawy wdrażać skuteczne strategie marketingowe w internecie. Doradzam, jak zwiększyć widoczność w Google, poprawić UX strony i zbudować spójną obecność online, która przynosi wyniki.",
    href: "#",
    color: "bg-orange-100 text-orange-600 border-orange-600",
  },
];

export function ServicesPreviewSection() {
  return (
    <section className="pt-16" id="uslugi">
      <MaxWidthWrapper>
        {/* Header */}
        {/* <div className="mb-16 text-center">
          <H2 className="mb-3">Co mogę Tobie zaoferować?</H2>

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
            Jako nowoczesna firma programistyczna z Warszawy, tworzę rozwiązania
            dopasowane do lokalnych potrzeb biznesowych. Oferuję pełen zakres
            usług cyfrowych – od projektu po wdrożenie i rozwój Twojej marki
            online.
          </p>
        </div> */}
        <div className="mb-16 text-center">
          <H2 className="mb-3">
            Nowoczesne rozwiązania webowe dla lokalnych firm
          </H2>

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
            Jestem twórcą stron internetowych z Warszawy. Projektuję i wdrażam
            rozwiązania dopasowane do Twoich potrzeb – od strony wizytówki,
            przez sklep online, aż po rezerwacje online.
          </p>
        </div>

        {/* Business Types */}
        <div className="mb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.slice(0, 3).map((business, index) => {
              const IconComponent = business.icon;
              return (
                <MotionWrapper
                  key={index}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  <Card
                    key={index}
                    className={cn(
                      business.color,
                      "relative h-full overflow-hidden bg-white/50 shadow-md transition-all duration-300 hover:shadow-lg",
                    )}
                  >
                    <CardContent className="p-6 pb-8">
                      <div
                        className={`h-12 w-12 rounded-lg ${business.color} mb-4 flex items-center justify-center`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>

                      <H3 className="mb-3 !text-2xl font-semibold leading-tight text-foreground">
                        {business.title}
                      </H3>

                      <p className="flex-grow text-sm leading-relaxed text-gray-600">
                        {business.text}
                      </p>
                      <Button
                        className={cn(
                          "absolute bottom-2 right-2 mt-4 hidden text-sm italic",
                          business.color,
                          "bg-transparent",
                        )}
                        variant="link"
                      >
                        Zobacz wiecej <ArrowRightIcon className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </MotionWrapper>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
