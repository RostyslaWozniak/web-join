import { Card, CardContent } from "@/components/ui/card";
import { H2 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import {
  BarChart3Icon,
  CalendarIcon,
  ClockIcon,
  CloudIcon,
  DatabaseIcon,
  GlobeIcon,
  LockIcon,
  RocketIcon,
} from "lucide-react";

export function UspSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <H2 className="mb-6">💡 Dlaczego warto wybrać BookApp?</H2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sectionData.map((data) => (
              <CardItem key={data.id} {...data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const sectionData = [
  {
    id: 1,
    title: "Łatwe Zarządzanie Harmonogramem",
    text: "Zyskaj pełną kontrolę nad grafikiem każdego lekarza i optymalizuj czas pracy.",
    icon: CalendarIcon,
    style: "bg-emerald-50text-emerald-600 border-emerald-200",
  },
  {
    id: 2,
    title: "Precyzyjne Slotowanie Wizyt",
    text: "Planuj wizyty dokładnie, aby efektywnie wykorzystać każdą godzinę i zmniejszyć czas oczekiwania klientów.",
    icon: ClockIcon,
    style: "border-blue-200 bg-blue-50 text-blue-600",
  },

  {
    id: 3,
    title: "Intuicyjna Baza Klientów i Rezerwacji",
    text: "Szybki dostęp do danych kontaktowych klientów i ich historii wszystkich wizyt umówionych przez system. Usprawnij komunikację i buduj długotrwałe relacje.",
    icon: DatabaseIcon,
    style: "border-purple-200 bg-purple-50 text-purple-600",
  },

  {
    id: 4,
    title: "Proste i Bezpieczne Logowanie",
    text: "Klienci logują się bez problemu przez Google, Apple lub e-mail, co zapewnia wygodę i bezpieczeństwo dostępu do ich profili.",
    icon: LockIcon,
    style: "border-green-200 bg-green-50 text-green-600",
  },

  {
    id: 5,
    title: "Nowoczesna Strona Internetowa z SEO",
    text: "Twoja firma będzie łatwo znajdowana przez nowych klientów w Google. Zwiększ swoją widoczność online i wyróżnij się na tle konkurencji.",
    icon: GlobeIcon,
    style: "border-orange-200 bg-orange-50 text-orange-600",
  },

  {
    id: 6,

    title: "Dostępność z Dowolnego Miejsca",
    text: "Pracuj bez instalacji, prosto z przeglądarki – na komputerze, tablecie czy telefonie. Pełna mobilność dla Ciebie i Twojego zespołu.",
    icon: CloudIcon,
    style: "border-teal-200 bg-teal-50 text-teal-600",
  },

  {
    id: 7,
    title: "Szczegółowe Statystyki i Analizy",
    text: "Monitoruj liczbę umówionych wizyt, ich efektywność oraz obłożenie grafików. Podejmuj świadome decyzje, które napędzą rozwój Twojej firmy.",
    icon: BarChart3Icon,
    style: "border-indigo-200 bg-indigo-50 text-indigo-600",
  },

  {
    id: 8,
    title: "Skalowalność i Przyszłościowość",
    text: " BookApp jest elastyczny i gotowy na rozwój razem z Twoją firmą. Z łatwością dodawaj nowe funkcje i usługi w przyszłości.",
    icon: RocketIcon,
    style: "border-red-200 bg-red-50 text-red-600",
  },
];
function CardItem({
  title,
  text,
  icon: Icon,
  style,
}: Omit<(typeof sectionData)[number], "id">) {
  return (
    <Card
      className={cn(
        style,
        "h-full border-gray-300 bg-white/80 shadow-xl backdrop-blur-sm",
      )}
    >
      <CardContent className="p-6">
        <Icon className="mb-4 h-8 w-8" />
        <h3 className="mb-2 font-semibold text-gray-600">{title}</h3>
        <p className="text-sm text-gray-600">{text}</p>
      </CardContent>
    </Card>
  );
}
