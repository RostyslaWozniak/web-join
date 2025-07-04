import {
  ChartNoAxesCombined,
  Languages,
  LayoutPanelLeft,
  MonitorCog,
  Wallet,
  ZapIcon,
} from "lucide-react";

export const features = [
  {
    id: 1,
    label: "SEO",
    value: "seo",
    icon: ChartNoAxesCombined,
    description:
      "Pomagamy Twojej stronie wybić się w Google. Dzięki SEO więcej osób trafi do Ciebie z wyszukiwarki, bez płatnych reklam.",
  },
  {
    id: 2,
    label: "Języki",
    value: "multilingual",
    icon: Languages,
    description:
      "Twoja strona może działać w wielu językach. Świetne rozwiązanie, jeśli kierujesz ofertę do klientów z różnych krajów.",
  },
  {
    id: 3,
    label: "CMS",
    value: "cms",
    icon: MonitorCog,
    description:
      "Chcesz samodzielnie edytować treści na stronie? Dzięki CMS (System zarządzania treścią) zrobisz to łatwo, bez kodowania i pomocy programisty.",
  },
  {
    id: 4,
    label: "Płatności",
    value: "paymentIntegration",
    icon: Wallet,
    description:
      "Umożliwiamy płatności online — idealne, jeśli chcesz sprzedawać produkty, usługi lub przyjmować rezerwacje przez stronę.",
  },
  {
    id: 5,
    label: "Szybkość",
    value: "fastLoading",
    icon: ZapIcon,
    description:
      "Strona wczytuje się błyskawicznie, nawet na słabszym internecie. To wpływa na komfort użytkownika i pozycję w Google.",
  },
  {
    id: 6,
    label: "Responsywność",
    value: "responsiveUx",
    icon: LayoutPanelLeft,
    description:
      "Twoja strona będzie wyglądać świetnie na telefonie, tablecie i komputerze. Intuicyjna na każdym ekranie.",
  },
] as const;
