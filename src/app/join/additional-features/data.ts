import {
  ChartNoAxesCombined,
  Languages,
  TvMinimalPlay,
  Wallet,
  // Bot,
  // LayoutPanelLeft,
} from "lucide-react";

export const features = [
  { id: 1, label: "SEO", value: "seo", icon: ChartNoAxesCombined },
  {
    id: 2,
    label: "Obsługa wielu jezykow",
    value: "multilingual",
    icon: Languages,
  },
  { id: 3, label: "Zarządzanie treścią", value: "cms", icon: TvMinimalPlay },
  {
    id: 4,
    label: "Płatności online",
    value: "paymentIntegration",
    icon: Wallet,
  },
  // {
  //   id: 5,
  //   label: "AI Chatbot",
  //   value: "aiChat",
  //   icon: Bot,
  // },
  // {
  //   id: 6,
  //   label: "Responsywność i UX",
  //   value: "responsiveUx",
  //   icon: LayoutPanelLeft,
  // },
] as const;
