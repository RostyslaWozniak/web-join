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
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
              💡 Dlaczego warto wybrać VetApp?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-emerald-200 bg-emerald-50">
              <CardContent className="p-6">
                <CalendarIcon className="mb-4 h-8 w-8 text-emerald-600" />
                <h3 className="mb-2 font-semibold">Zarządzanie kalendarzem</h3>
                <p className="text-sm text-gray-600">
                  Pełna kontrola nad grafikiem każdego lekarza
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <ClockIcon className="mb-4 h-8 w-8 text-blue-600" />
                <h3 className="mb-2 font-semibold">
                  Automatyczne sloty czasowe
                </h3>
                <p className="text-sm text-gray-600">
                  Precyzyjne wizyty co 15 minut
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardContent className="p-6">
                <DatabaseIcon className="mb-4 h-8 w-8 text-purple-600" />
                <h3 className="mb-2 font-semibold">Baza zwierząt i klientów</h3>
                <p className="text-sm text-gray-600">
                  Historia wizyt, zdjęcia, dane kontaktowe
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <GlobeIcon className="mb-4 h-8 w-8 text-orange-600" />
                <h3 className="mb-2 font-semibold">Strona internetowa z SEO</h3>
                <p className="text-sm text-gray-600">
                  Nowi klienci znajdą Cię w Google
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <LockIcon className="mb-4 h-8 w-8 text-green-600" />
                <h3 className="mb-2 font-semibold">Bezpieczne logowanie</h3>
                <p className="text-sm text-gray-600">
                  Przez Google, Apple lub e-mail
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <RocketIcon className="mb-4 h-8 w-8 text-red-600" />
                <h3 className="mb-2 font-semibold">Rozwijaj się z czasem</h3>
                <p className="text-sm text-gray-600">
                  Elastyczna architektura Next.js pozwala na rozbudowę
                </p>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 bg-indigo-50">
              <CardContent className="p-6">
                <BarChart3Icon className="mb-4 h-8 w-8 text-indigo-600" />
                <h3 className="mb-2 font-semibold">Statystyki i analizy</h3>
                <p className="text-sm text-gray-600">
                  Śledź wizyty, efektywność, grafik
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200 bg-teal-50">
              <CardContent className="p-6">
                <CloudIcon className="mb-4 h-8 w-8 text-teal-600" />
                <h3 className="mb-2 font-semibold">Działa w przeglądarce</h3>
                <p className="text-sm text-gray-600">
                  Bez instalacji, na komputerze i telefonie
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
