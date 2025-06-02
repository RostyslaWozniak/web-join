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
      "Zoptymalizowana widoczność w Google — więcej klientów trafia na Twoją stronę.",
  },
  {
    id: 2,
    label: "Wersje językowe",
    value: "multilingual",
    icon: Languages,
    description:
      "Strona dostępna w wielu językach — docieraj do szerszego grona odbiorców.",
  },
  {
    id: 3,
    label: "System zarządzania treścią (CMS)",
    value: "cms",
    icon: MonitorCog,
    description:
      "Łatwe samodzielne zarządzanie treściami na stronie, bez potrzeby kodowania.",
  },
  {
    id: 4,
    label: "Płatności online",
    value: "paymentIntegration",
    icon: Wallet,
    description:
      "Integracja z systemami płatności — idealna do rezerwacji lub sklepów.",
  },
  {
    id: 5,
    label: "Szybkość i optymalizacja ładowania",
    value: "fastLoading",
    icon: ZapIcon,
    description:
      "Ekstremalnie szybkie ładowanie strony — lepsze UX i wyższe pozycje w Google.",
  },
  {
    id: 6,
    label: "Pełna responsywność i optymalne UX",
    value: "responsiveUx",
    icon: LayoutPanelLeft,
    description:
      "Doskonałe działanie na telefonach, tabletach i komputerach — zawsze wygodnie.",
  },
] as const;
