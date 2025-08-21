import { HomeIcon, NotebookIcon, PhoneIcon, StarIcon } from "lucide-react";
import { ExpandNavItem } from "../components/expand-nav-item";

export const burgerNavigation = [
  {
    id: "1",
    label: <>Home</>,
    href: "/",
    icon: HomeIcon,
    areaLabel: "Strona główna",
  },
  {
    id: "2",
    label: (
      <ExpandNavItem
        label="System rezerwacji online"
        list={[
          { label: "System rezerwacji BookApp", href: "/book-app" },
          { label: "Dla Weterynarzy", href: "/book-app/weterynarze" },
          { label: "Dla Dentystów", href: "/book-app/dentysci" },
        ]}
      />
    ),
    icon: StarIcon,
    areaLabel:
      "System rezerwacji online dla lokalnych firm usługowych - BookApp",
  },
  {
    id: "3",
    label: <>Blog</>,
    href: "/blog",
    icon: NotebookIcon,
    areaLabel: "Blog o stronach internetowych dla lokalnych firm",
  },
  {
    id: "4",
    label: <>Kontakt</>,
    href: "/kontakt",
    icon: PhoneIcon,
    areaLabel: "Zapytaj o dawmową konsultacje",
  },
];
