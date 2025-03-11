import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { H2, H3, Text } from "@/components/ui/typography";

import { CardWithAnimatedSphere } from "@/components/animations/card-with-animated-sphere";

const servicesData = [
  {
    title: "Strony internetowe",
    features: [
      "⚡ Superszybkie ładowanie (Next.js)",
      "🔒 Bezpieczeństwo bez wtyczek",
      "📱 Nowoczesny design i UX",
    ],
    text: "Tworzę strony internetowe, które nie tylko świetnie wyglądają, ale także są szybkie, bezpieczne i dostosowane do Twojego biznesu.",
    href: "#",
    color: "bg-radial-gradient-primary-green",
  },
  {
    title: "Sklepy internetowe",
    features: [
      "🛒 Optymalizacja pod sprzedaż",
      "🚀 Błyskawiczne ładowanie",
      "🔗 Integracja z płatnościami",
    ],
    text: "Stworzę sklep internetowy, który nie tylko wygląda profesjonalnie, ale także zapewnia płynne zakupy i wysoką konwersję.",
    href: "#",
    color: "bg-radial-gradient-primary-cyan",
  },
  {
    title: "Responsywność i UX",
    features: [
      "📱 Perfekcyjny wygląd na każdym urządzeniu",
      "🖥️ Intuicyjna nawigacja i UX",
      "🎨 Dopasowanie do Twojej marki",
    ],
    text: "Twoja strona musi być czytelna i funkcjonalna na każdym ekranie – od smartfona po duży monitor.",
    href: "#",
    color: "bg-radial-gradient-accent-yellow",
  },
  {
    title: "SEO i optymalizacja",
    features: [
      "🔍 Wyższe pozycje w Google",
      "⚡ Superszybkie ładowanie",
      "📊 Optymalizacja techniczna",
    ],
    text: "Dbam o to, aby Twoja strona była nie tylko szybka, ale także dobrze widoczna w wynikach wyszukiwania.",
    href: "#",
    color: "bg-radial-gradient-accent-green",
  },
  {
    title: "Publikacja strony",
    features: [
      "🌎 Konfiguracja domeny i hostingu",
      "🚀 Wdrożenie bez błędów",
      "🔄 Automatyczne aktualizacje",
    ],
    text: "Zajmę się pełnym wdrożeniem Twojej strony, aby działała szybko, stabilnie i była zawsze online.",
    href: "#",
    color: "bg-radial-gradient-primary-cyan",
  },
  {
    title: "Wsparcie techniczne",
    features: [
      "🛠️ Aktualizacje i rozwój strony",
      "🚨 Szybka reakcja na problemy",
      "🔒 Stałe zabezpieczenia",
    ],
    text: "Zapewniam stałą opiekę nad Twoją stroną – od aktualizacji po wsparcie techniczne.",
    href: "#",
    color: "bg-radial-gradient-primary-green",
  },
];

export function ServicesPreviewSection() {
  return (
    <section id="uslugi">
      <MaxWidthWrapper className="flex flex-col items-center gap-y-8 py-16 md:gap-y-14 md:py-20">
        <H2 className="text-start md:text-center">Co mogę Tobie zaoferować?</H2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map(({ title, href, color, features }, index) => (
            <CardWithAnimatedSphere
              key={index}
              color={color}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="flex flex-col duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <H3 className="z-10 max-w-[150px]">{title}</H3>
              <div className="z-10 mt-14 flex flex-col gap-2">
                {features.map((feature, index) => (
                  <Text key={index}>{feature}</Text>
                ))}
              </div>

              <div className="relative hidden items-center gap-4">
                <PlayCircle size={40} strokeWidth={1.5} />
                <Text size="lg">Więcej</Text>
                <Link href={href} aria-label="więcej informacji o usłudze">
                  <span className="absolute inset-0" />
                </Link>
              </div>
            </CardWithAnimatedSphere>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
