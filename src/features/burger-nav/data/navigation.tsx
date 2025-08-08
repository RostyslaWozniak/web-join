import { HomeIcon, NotebookIcon, PhoneIcon, StarIcon } from "lucide-react";

export const burgerNavigation = [
  {
    label: "Home",
    href: "/",
    icon: HomeIcon,
    areaLabel: "Strona główna",
  },
  {
    label: "BookApp",
    href: "/book-app",
    icon: StarIcon,
    areaLabel:
      "System rezerwacji online dla lokalnych firm usługowych - BookApp",
  },
  {
    label: "Blog",
    href: "/blog",
    icon: NotebookIcon,
    areaLabel: "Blog o stronach internetowych dla lokalnych firm",
  },
  {
    label: "Kontakt",
    href: "/kontakt",
    icon: PhoneIcon,
    areaLabel: "Zapytaj o dawmową konsultacje",
  },
];
