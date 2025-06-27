import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { H2, H3 } from "@/components/ui/typography";
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
    <section className="bg-white px-4 py-16" id="dla-kogo">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="mb-16 text-center">
          <H2 className="mb-6">👨‍⚕️ Czy to rozwiązanie dla Twojej firmy?</H2>

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
            BookApp to idealne rozwiązanie dla wszystkich firm usługowych, które
            chcą zoptymalizować zarządzanie wizytami, zwiększyć swoją widoczność
            online i pozyskiwać więcej klientów. Niezależnie od branży, jeśli
            Twoja firma opiera się na rezerwacjach i spotkaniach, BookApp jest
            dla Ciebie!
          </p>
        </div>

        {/* Business Types */}
        <div className="mb-16">
          <H3 className="mb-8 !text-center">BookApp to idealny wybór dla:</H3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {businessTypes.map((business, index) => {
              const IconComponent = business.icon;
              return (
                <Card
                  key={index}
                  className="border-0 bg-white shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div
                      className={`h-12 w-12 rounded-lg ${business.color} mb-4 flex items-center justify-center`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>

                    <h4 className="mb-3 font-semibold leading-tight text-foreground">
                      {business.title}
                    </h4>

                    <p className="text-xs leading-relaxed text-gray-600">
                      {business.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

const businessTypes = [
  {
    title: "Salonów Fryzjerskich i Kosmetycznych",
    description:
      "Uwolnij recepcję od ciągłych telefonów, pozwól klientom umawiać wizyty online 24/7 i zaoferuj im wygodne przypomnienia o zabiegach.",
    icon: ScissorsIcon,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Przychodni Medycznych i Dentystycznych",
    description:
      "Zarządzaj harmonogramem lekarzy i specjalistów, oferując pacjentom szybkie i intuicyjne rezerwacje wizyt, bez konieczności dzwonienia.",
    icon: StethoscopeIcon,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Gabinetów Weterynaryjnych",
    description:
      "Usprawnij umawianie wizyt dla właścicieli zwierząt, wysyłaj automatyczne przypomnienia o szczepieniach czy kontrolach, a także buduj bazę stałych klientów.",
    icon: PawPrintIcon,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Gabinetów Masażu i Fizjoterapii",
    description:
      "Zapewnij klientom łatwy dostęp do kalendarza terapeutów, uprość proces rezerwacji i pozwól im na samodzielne zarządzanie swoimi terminami.",
    icon: HeartIcon,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Trenerów Personalnych i Siłowni",
    description:
      "Zautomatyzuj zapisy na treningi indywidualne i grupowe, zarządzaj dostępnością trenerów i oferuj elastyczne opcje rezerwacji.",
    icon: DumbbellIcon,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Serwisów Samochodowych i Myjni",
    description:
      "Pozwól klientom na rezerwację terminów przeglądów, napraw czy mycia samochodu online, oszczędzając czas pracowników i klientów.",
    icon: CarIcon,
    color: "bg-gray-100 text-gray-600",
  },
  {
    title: "Doradców i Konsultantów",
    description:
      "Udostępnij swój kalendarz online, umożliwiając klientom wygodne umawianie spotkań i konsultacji w dogodnym dla obu stron terminie.",
    icon: BriefcaseIcon,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Każdej Innej Firmy Usługowej...",
    description:
      "...gdzie umawianie wizyt jest kluczowe dla sprawnego funkcjonowania i rozwoju biznesu!",
    icon: UsersIcon,
    color: "bg-teal-100 text-teal-600",
  },
];
