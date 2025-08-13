import { slowWbsite } from "./slow-website";
import { builderLimitations } from "./builder-limitations";
import { noVisibilityOnGoogle } from "./no-visibility-on-google";
import { wordpressAndPlugins } from "./wordpress-and-plugins";
import { noConversion } from "./no-conversion";
import { lackOfResponsiveness } from "./lack-of-responsiveness";
import { noOnlineReservations } from "./no-online-reservations";
import { type LucideIcon } from "lucide-react";

export type ProblemItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  slug: string;
  image: {
    url: string;
    alt: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  email: {
    service: string;
  };
  markdown: string;
};

export const problemsData: ProblemItem[] = [
  slowWbsite,
  noVisibilityOnGoogle,
  wordpressAndPlugins,
  builderLimitations,
  lackOfResponsiveness,
  noConversion,
  noOnlineReservations,
];
