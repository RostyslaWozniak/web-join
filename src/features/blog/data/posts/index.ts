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
    metadata: {
      title: "Strona Internetowa Warszawa: Biznes Online 24/7",
      description:
        "Strona internetowa dla lokalnego biznesu w Polsce. Zwiększ widoczność online, pozyskaj klientów 24/7. Agencja SEO, strony WWW.",
    },
    slug: "dlaczego-biznes-potrzebuje-strony-internetowej",
    title: "Strona Internetowa dla Biznesu: Konieczność?",
    description:
      "W dzisiejszym świecie online, czy Twoja firma naprawdę istnieje, jeśli nie ma własnej strony internetowej? Dowiedz się, dlaczego obecność online 24/7 to klucz do sukcesu każdego lokalnego biznesu.",
    image:
      "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vYXiLTPrQZ98h0LwPKCzueVbyGtp5Rqvd3lkD",
    markdown: post1,
    author: authors.me,
    createdAt: new Date("2025-08-01"),
    published: true,
    tag: tags.seo,
    cta: {
      title: "Gotowy na Profesjonalną Obecność w Internecie?",
      subtitle:
        "Wyślij zapytanie i zobacz, jak możemy stworzyć Twoją profesjonalną wizytówkę online, która będzie pracować na Twój sukces 24h na dobę!",
    },
  },
  {
    id: 2,
    metadata: {
      title:
        "Facebook to za mało? Dlaczego Twoja firma potrzebuje własnej strony WWW",
      description:
        "Ograniczenia social mediów dla biznesu. Własna strona internetowa: kontrola, SEO, profesjonalizm.",
    },
    slug: "strona-na-facebooku-to-za-malo",
    title:
      "Facebook to za mało? Dlaczego Twoja firma potrzebuje własnej strony WWW",
    description:
      "Czy obecność wyłącznie na Facebooku czy Instagramie wystarcza, aby Twoja firma w pełni rozwinęła swój potencjał? Zobacz, dlaczego własna strona internetowa to fundament stabilności i kontroli Twojej marki.",
    image:
      "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5v68xBVGkpfa7xwXU5bDsZdNIk8ci3jSByePJr",

    markdown: post2,
    author: authors.me,
    createdAt: new Date("2025-08-08"),
    published: true,
    tag: tags["strony-internetowe"],
    cta: {
      title: "Gotowy na Profesjonalną Obecność w Internecie?",
      subtitle:
        "Wyślij zapytanie i zobacz, jak możemy stworzyć Twoją profesjonalną wizytówkę online, która będzie pracować na Twój sukces 24h na dobę!",
    },
  },
  {
    id: 3,
    metadata: {
      title: "Google Moja Firma Warszawa: Optymalizacja i Wizytówka Google",
      description:
        "Google Moja Firma dla lokalnego biznesu w Warszawie. Darmowa wizytówka Google Maps. Pozyskiwanie klientów 24/7. Agencja SEO.",
    },
    slug: "google-moja-firma-przewodnik",
    title:
      "Google Moja Firma: Twój Darmowy Asystent Sprzedaży w Google Maps – Jak Go Używać?",
    description:
      "Odkryj potęgę Google Moja Firma dla lokalnego biznesu w Warszawie. Darmowa wizytówka w Google Maps, która przyciąga klientów 24/7. Praktyczne wskazówki optymalizacji.",
    image:
      "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vU8cCH1vwyKEDPzcdYMOiL8j1u2WbqsVwBN07",
    markdown: post3,
    author: authors.me,
    published: true,
    createdAt: new Date("2025-08-15"),
    tag: tags.google,
    cta: {
      title: "Gotowy na Profesjonalną Obecność w Internecie?",
      subtitle:
        "Wyślij zapytanie i zobacz, jak możemy stworzyć Twoją profesjonalną wizytówkę online, która będzie pracować na Twój sukces 24 godziny na dobę!",
    },
  },
  {
    id: 4,
    metadata: {
      title: "Next.js E-commerce: Sklepy Internetowe Bez Kompromisów",
      description:
        "Next.js vs Shopify/WooCommerce. Tworzenie sklepów internetowych dla firm. Szybki, spersonalizowany e-commerce. Agencja Next.js.",
    },
    slug: "nextjs-vs-gotowe-platformy-ecommerce",
    title:
      'Koniec z kompromisami: Dlaczego Twój biznes potrzebuje Next.js, a nie kolejnego sklepu "z pudełka"?',
    description:
      "Czy gotowe platformy e-commerce ograniczają rozwój Twojego biznesu? Dowiedz się, dlaczego Next.js to potężne narzędzie, które pozwala budować ultra-szybkie i w pełni spersonalizowane sklepy internetowe dla wymagających firm.",
    image:
      "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vKDwuKIReMY6VDm8WNosJjy91SA7OxLhIH5Qz",
    markdown: post4,
    author: authors.me,
    createdAt: new Date("2025-06-26"),
    published: false,
    tag: tags["e-commerce"],
    cta: {
      title: "Gotowy na Profesjonalną Obecność w Internecie?",
      subtitle:
        "Wyślij zapytanie i zobacz, jak możemy stworzyć Twoją profesjonalną wizytówkę online, która będzie pracować na Twój sukces 24 godziny na dobę!",
    },
  },
];
