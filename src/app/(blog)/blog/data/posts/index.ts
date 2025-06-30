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
    id: 1,
    slug: "dlaczego-biznes-potrzebuje-strony-internetowej",
    title: "Strona Internetowa dla Biznesu w Warszawie: Konieczność?",
    description:
      "W dzisiejszym świecie online, czy Twoja firma naprawdę istnieje, jeśli nie ma własnej strony internetowej? Dowiedz się, dlaczego obecność online 24/7 to klucz do sukcesu każdego lokalnego biznesu.",
    image:
      "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vYXiLTPrQZ98h0LwPKCzueVbyGtp5Rqvd3lkD",
    metadata: {
      title: "Strona Internetowa Warszawa: Biznes Online 24/7",
      description:
        "Strona internetowa dla lokalnego biznesu w Warszawie. Zwiększ widoczność online, pozyskaj klientów 24/7. Agencja SEO, strony WWW.",
    },
    tag: tags.seo,
    createdAt: new Date("2025-06-22"),
    time: 10,
    author: authors.me,
    markdown: post1,
  },
  {
    id: 2,
    slug: "strona-na-facebooku-to-za-malo",
    title: "Facebook to Za Mało? Strona WWW dla Firmy Warszawa",
    description:
      "Czy obecność wyłącznie na Facebooku czy Instagramie wystarcza, aby Twoja firma w Warszawie w pełni rozwinęła swój potencjał? Zobacz, dlaczego własna strona internetowa to fundament stabilności i kontroli Twojej marki.",
    image:
      "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5v68xBVGkpfa7xwXU5bDsZdNIk8ci3jSByePJr",
    metadata: {
      title:
        "Facebook/Instagram to za mało? Dlaczego firma potrzebuje własnej strony WWW",
      description:
        "Ograniczenia social mediów dla biznesu. Własna strona internetowa Warszawa: kontrola, SEO, profesjonalizm. Agencja WWW.",
    },
    tag: tags["strony-internetowe"],
    createdAt: new Date("2025-06-25"),
    time: 12,
    author: authors.me,
    markdown: post2,
  },
  {
    id: 3,
    slug: "google-moja-firma-przewodnik",
    title:
      "Google Moja Firma: Twój Darmowy Asystent Sprzedaży w Google Maps – Jak Go Używać?",
    description:
      "Odkryj potęgę Google Moja Firma dla lokalnego biznesu w Warszawie. Darmowa wizytówka w Google Maps, która przyciąga klientów 24/7. Praktyczne wskazówki optymalizacji.",
    image:
      "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vU8cCH1vwyKEDPzcdYMOiL8j1u2WbqsVwBN07",
    metadata: {
      title: "Google Moja Firma Warszawa: Optymalizacja i Wizytówka Google",
      description:
        "Google Moja Firma dla lokalnego biznesu w Warszawie. Darmowa wizytówka Google Maps. Pozyskiwanie klientów 24/7. Agencja SEO.",
    },
    tag: tags.google,
    createdAt: new Date("2025-06-25"),
    time: 8,
    author: authors.me,
    markdown: post3,
  },
  {
    id: 4,
    slug: "nextjs-vs-gotowe-platformy-ecommerce",
    title:
      'Koniec z kompromisami: Dlaczego Twój biznes potrzebuje Next.js, a nie kolejnego sklepu "z pudełka"?',
    description:
      "Czy gotowe platformy e-commerce ograniczają rozwój Twojego biznesu? Dowiedz się, dlaczego Next.js to potężne narzędzie, które pozwala budować ultra-szybkie i w pełni spersonalizowane sklepy internetowe dla wymagających firm.",
    image:
      "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vKDwuKIReMY6VDm8WNosJjy91SA7OxLhIH5Qz",
    metadata: {
      title: "Next.js E-commerce: Sklepy Internetowe Bez Kompromisów",
      description:
        "Next.js vs Shopify/WooCommerce. Tworzenie sklepów internetowych dla firm. Szybki, spersonalizowany e-commerce. Agencja Next.js.",
    },

    tag: tags["e-commerce"],
    createdAt: new Date("2025-06-26"),
    time: 8,
    author: authors.me,
    markdown: post4,
  },
];
