import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3Icon,
  CheckCircleIcon,
  HeartIcon,
  StethoscopeIcon,
  UsersIcon,
} from "lucide-react";

export function WhatIsVetAppSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <div className="mb-6 flex items-center justify-center">
              <HeartIcon className="mr-4 hidden text-accent-emerald md:block md:h-16 md:w-16" />
              <h2 className="text-3xl font-bold lg:text-4xl">
                VetApp – Kompletny system do rezerwacji wizyt i zarządzania
                przychodnią
              </h2>
            </div>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              VetApp to nowoczesna aplikacja webowa, którą łączymy z Twoją
              stroną internetową. Działa 24/7, jest prosta w obsłudze i
              dostosowana specjalnie do potrzeb przychodni weterynaryjnych.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="bg-transparent shadow-lg dark:border-accent-cyan">
              <CardHeader className="text-center">
                <UsersIcon className="mx-auto mb-4 h-12 w-12 text-accent-cyan" />
                <CardTitle className="text-xl">Klient</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-card-foreground" />
                    <span className="text-sm">Umawia wizytę</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-card-foreground" />
                    <span className="text-sm">Przegląda historię</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-card-foreground" />
                    <span className="text-sm">Dodaje zwierzęta</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-transparent shadow-lg dark:border-accent-emerald">
              <CardHeader className="text-center">
                <StethoscopeIcon className="mx-auto mb-4 h-12 w-12 text-accent-emerald" />
                <CardTitle className="text-xl">Weterynarz</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-card-foreground" />
                    <span className="text-sm">Ustala dostępność</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-card-foreground" />
                    <span className="text-sm">Zarządza kalendarzem</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-card-foreground" />
                    <span className="text-sm">Widzi historię pacjentów</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-transparent shadow-lg dark:border-accent-green">
              <CardHeader className="text-center">
                <BarChart3Icon className="mx-auto mb-4 h-12 w-12 text-accent-green" />
                <CardTitle className="text-xl">Administrator</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-card-foreground" />
                    <span className="text-sm">Kontrola nad wszystkim</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-card-foreground" />
                    <span className="text-sm">Usługi, statystyki</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-card-foreground" />
                    <span className="text-sm">Terminy, dostępność</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
