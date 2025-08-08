import { Mail, Phone } from "lucide-react";

import { GradientButton } from "@/components/ui/gradient-button";
import { SectionSeparator } from "@/components/ui/section-separator";
import { H1, H2, Text } from "@/components/ui/typography";
import Link from "next/link";
import { GridBackground } from "@/components/grid-background";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { AnimatedText } from "@/components/animations/animated-text";
import { db } from "@/server/db";
import { notFound } from "next/navigation";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Dziękuję za kontakt! Twoja wiadomość została wysłana.",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ id: string | null }>;
}) {
  const { id } = await searchParams;
  if (id == null) return notFound();

  const existingEmailId = await db.contactForm
    .findUnique({
      where: {
        emailId: id,
      },
    })
    .catch(() => notFound());

  if (!existingEmailId) return notFound();
  return (
    <div className="w-full">
      <section>
        <GridBackground maskGradient className="py-12 md:py-20">
          <MaxWidthWrapper className="relative z-10 flex flex-col items-center">
            <H1 className="max-w-sm sm:text-center md:max-w-6xl">
              <AnimatedText
                className="md:justify-center"
                text="Dziękuję za kontakt! Twoja wiadomość została wysłana."
                accentWords={["Dziękuję", "wysłana."]}
              />
            </H1>
          </MaxWidthWrapper>
        </GridBackground>
      </section>
      <div className="mx-auto w-full max-w-3xl px-4 pb-12 md:py-20">
        <div className="space-y-6">
          <div className="space-y-2 rounded-lg py-4">
            <H2 className="mb-3 !text-start text-3xl font-medium">Co dalej?</H2>
            <Text variant="muted">
              <span className="font-semibold text-foreground">
                • Analiza Twojego zapytania
              </span>{" "}
              – przejrzę Twoją wiadomość, aby przygotować najlepsze rozwiązanie.
            </Text>
            <Text variant="muted">
              <span className="font-semibold text-foreground">
                • Kontakt zwrotny{" "}
              </span>{" "}
              – spodziewaj się odpowiedzi maksymalnie następnego dnia roboczego.
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
            <div className="grid gap-4 md:grid-cols-3">
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
        <div className="mt-12 flex justify-center">
          <Link href="/" className="w-full sm:w-auto">
            <GradientButton className="mt-8 gap-2">
              Powrót na główną
            </GradientButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
