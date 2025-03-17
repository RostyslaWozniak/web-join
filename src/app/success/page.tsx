import { CheckCircle, Mail, Phone } from "lucide-react";

import { GradientButton } from "@/components/ui/gradient-button";
import { SectionSeparator } from "@/components/ui/section-separator";
import { H1, Text } from "@/components/ui/typography";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-20">
      <div className="border-border/40">
        <div className="pb-6 text-center">
          <div className="mb-2 flex justify-center">
            <div className="rounded-full bg-primary-cyan/10 p-3">
              <CheckCircle className="h-12 w-12 text-primary" />
            </div>
          </div>
          <H1 className="!text-4xl">Dziękuję za kontakt!</H1>
          <Text variant="muted">Twoja wiadomość została wysłana.</Text>
        </div>

        <div className="space-y-6">
          <div className="space-y-2 rounded-lg py-4">
            <h2 className="mb-3 text-xl font-medium">Co dalej?</h2>
            <Text variant="muted">
              <span className="font-semibold text-foreground">
                • Analiza Twojego zapytania
              </span>{" "}
              – dokładnie przejrzę Twoją wiadomość, aby przygotować najlepsze
              rozwiązanie.
            </Text>
            <Text variant="muted">
              <span className="font-semibold text-foreground">
                • Kontakt zwrotny{" "}
              </span>{" "}
              – spodziewaj się odpowiedzi w ciągu 24 godzin.
            </Text>
            <Text variant="muted">
              <span className="font-semibold text-foreground">
                • Kolejne kroki{" "}
              </span>{" "}
              – jeśli będzie potrzeba, umówimy się na krótką rozmowę lub
              wymienimy kilka maili, aby doprecyzować szczegóły.
            </Text>
          </div>

          <SectionSeparator className="!px-0" />

          <div>
            <h2 className="mb-3 font-medium">Masz jakies pytania?</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />

                <a
                  href={`mailto:contact@webjoin.pl`}
                  className="font-semibold hover:underline"
                >
                  contact@webjoin.pl
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />

                <a
                  href="tel:+48798582849"
                  className="font-semibold hover:underline"
                >
                  +48 798 582 849
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/" className="w-full sm:w-auto">
            <GradientButton className="mt-8 gap-2" size="lg" textSize="text-xl">
              Powrót na główną
            </GradientButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
