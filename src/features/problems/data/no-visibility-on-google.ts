import { SearchIcon } from "lucide-react";
import { type ProblemItem } from ".";

export const noVisibilityOnGoogle: ProblemItem = {
  title: "Nie jesteś widoczny w Google?",
  description:
    "Brak optymalizacji SEO sprawia, że klienci Cię nie znajdują. Popraw widoczność i zacznij generować ruch organiczny.",
  icon: SearchIcon,
  color: "bg-cyan-100 text-gray-600 border-gray-600",
  slug: "brak-widocznosci-w-google",
  image: {
    url: "https://brandimprint.in/assets/uploads/2020/02/seo-techniques.png",
    alt: "brak widoczności w Google",
  },
  cta: {
    title: "Wejdź na pierwszą stronę Google",
    description:
      "Zoptymalizuję Twoją stronę, aby przyciągała klientów z darmowego ruchu organicznego.",
    button: "Popraw moje SEO",
  },
  email: {
    service: "braku widoczności w Google",
  },
  markdown: `# Brak widoczności w Google

Możesz mieć piękną stronę – ale co z tego, skoro nikt jej nie znajdzie?

## Co wpływa na widoczność w Google?
- Czas ładowania strony
- Struktura HTML i tagi meta
- Responsywność i UX
- Treść zoptymalizowana pod frazy kluczowe

## Skutki
- Zero ruchu z wyszukiwarki
- Większe koszty reklamy
- Mniejsza wiarygodność marki

## Jak mogę pomóc?
Optymalizuję strony od podstaw: 
- porządne SEO techniczne
- szybki frontend
- treści wspierające lokalne pozycjonowanie`,
};
