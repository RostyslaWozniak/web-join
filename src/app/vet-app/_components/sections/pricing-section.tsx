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
    price: 1500,
    pricePerMonth: 99,
    benefits: ["1 weterynarz", "Strona główna", "System wizyt"],
    styles: "bg-emerald-100 text-emerald-800",
  },
  {
    id: 2,
    name: "standard",
    price: 2900,
    pricePerMonth: 149,
    benefits: [
      "Wszystko z basic",
      "2–4 weterynarzy",
      "Strona z SEO",
      "Statystyki",
      "Support",
    ],
    styles: "bg-blue-100 text-blue-800",
  },
  {
    id: 3,
    name: "premium",
    price: 4900,
    pricePerMonth: 199,
    benefits: [
      "Wszystko z standard",
      "Pełna wersja",
      "Rozbudowa",
      "Priorytetowy support",
    ],
    styles: "bg-purple-100 text-purple-800",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
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
                    "border-emerald-600 sm:scale-105": i === 1,
                  })}
                >
                  {i === 1 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                      <Badge className="bg-emerald-600 text-white">
                        Najpopularniejszy
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <Badge className={cn(styles, "mx-auto mb-4 uppercase")}>
                      {name}
                    </Badge>
                    <CardTitle className="text-2xl">od {price} zł</CardTitle>
                    <CardDescription className="text-lg">
                      + {pricePerMonth} zł/mies
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="flex-1 space-y-3">
                      {benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center">
                          <CheckCircleIcon className="mr-2 h-4 w-4 text-green-500" />
                          <span className="text-sm">{benefit}</span>
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
                <GradientButton size="default" outline>
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
