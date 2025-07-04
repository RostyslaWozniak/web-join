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
      "System do umawiania wizyt i zarządzania stroną — idealny dla salonów, gabinetów i usług lokalnych.",
  },
  {
    id: 2,
    label: "Strona",
    value: "website",
    icon: Globe,
    description:
      "Profesjonalna strona internetowa z wieloma podstronami, SEO i nowoczesnym wyglądem.",
  },
  {
    id: 3,
    label: "Sklep",
    value: "e-commerce",
    icon: ShoppingBasket,
    description:
      "Sklep online z koszykiem, płatnościami i panelem do zarządzania produktami — gotowy do sprzedaży.",
  },
  {
    id: 4,
    label: "Landing page",
    value: "landing",
    icon: Layout,
    description:
      "Jednostronicowa strona sprzedażowa — idealna do kampanii, promocji i szybkiej prezentacji oferty.",
  },
  {
    id: 5,
    label: "Blog",
    value: "blog",
    icon: Notebook,
    description:
      "Blog z panelem do edycji treści — świetny do dzielenia się wiedzą, nowościami i pozycjonowania SEO.",
  },
  {
    id: 6,
    label: "Konsultacja",
    value: "consultation",
    icon: MessageCircle,
    description:
      "Bezpłatna rozmowa, w której doradzimy Ci najlepsze rozwiązanie dopasowane do Twoich potrzeb.",
  },
] as const;
