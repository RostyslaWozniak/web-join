import {
  Globe,
  Layout,
  MessageCircle,
  Notebook,
  PawPrintIcon,
  ShoppingBasket,
} from "lucide-react";

export const services = [
  {
    id: 1,
    label: "VetApp",
    value: "vet-app",
    icon: PawPrintIcon,
    description:
      "Nowoczesny system do zarządzania wizytami i stroną dla weterynarzy.",
  },
  {
    id: 2,
    label: "Strona internetowa",
    value: "website",
    icon: Globe,
    description:
      "Profesjonalna, rozbudowana strona internetowa z podstronami i SEO.",
  },
  {
    id: 3,
    label: "Sklep internetowy",
    value: "e-commerce",
    icon: ShoppingBasket,
    description:
      "Pełnoprawny sklep online z koszykiem, płatnościami i zarządzaniem produktami.",
  },
  {
    id: 4,
    label: "Landing page",
    value: "landing",
    icon: Layout,
    description:
      "Strona sprzedażowa typu one-page — idealna do kampanii reklamowej.",
  },
  {
    id: 5,
    label: "Blog",
    value: "blog",
    icon: Notebook,
    description:
      "Funkcjonalny blog do dzielenia się wiedzą, z opcją edycji treści.",
  },
  {
    id: 6,
    label: "Darmowa konsultacja",
    value: "consultation",
    icon: MessageCircle,
    description:
      "Bezpłatna rozmowa, w której omówimy Twoje potrzeby i dobierzemy rozwiązanie.",
  },
] as const;
// export const services = [
//   {
//     id: 1,
//     label: "System VetApp",
//     value: "vet-app",
//     icon: PawPrintIcon,
//   },
//   { id: 2, label: "Strona internetowa", value: "website", icon: Globe },
//   {
//     id: 3,
//     label: "Sklep internetowy",
//     value: "e-commerce",
//     icon: ShoppingBasket,
//   },
//   { id: 4, label: "Landing page", value: "landing", icon: Layout },
//   { id: 5, label: "Blog", value: "blog", icon: Notebook },
//   {
//     id: 6,
//     label: "Darmowa konsultacja",
//     value: "consultation",
//     icon: MessageCircle,
//   },
// ] as const;
