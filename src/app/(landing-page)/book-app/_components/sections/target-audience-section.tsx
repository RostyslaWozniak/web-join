import { CardItem } from "@/components/card-item";
import { H2, H3, H4 } from "@/components/ui/typography";
import {
  BriefcaseIcon,
  CarIcon,
  DumbbellIcon,
  HeartIcon,
  PawPrintIcon,
  ScissorsIcon,
  StethoscopeIcon,
  UsersIcon,
} from "lucide-react";

export function TargetAudienceSection() {
  return (
    <>
      <div className="mb-6 text-center md:mb-12">
        <H2 className="mb-6">👨‍⚕️ Czy to rozwiązanie dla Twojej firmy?</H2>

        <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
          BookApp to idealne rozwiązanie dla wszystkich firm usługowych, które
          chcą zoptymalizować zarządzanie wizytami, zwiększyć swoją widoczność
          online i pozyskiwać więcej klientów. Niezależnie od branży, jeśli
          Twoja firma opiera się na rezerwacjach i spotkaniach, BookApp jest dla
          Ciebie!
        </p>
      </div>

      {/* Business Types */}
      <div>
        <H3 className="mb-4 md:mb-8">BookApp to idealny wybór dla:</H3>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businessTypes
            .slice(0, 6)
            .map(({ id, title, description, icon, color, href }) => (
              <CardItem
                key={id}
                title={title}
                description={description}
                href={href ?? undefined}
                icon={icon}
                iconClassName={color}
                heading={H4}
              />
            ))}
        </div>
      </div>
    </>
  );
}

const businessTypes = [
  {
    id: "1",
    title: "Salonów Fryzjerskich i Kosmetycznych",
    description:
      "Uwolnij recepcję od ciągłych telefonów, pozwól klientom umawiać wizyty online 24/7 i zaoferuj im wygodne przypomnienia o zabiegach.",
    icon: ScissorsIcon,
    color: "bg-pink-100 text-pink-600 border-pink-600",
    href: null,
  },
  {
    id: "2",
    title: "Przychodni Medycznych i Dentystycznych",
    description:
      "Zarządzaj harmonogramem lekarzy i specjalistów, oferując pacjentom szybkie i intuicyjne rezerwacje wizyt, bez konieczności dzwonienia.",
    icon: StethoscopeIcon,
    color: "bg-blue-100 text-blue-600 border-blue-600",
    href: null,
  },
  {
    id: "3",
    title: "Gabinetów Weterynaryjnych",
    description:
      "Usprawnij umawianie wizyt dla właścicieli zwierząt, wysyłaj automatyczne przypomnienia o szczepieniach czy kontrolach, a także buduj bazę stałych klientów.",
    icon: PawPrintIcon,
    color: "bg-green-100 text-green-600 border-green-600",
    href: "/book-app/weterynarze",
  },
  {
    id: "4",
    title: "Gabinetów Masażu i Fizjoterapii",
    description:
      "Zapewnij klientom łatwy dostęp do kalendarza terapeutów, uprość proces rezerwacji i pozwól im na samodzielne zarządzanie swoimi terminami.",
    icon: HeartIcon,
    color: "bg-purple-100 text-purple-600 border-purple-600",
    href: null,
  },
  {
    id: "5",
    title: "Trenerów Personalnych i Siłowni",
    description:
      "Zautomatyzuj zapisy na treningi indywidualne i grupowe, zarządzaj dostępnością trenerów i oferuj elastyczne opcje rezerwacji.",
    icon: DumbbellIcon,
    color: "bg-orange-100 text-orange-600 border-orange-600",
    href: null,
  },
  {
    id: "6",
    title: "Serwisów Samochodowych i Myjni",
    description:
      "Pozwól klientom na rezerwację terminów przeglądów, napraw czy mycia samochodu online, oszczędzając czas pracowników i klientów.",
    icon: CarIcon,
    color: "bg-gray-100 text-gray-600   border-gray-600",
    href: null,
  },
  {
    id: "7",
    title: "Doradców i Konsultantów",
    description:
      "Udostępnij swój kalendarz online, umożliwiając klientom wygodne umawianie spotkań i konsultacji w dogodnym dla obu stron terminie.",
    icon: BriefcaseIcon,
    color: "bg-indigo-100 text-indigo-600 border-indigo-600",
    href: null,
  },
  {
    id: "8",
    title: "Każdej Innej Firmy Usługowej...",
    description:
      "...gdzie umawianie wizyt jest kluczowe dla sprawnego funkcjonowania i rozwoju biznesu!",
    icon: UsersIcon,
    color: "bg-teal-100 text-teal-600 border-teal-600",
    href: null,
  },
];
