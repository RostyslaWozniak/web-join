import {
  GemIcon,
  TargetIcon,
  MessageCircleQuestionIcon,
  BicepsFlexedIcon,
} from "lucide-react";

export const bookAppNav = [
  {
    label: "Dla kogo?",
    href: "/book-app#dla-kogo",
    icon: TargetIcon,
  },
  {
    label: "O BookApp",
    href: "/book-app#o-bookapp",
    icon: BicepsFlexedIcon,
  },
  {
    label: "Dlaczego warto",
    href: "/book-app#dlaczego-warto",
    icon: MessageCircleQuestionIcon,
  },
  {
    label: "Cena",
    href: "/book-app#ceny",
    icon: GemIcon,
  },
];

export type BookAppNavType = (typeof bookAppNav)[number];
