import {
  BriefcaseBusinessIcon,
  FileQuestionIcon,
  Settings2Icon,
  StarIcon,
} from "lucide-react";

export const homePageNav = [
  { label: "Usługi", href: "/#uslugi", icon: Settings2Icon },
  { label: "Portfolio", href: "/#portfolio", icon: BriefcaseBusinessIcon },
  { label: "FAQ", href: "/#faq", icon: FileQuestionIcon },
  { label: "Book App", href: "/book-app", icon: StarIcon },
];

export type HomePageNavType = typeof homePageNav;
