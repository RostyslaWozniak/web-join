import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { H2 } from "@/components/ui/typography";

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
      "Możliwość zarządzania grafikami dla 2–4 specjalistów",
      "Panel zarządzania dla właściciela lub kierownika firmy",
      "Osobne widoki kalendarza dla każdego specjalisty",
      "Statystyki — ile wizyt dziennie, tygodniowo, miesięcznie",
      "Regularne wsparcie i aktualizacje",
      "Przygotowanie do dalszej rozbudowy (np. płatności online, CMS itd.)",
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
      "Obsługa dowolnej liczby specjalistów",
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
    <>
      <H2 className="mb-3 text-center md:mb-6">
        Dla małych i średnich firm – elastyczne opcje
      </H2>
      <div className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-x-1 overflow-x-auto px-4 pb-12 pt-8 sm:gap-x-4 lg:gap-x-6 xl:mx-0 xl:grid xl:snap-none xl:grid-cols-3 xl:gap-x-8">
        {pricing.map(
          ({ id, name, price, pricePerMonth, benefits, styles }, i) => {
            const isMostPopular = i === 1;
            return (
              <Card
                key={id}
                className={cn(
                  "relative flex min-w-[min(calc(100%-40px),_400px)] scale-95 snap-center flex-col border-gray-300 bg-white/80 shadow-xl backdrop-blur-sm",
                  {
                    "border-accent-cyan sm:scale-105": isMostPopular,
                    "scale-100": i === 1,
                  },
                )}
              >
                {isMostPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                    <Badge className="bg-accent-cyan tracking-wider text-foreground">
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
                      <li
                        key={benefit}
                        className="flex items-start gap-2 text-sm md:text-base"
                      >
                        <span className="flex h-[1lh] items-center">
                          <CheckCircleIcon className="h-4 w-4 text-emerald-500" />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          },
        )}
      </div>
    </>
  );
}
