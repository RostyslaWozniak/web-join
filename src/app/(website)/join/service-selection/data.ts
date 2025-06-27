import {
  Globe,
  Layout,
  MessageCircle,
  Notebook,
  ShoppingBasket,
  StarIcon,
} from "lucide-react";

export const services = [
  {
    id: 1,
    label: "BookApp",
    value: "book-app",
    icon: StarIcon,
    description:
      "Nowoczesny system do zarządzania wizytami i stroną dla lokalnych firm.",
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
