// ![](https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/visiting-cards/Standard%20Visiting%20Cards/IN_Standard-Visiting-Cards_Overview)

import { authors } from "../authors";
import { tags } from "../tags";
import { post1 } from "./post-1";
import { post2 } from "./post-2";
import { post3 } from "./post-3";
import { post4 } from "./post-4";

export type Post = (typeof posts)[number];

export const posts = [
  {
    slug: "dlaczego-biznes-potrzebuje-strony-internetowej",
    title: "Strona Internetowa dla Biznesu w Warszawie: Konieczność?",
    description:
      "W dzisiejszym świecie online, czy Twoja firma naprawdę istnieje, jeśli nie ma własnej strony internetowej? Dowiedz się, dlaczego obecność online 24/7 to klucz do sukcesu każdego lokalnego biznesu.",
    image: "/images/blog/post-1.jpg",
    metadata: {
      title: "Strona Internetowa: Czy Twój Biznes Istnieje Online?",
      description:
        "Czy Twoja firma jest widoczna w Internecie? Dowiedz się, dlaczego strona internetowa to absolutna konieczność dla każdego biznesu",
    },
    tag: tags.seo,
    createdAt: new Date("2025-06-22"),
    time: 10,
    author: authors.me,
    markdown: post1,
  },
  {
    slug: "strona-na-facebooku-to-za-malo",
    title:
      "Strona na Facebooku to Za Mało? Ograniczenia Social Mediów dla Firm",
    description:
      "Czy obecność wyłącznie na Facebooku czy Instagramie wystarcza, aby Twoja firma w Warszawie w pełni rozwinęła swój potencjał? Zobacz, dlaczego własna strona internetowa to fundament stabilności i kontroli Twojej marki.",
    image: "/images/blog/post-2.jpg",
    metadata: {
      title:
        "Facebook/Instagram to za mało? Dlaczego firma potrzebuje własnej strony WWW",
      description:
        "Dowiedz się, dlaczego poleganie tylko na social mediach ogranicza Twój biznes w Warszawie. Własna strona internetowa daje kontrolę, profesjonalizm i skuteczne SEO.",
    },
    tag: tags["strony-internetowe"],
    createdAt: new Date("2025-06-25"),
    time: 12,
    author: authors.me,
    markdown: post2,
  },
  {
    slug: "google-moja-firma-przewodnik",
    title:
      "Google Moja Firma: Twój Darmowy Asystent Sprzedaży w Google Maps – Jak Go Używać?",
    description:
      "Odkryj potęgę Google Moja Firma dla lokalnego biznesu w Warszawie. Darmowa wizytówka w Google Maps, która przyciąga klientów 24/7. Praktyczne wskazówki optymalizacji.",
    image: "/images/blog/post-3.jpg",
    metadata: {
      title:
        "Google Moja Firma: Przewodnik Optymalizacji dla Lokalnego Biznesu",
      description:
        "Odkryj potęgę darmowej wizytówki Google Moja Firma i dowiedz się, jak przyciągać lokalnych klientów w Warszawie 24/7. Praktyczne wskazówki optymalizacji Twojej firmy w Google Maps.",
    },
    tag: tags.google,
    createdAt: new Date("2025-06-25"),
    time: 8,
    author: authors.me,
    markdown: post3,
  },
  {
    slug: "nextjs-vs-gotowe-platformy-ecommerce",
    title:
      'Koniec z kompromisami: Dlaczego Twój biznes potrzebuje Next.js, a nie kolejnego sklepu "z pudełka"?',
    description:
      "Czy gotowe platformy e-commerce ograniczają rozwój Twojego biznesu? Dowiedz się, dlaczego Next.js to potężne narzędzie, które pozwala budować ultra-szybkie i w pełni spersonalizowane sklepy internetowe dla wymagających firm.",
    image: "/images/blog/post-4.jpg",
    metadata: {
      title:
        "Next.js vs Shopify/WooCommerce: Sklep internetowy bez kompromisów",
      description:
        "Poznaj ograniczenia Shopify, WooCommerce i PrestaShop. Dowiedz się, dlaczego Next.js to przyszłość e-commerce dla firm potrzebujących topowej wydajności, pełnej personalizacji i kontroli nad sklepem internetowym. Custom development dla wymagających.",
    },

    tag: tags["e-commerce"],
    createdAt: new Date("2025-06-26"),
    time: 8,
    author: authors.me,
    markdown: post4,
  },
];
