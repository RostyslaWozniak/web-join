import { WrenchIcon } from "lucide-react";
import { type ProblemItem } from ".";

export const builderLimitations: ProblemItem = {
  title: "Nie możesz wdrożyć indywidualnych rozwiązań?",
  description:
    "Kreatory stron jak Wix czy Squarespace ograniczają funkcje, SEO i wydajność. Przejdź na elastyczne, szybkie rozwiązanie bez limitów.",
  icon: WrenchIcon,
  color: "bg-cyan-100 text-gray-600 border-gray-600",
  slug: "ograniczenia-buildera",
  image: {
    url: "https://www.gosite.com/hubfs/2024%20Blogs/20%20Problems%20Youll%20Have%20If%20You%20Try%20to%20Build%20Your%20Own%20Website/best%20websites%20blog%20image.jpg",
    alt: "ograniczenia kreatora stron",
  },
  cta: {
    title: "Przestań walczyć z ograniczeniami buildera",
    description:
      "Zyskaj pełną swobodę tworzenia i stronę bez kompromisów, zoptymalizowaną pod SEO i wydajność.",
    button: "Przenieś moją stronę",
  },
  email: {
    service: "ograniczeń kreatora stron internetowych",
  },
  markdown: `# Builder ogranicza Twoją stronę

Strona zbudowana na kreatorze (Wix, WebWave, WordPress builder) może wyglądać dobrze, ale szybko trafisz na ścianę.

## Dlaczego to problem?
- Nie możesz wdrożyć niestandardowych funkcji
- Masz ograniczoną kontrolę nad SEO, szybkością, UX
- Wydajesz pieniądze na dodatki, które nie rozwiązują problemu

## Przykłady ograniczeń:
- Brak integracji z zewnętrznymi systemami
- Brak możliwości rozbudowy w przyszłości
- Ciężki kod, który spowalnia stronę

## Rozwiązanie:
Przejdź na **dedykowany projekt** w Next.js – pełna kontrola, szybkie działanie i lepsze pozycje w Google.`,
};
