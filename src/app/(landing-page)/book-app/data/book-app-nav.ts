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
    label: "Pakiety",
    href: "/book-app#pakiety",
    icon: GemIcon,
  },
];

export type BookAppNavType = (typeof bookAppNav)[number];
