import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, CheckCircleIcon } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const pricing = [
  {
    id: 1,
    name: "basic",
    price: 3900,
    pricePerMonth: 249,
    benefits: [
      "Profesjonalna strona główna z nowoczesnym designem",
      "System rezerwacji wizyt dla jednego specjalisty",
      "Intuicyjny terminarz dostępny online 24/7",
      "Automatyczne potwierdzenia wizyt (e-mail)",
      "Podstawowa optymalizacja SEO (widoczność w Google)",
      "Możliwość dalszej rozbudowy w przyszłości",
    ],
    styles: "bg-emerald-100 text-emerald-800",
  },
  {
    id: 2,
    name: "standard",
    price: 5900,
    pricePerMonth: 349,
    benefits: [
      "Wszystko z Basic",
      "Rozbudowana strona z podstronami (o nas, usługi, kontakt, blog, każda usługa osobno — lepsze SEO)",
      "Możliwość zarządzania grafikami dla 2–4 lekarzy",
      "Panel zarządzania dla właściciela lub kierownika kliniki",
      "Osobne widoki kalendarza dla każdego lekarza",
      "Statystyki — ile wizyt dziennie, tygodniowo, miesięcznie",
      "Regularne wsparcie i aktualizacje",
      "Przygotowanie do dalszej rozbudowy (np. płatności, CMS itd.)",
    ],
    styles: "bg-blue-100 text-blue-800",
  },
  {
    id: 3,
    name: "premium",
    price: 9900,
    pricePerMonth: 499,
    benefits: [
      "Wszystko z pakietu Standard",
      "Obsługa dowolnej liczby lekarzy",
      "Możliwość dodania płatności online i planów subskrypcyjnych",
      "Strona w wielu językach (jeśli potrzebna)",
      "Stała współpraca w ramach rozwoju i strategii online",
      "Priorytetowe wsparcie — szybka reakcja na potrzeby i zmiany",
      "Regularne konsultacje i analizy rozwoju strony",
    ],
    styles: "bg-purple-100 text-purple-800",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
              💼 Dla małych i średnich przychodni – elastyczne opcje
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {pricing.map(
              ({ id, name, price, pricePerMonth, benefits, styles }, i) => (
                <Card
                  key={id}
                  className={cn("relative flex flex-col bg-white shadow-lg", {
                    "border-accent-cyan sm:scale-105": i === 1,
                  })}
                >
                  {i === 1 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                      <Badge className="bg-accent-cyan text-white">
                        Najpopularniejszy
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <Badge className={cn(styles, "mx-auto mb-4 uppercase")}>
                      {name}
                    </Badge>
                    <CardTitle className="text-2xl">
                      wdrożenie od {price} zł
                    </CardTitle>
                    <CardDescription className="text-lg">
                      + {pricePerMonth} zł/mies
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="flex-1 space-y-3">
                      {benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <span className="flex h-[1lh] items-center">
                            <CheckCircleIcon className="h-4 w-4 text-emerald-500" />
                          </span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ),
            )}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-8 text-lg text-gray-700">
              Możliwość rozbudowy krok po kroku – współpraca długoterminowa.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/join/service-selection?service=vet-app"
                className="w-full md:w-auto"
              >
                <GradientButton
                  size="default"
                  outline
                  textSize="tracking-tight text-base [@media(min-width:390px)]:tracking-normal [@media(min-width:390px)]:text-lg"
                >
                  <CalendarIcon className="mr-2 h-5 w-5 text-accent-cyan" />
                  Umów się na bezpłatną prezentację
                </GradientButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
