import {
  Code,
  Globe,
  Layout,
  MessageCircle,
  Notebook,
  ShoppingBasket,
} from "lucide-react";

export const services = [
  { id: 1, label: "Strona internetowa", value: "website", icon: Globe },
  {
    id: 2,
    label: "Sklep internetowy",
    value: "e-commerce",
    icon: ShoppingBasket,
  },
  { id: 3, label: "Landing page", value: "landing", icon: Layout },
  { id: 4, label: "Blog", value: "blog", icon: Notebook },
  {
    id: 5,
    label: "Darmowa konsultacja",
    value: "consultation",
    icon: MessageCircle,
  },
  { id: 6, label: "Inny projekt", value: "other", icon: Code },
] as const;
