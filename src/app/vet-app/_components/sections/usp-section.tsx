import { Card, CardContent } from "@/components/ui/card";
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
            <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
              💡 Dlaczego warto wybrać VetApp?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-emerald-200 bg-emerald-50">
              <CardContent className="p-6">
                <CalendarIcon className="mb-4 h-8 w-8 text-emerald-600" />
                <h3 className="mb-2 font-semibold">
                  Łatwe Zarządzanie Harmonogramem
                </h3>
                <p className="text-sm text-gray-600">
                  Zyskaj pełną kontrolę nad grafikiem każdego lekarza i
                  optymalizuj czas pracy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <ClockIcon className="mb-4 h-8 w-8 text-blue-600" />
                <h3 className="mb-2 font-semibold">
                  Precyzyjne Slotowanie Wizyt
                </h3>
                <p className="text-sm text-gray-600">
                  Planuj wizyty dokładnie co 15 minut, aby efektywnie
                  wykorzystać każdą godzinę i zmniejszyć czas oczekiwania
                  pacjentów.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardContent className="p-6">
                <DatabaseIcon className="mb-4 h-8 w-8 text-purple-600" />
                <h3 className="mb-2 font-semibold">
                  Intuicyjna Baza Klientów i Rezerwacji
                </h3>
                <p className="text-sm text-gray-600">
                  Szybki dostęp do danych kontaktowych klientów i ich zwierząt
                  oraz historii wszystkich wizyt umówionych przez system.
                  Usprawnij komunikację i buduj długotrwałe relacje.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <LockIcon className="mb-4 h-8 w-8 text-green-600" />
                <h3 className="mb-2 font-semibold">
                  Proste i Bezpieczne Logowanie
                </h3>
                <p className="text-sm text-gray-600">
                  Klienci logują się bez problemu przez Google, Apple lub
                  e-mail, co zapewnia wygodę i bezpieczeństwo dostępu do ich
                  profili.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <GlobeIcon className="mb-4 h-8 w-8 text-orange-600" />
                <h3 className="mb-2 font-semibold">
                  Nowoczesna Strona Internetowa z SEO
                </h3>
                <p className="text-sm text-gray-600">
                  Twoja przychodnia będzie łatwo znajdowana przez nowych
                  klientów w Google. Zwiększ swoją widoczność online i wyróżnij
                  się na tle konkurencji.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <RocketIcon className="mb-4 h-8 w-8 text-red-600" />
                <h3 className="mb-2 font-semibold">
                  Skalowalność i Przyszłościowość
                </h3>
                <p className="text-sm text-gray-600">
                  VetApp jest elastyczny i gotowy na rozwój razem z Twoją
                  przychodnią. Z łatwością dodawaj nowe funkcje i usługi w
                  przyszłości.
                </p>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 bg-indigo-50">
              <CardContent className="p-6">
                <BarChart3Icon className="mb-4 h-8 w-8 text-indigo-600" />
                <h3 className="mb-2 font-semibold">
                  Szczegółowe Statystyki i Analizy
                </h3>
                <p className="text-sm text-gray-600">
                  Monitoruj liczbę umówionych wizyt, ich efektywność oraz
                  obłożenie grafików. Podejmuj świadome decyzje, które napędzą
                  rozwój Twojej przychodni.
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200 bg-teal-50">
              <CardContent className="p-6">
                <CloudIcon className="mb-4 h-8 w-8 text-teal-600" />
                <h3 className="mb-2 font-semibold">
                  Dostępność z Dowolnego Miejsca
                </h3>
                <p className="text-sm text-gray-600">
                  Pracuj bez instalacji, prosto z przeglądarki – na komputerze,
                  tablecie czy telefonie. Pełna mobilność dla Ciebie i Twojego
                  zespołu.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
