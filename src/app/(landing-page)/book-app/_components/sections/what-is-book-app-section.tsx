import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { H2 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import {
  BarChart3Icon,
  CheckCircleIcon,
  HeartIcon,
  UserCogIcon,
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
      "Dostaje przypomnienia o wizycie",
    ],
  },
  {
    title: "Specjalista",
    icon: UserCogIcon,
    colors: "text-accent-emerald",
    benefits: [
      "Ustala własną dostępność",
      "Zarządza swoim kalendarzem wizyt",
      "Widzi dane kontaktowe i historię rezerwacji klientów",
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

export function WhatIsBookAppSection() {
  return (
    <>
      <div className="mb-6 text-center md:mb-12">
        <H2 className="relative mb-3 md:mb-6">
          <HeartIcon className="absolute -top-16 left-1/2 h-16 w-16 -translate-x-1/2 text-accent-emerald lg:-top-3 lg:left-0 lg:block" />
          BookApp – Nowoczesny System Rezerwacji Online i Strona Internetowa dla
          Wzrostu Twojej Firmy
        </H2>
        <p className="mx-auto max-w-4xl text-xl text-muted-foreground">
          BookApp to nowoczesna aplikacja webowa, która bezproblemowo połączy
          się z Twoją stroną. Dostępna 24/7, jest intuicyjna dla personelu i
          klientów, stworzona by sprostać unikalnym potrzebom nowoczesnych firm
          usługowych.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {benefitCardsData.map(({ title, icon: Icon, benefits, colors }) => (
          <Card
            key={title}
            className="mx-auto w-full max-w-[400px] border-none bg-white/80 shadow-xl backdrop-blur-sm"
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
    </>
  );
}
