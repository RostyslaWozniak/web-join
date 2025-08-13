import { BlocksIcon } from "lucide-react";
import { type ProblemItem } from ".";

export const wordpressAndPlugins: ProblemItem = {
  title: "Masz dość WordPressa i płatnych wtyczek",
  description:
    "Zbyt wiele wtyczek spowalnia WordPress, powoduje błędy i luki. Postaw na bezpieczną, szybką stronę bez zbędnych dodatków.",
  icon: BlocksIcon,
  color: "bg-cyan-100 text-gray-600 border-gray-600",
  slug: "wordpress-i-wtyczki",
  image: {
    url: "https://brandimprint.in/assets/uploads/2020/02/seo-techniques.png",
    alt: "problemy z WordPress",
  },
  cta: {
    title: "Pozbądź się problemów z wtyczkami raz na zawsze",
    description:
      "Otrzymaj stronę bezpieczną, szybką i niezależną od przestarzałych dodatków.",
    button: "Stwórz nową stronę",
  },
  email: {
    service: "problemów z WordPressem i wtyczkami",
  },
  markdown: `# Masz dość WordPressa i płatnych wtyczek

WordPress jest popularny, ale niekoniecznie najlepszy. Zwłaszcza dla biznesów, które chcą **spokoju i niezawodności**.

## Problemy z WordPressem:
- Regularne aktualizacje i konflikty wtyczek
- Ryzyko włamań i luk bezpieczeństwa
- Płatne dodatki, które nie zawsze działają

## Lepiej zbudować coś lekkiego i własnego:
Bez wtyczek, bez aktualizacji, bez stresu. 
Moje strony są zbudowane bez zbędnych zależności – wszystko, co działa, masz w kodzie. `,
};
