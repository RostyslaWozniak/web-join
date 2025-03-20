import {
  ChartNoAxesCombined,
  Languages,
  LayoutPanelLeft,
  MonitorCog,
  Wallet,
  ZapIcon,
} from "lucide-react";

export const features = [
  { id: 1, label: "SEO", value: "seo", icon: ChartNoAxesCombined },
  {
    id: 2,
    label: "Wersje językowe",
    value: "multilingual",
    icon: Languages,
  },
  {
    id: 3,
    label: "System zarządzania treścią (CMS)",
    value: "cms",
    icon: MonitorCog,
  },
  {
    id: 4,
    label: "Płatności online",
    value: "paymentIntegration",
    icon: Wallet,
  },
  {
    id: 5,
    label: "Szybkość i optymalizacja ładowania",
    value: "fastLoading",
    icon: ZapIcon,
  },
  {
    id: 6,
    label: "Pełna responsywność i optymalne UX",
    value: "responsiveUx",
    icon: LayoutPanelLeft,
  },
] as const;
