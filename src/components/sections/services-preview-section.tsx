"use client";

import { PlayCircle } from "lucide-react";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { H2, H3, Text } from "../ui/typography";

import Link from "next/link";
import { CardWithAnimatedSphere } from "../animations/card-with-animated-sphere";

const servicesData = [
  {
    title: "Strony internetowe",
    text: "Tworzę estetyczne i funkcjonalne strony dostosowane do potrzeb Twojego biznesu.",
    href: "#",
    color: "bg-radial-gradient-primary-green",
  },
  {
    title: "Sklepy internetowe",
    text: "Stworzę sklep internetowy, który pomoże Ci sprzedawać produkty łatwo i efektywnie.",
    href: "#",
    color: "bg-radial-gradient-primary-cyan",
  },
  {
    title: "Responsywność i UX",
    text: "Twoja strona musi wyglądać świetnie zarówno na komputerze, jak i na telefonie.",
    href: "#",
    color: "bg-radial-gradient-accent-yellow",
  },
  {
    title: "SEO i optymalizacja",
    text: "Zadbam, by Twoja strona była widoczna w wyszukiwarkach i ładowała się błyskawicznie.",
    href: "#",
    color: "bg-radial-gradient-accent-green",
  },
  {
    title: "Publikacja strony",
    text: "Zajmę się publikacją Twojej strony, aby działała szybko i bezbłędnie.",
    href: "#",
    color: "bg-radial-gradient-primary-cyan",
  },
  {
    title: "Wsparcie techniczne",
    text: "Zajmuję się aktualizacjami i dbam, by Twoja strona zawsze działała sprawnie.",
    href: "#",
    color: "bg-radial-gradient-primary-green",
  },
];

export function ServicesPreviewSection() {
  return (
    <section>
      <MaxWidthWrapper className="flex flex-col items-center gap-y-8 py-16 md:gap-y-14 md:py-20">
        <H2 className="text-start md:text-center">Co mogę Tobie zaoferować?</H2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map(({ title, text, href, color }, index) => (
            <CardWithAnimatedSphere
              key={index}
              color={color}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="flex flex-col"
            >
              <H3 className="max-w-[150px]">{title}</H3>
              <Text className="flex-grow pt-20">{text}</Text>
              <div className="relative flex items-center gap-4">
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
