import { SearchIcon, SnailIcon, WrenchIcon } from "lucide-react";

export const problemsData = [
  {
    id: 1,
    title: "Twoja strona ładuje się za wolno?",
    content: "Klienci rezygnują, zanim zdążysz ich przekonać.",
    icon: SnailIcon,
    color: "bg-cyan-100 text-gray-600 border-gray-600",
    slug: "wolna-strona",
    image: {
      url: "https://arc-tech.co.za/wp-content/uploads/2020/08/ARC-Technology-Slow-Website-Speed_blog-feature_resized.png",
      alt: "image",
    },
    markdown: `# Strona ładuje się wolno

Wolna strona to stracony klient. Badania pokazują, że nawet **1 sekunda opóźnienia** może zmniejszyć konwersję o **ponad 20%**. 

## Dlaczego to problem?
- Klienci rezygnują, zanim strona się załaduje
- Google obniża pozycję wolnych stron w wynikach wyszukiwania
- Spowalnia Twoje działania reklamowe (np. Facebook Ads)

## Co jest przyczyną?
- Przestarzałe systemy (np. źle zoptymalizowany WordPress)
- Przeładowanie grafik i skryptów
- Hosting niskiej jakości

## Co możesz z tym zrobić?
Zamiast walczyć z technologią, zainwestuj w **szybki, zoptymalizowany frontend** – np. zbudowany w Next.js z SSR/SSG. Strony, które buduję, ładują się w **poniżej 1 sekundy**.`,
  },
  {
    id: 2,
    title: "Nie możesz wdrożyć indywidualnych rozwiązań?",
    content:
      "Potrzebujesz indywidualnych rozwiązań, a szablon ogranicza rozwój.",
    icon: WrenchIcon,
    color: "bg-cyan-100 text-gray-600 border-gray-600",
    slug: "ograniczenia-buildera",
    image: {
      url: "https://www.gosite.com/hubfs/2024%20Blogs/20%20Problems%20Youll%20Have%20If%20You%20Try%20to%20Build%20Your%20Own%20Website/best%20websites%20blog%20image.jpg",
      alt: "image",
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
Zamiast męczyć się z narzędziami, które są "dla każdego", stwórz stronę **szytą na miarę**. Napiszę ją dla Ciebie od zera – pod Twój biznes.`,
  },

  {
    id: 3,
    title: "Nie widać Cię w Google",
    content: "Bez optymalizacji SEO Twoja strona nie ma szans na ruch.",
    icon: SearchIcon,
    color: "bg-cyan-100 text-gray-600 border-gray-600",
    slug: "brak-widocznosci-w-google",
    image: {
      url: "https://brandimprint.in/assets/uploads/2020/02/seo-techniques.png",
      alt: "image",
    },
    markdown: `# Nie widać Cię w Google

Możesz mieć piękną stronę – ale co z tego, skoro nikt jej nie znajdzie?

## Co wpływa na widoczność w Google?
- Czas ładowania strony
- Struktura HTML i tagi meta
- Responsywność i UX
- Treść zoptymalizowana pod frazy kluczowe

## Jak mogę pomóc?
Optymalizuję strony od podstaw: 
- porządne SEO techniczne
- szybki frontend
- treści wspierające lokalne pozycjonowanie`,
  },
];
