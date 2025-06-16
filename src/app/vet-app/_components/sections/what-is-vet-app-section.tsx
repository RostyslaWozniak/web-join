import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  BarChart3Icon,
  CheckCircleIcon,
  HeartIcon,
  StethoscopeIcon,
  UsersIcon,
} from "lucide-react";

const benefitCardsData = [
  {
    title: "Klient",
    icon: UsersIcon,
    colors: "text-accent-cyan",
    benefits: [
      "Umawia wizytę 24/7",
      "Sprawdza historię swoich rezerwacji",
      "Dodaje/edytuje dane swoich zwierząt",
    ],
  },
  {
    title: "Weterynarz",
    icon: StethoscopeIcon,
    colors: "text-accent-emerald",
    benefits: [
      "Ustala własną dostępność",
      "Zarządza swoim kalendarzem wizyt",
      "Widzi dane kontaktowe i historię rezerwacji pacjentów",
    ],
  },
  {
    title: "Administrator",
    icon: BarChart3Icon,
    colors: "text-accent-lime",
    benefits: [
      "Ma pełną kontrolę nad systemem rezerwacji",
      "Zarządza usługami i cennikiem",
      "Monitoruje statystyki wizyt i dostępności",
    ],
  },
];

export function WhatIsVetAppSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <div className="relative mb-6 flex items-center justify-center">
              <HeartIcon className="absolute -left-20 top-0 hidden text-accent-emerald md:block md:h-16 md:w-16" />
              <h2 className="text-3xl font-bold lg:text-4xl">
                VetApp – Nowoczesny System Rezerwacji Online i Strona
                Internetowa dla Wzrostu Twojej Przychodni Weterynaryjnej
              </h2>
            </div>
            <p className="mx-auto max-w-4xl text-xl text-muted-foreground">
              VetApp to nowoczesna aplikacja webowa, która bezproblemowo połączy
              się z Twoją stroną. Dostępna 24/7, jest intuicyjna dla personelu i
              klientów, stworzona by sprostać unikalnym potrzebom nowoczesnych
              przychodni weterynaryjnych.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {benefitCardsData.map(({ title, icon: Icon, benefits, colors }) => (
              <Card
                key={title}
                className="bg-transparent shadow-lg dark:border-accent-cyan"
              >
                <CardHeader className="text-center">
                  <Icon className={cn("mx-auto mb-4 h-12 w-12", colors)} />
                  <CardTitle className="text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
