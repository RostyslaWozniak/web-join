// ![](https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/visiting-cards/Standard%20Visiting%20Cards/IN_Standard-Visiting-Cards_Overview)

import { authors } from "../authors";
import { tags } from "../tags";
import { post1 } from "./post-1";
import { post2 } from "./post-2";
import { post3 } from "./post-3";

export type Post = (typeof posts)[number];

export const posts = [
  {
    slug: "dlaczego-biznes-potrzebuje-strony-internetowej",
    title:
      "Czy Twoja Firma Istnieje w Internetowym Świecie? Dlaczego Każdy Biznes w Warszawie Potrzebuje Strony Internetowej!",
    image: "/images/blog/post-1.jpg",
    description:
      "Dowiedz się, dlaczego strona internetowa to dziś konieczność dla każdego biznesu w Warszawie. Profesjonalna wizytówka online 24/7, która buduje zaufanie i przyciąga klientów",
    tag: tags.seo,
    createdAt: new Date("2025-06-22"),
    time: 10,
    author: authors.rostyslavVozniak,
    markdown: post1,
  },
  {
    slug: "strona-na-facebooku-to-za-malo",
    title:
      "Nie Zostań w Cieniu Konkurencji: Dlaczego Sama Strona na Facebooku/Instagramie to Za Mało dla Twojej Firmy?",
    image: "/images/blog/post-2.jpg",
    description:
      "Dowiedz się, dlaczego poleganie tylko na social mediach ogranicza Twój biznes w Warszawie. Własna strona internetowa daje kontrolę, profesjonalizm i skuteczne SEO.",
    tag: tags["strony-internetowe"],
    createdAt: new Date("2025-06-25"),
    time: 12,
    author: authors.rostyslavVozniak,
    markdown: post2,
  },
  {
    slug: "google-moja-firma-przewodnik",
    title:
      "Google Moja Firma: Twój Darmowy Asystent Sprzedaży w Google Maps – Jak Go Używać?",
    image: "/images/blog/post-3.jpg",
    description:
      "Odkryj potęgę Google Moja Firma dla lokalnego biznesu w Warszawie. Darmowa wizytówka w Google Maps, która przyciąga klientów 24/7. Praktyczne wskazówki optymalizacji.",
    tag: tags.google,
    createdAt: new Date("2025-06-28"),
    time: 8,
    author: authors.rostyslavVozniak,
    markdown: post3,
  },
];
