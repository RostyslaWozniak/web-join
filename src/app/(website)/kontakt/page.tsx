import { Alert } from "@/components/alert";
import { GridBackground } from "@/components/grid-background";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { FaqSection } from "@/components/sections/faq-section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { H1, H2, H3, Text } from "@/components/ui/typography";
import { ContactForm } from "@/features/contact-form";
import { cn } from "@/lib/utils";
import {
  ArrowDownIcon,
  CircleCheckBigIcon,
  ClockIcon,
  PhoneIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <section>
        <GridBackground className="flex items-center justify-center">
          <MaxWidthWrapper className="relative flex min-h-[30vh] flex-col items-start justify-center gap-y-4 py-8 sm:items-center md:py-16 lg:min-h-[40vh]">
            <Badge>Darmowa konsultacja</Badge>
            <H1 className="">
              Zadaj mi dowolne{" "}
              <span className="bg-primary-gradient bg-clip-text pr-1 text-transparent">
                pytanie
              </span>
            </H1>
            <Text size="lg" className="max-w-3xl text-base sm:text-center">
              Bezpłatna konsultacja to 30 minut konkretnej rozmowy, które możesz
              wykorzystać na skonsultowanie dowolnego tematu związanego z
              tworzeniem, optymalizacją i zarządzaniem stronami internetowymi
            </Text>
            <Link
              href="/kontakt#form"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full bg-background sm:w-auto lg:hidden",
              )}
            >
              Wypełnij formularz <ArrowDownIcon />
            </Link>
          </MaxWidthWrapper>
        </GridBackground>
      </section>
      <section className="">
        <MaxWidthWrapper className="max-w-6xl">
          <div className="grid gap-x-4 lg:grid-cols-2 lg:gap-x-12">
            <div className="space-y-8 pt-16 lg:py-20">
              <div className="mx-auto max-w-lg space-y-4">
                <H2 className="!text-start">Co po wysłaniu formularza?</H2>
                <Alert variant="default" className="space-y-2">
                  <div className="flex flex-col justify-between gap-y-2">
                    <FormAlertComponent />
                  </div>
                  <p>
                    Po wysłaniu formularza zadzwonię do Ciebie do końca
                    następnego dnia roboczego.
                  </p>
                </Alert>

                <H3 className="!text-start">O czym będziemy rozmawiać?</H3>
                <TopicsToTalkSection />
                <p>
                  Jeśli masz inny temat – śmiało! To Ty decydujesz, o czym
                  porozmawiamy.
                </p>
              </div>
            </div>
            <div id="form" className="py-16 lg:py-20">
              <Card className="relative mx-auto max-w-xl overflow-hidden bg-transparent">
                <CardHeader className="space-y-2 !pb-2">
                  <H3 className="!text-start">Wypełnij formularz</H3>
                </CardHeader>
                <CardContent className="!pt-2">
                  <ContactForm />
                </CardContent>
                <div className="absolute inset-0 -z-10 bg-card-gradient opacity-10" />
              </Card>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <FaqSection />
    </>
  );
}

function FormAlertComponent() {
  const data = [
    { id: 1, text: "rozmowa telefoniczna", icon: PhoneIcon },
    { id: 2, text: "1:1", icon: UsersIcon },
    { id: 3, text: "30 minut", icon: ClockIcon },
  ];
  return (
    <>
      {data.map(({ id, text, icon: Icon }) => (
        <span key={id} className="flex items-center gap-2">
          <Icon size={18} />
          <p className="text-foreground">{text}</p>
        </span>
      ))}
    </>
  );
}

function TopicsToTalkSection() {
  const data = [
    {
      id: 1,
      title: "Pomysł na nową stronę",
      description: "chcesz stworzyć coś od zera? Doradzę, od czego zacząć",
    },
    {
      id: 2,
      title: "Optymalizacja SEO",
      description: "pierwsze kroki do lepszej widoczności w Google",
    },
    {
      id: 3,
      title: "Audyt Twojej obecnej strony",
      description: "omówimy, co działa, a co warto poprawić",
    },
    {
      id: 4,
      title: "Bezpieczeństwo strony",
      description: "podstawowe zasady, które ochronią Twoją witrynę",
    },
    {
      id: 5,
      title: "Cele i strategia",
      description: "jak dopasować stronę do celów Twojego biznesu",
    },
  ];
  return (
    <div>
      {data.map(({ id, title, description }) => (
        <div key={id} className="grid grid-cols-12 items-start gap-x-2">
          <CircleCheckBigIcon
            className="mx-auto mt-0.5 text-emerald-600"
            size={20}
          />
          <p className="col-span-11">
            <span className="font-semibold">{title}</span>– {description}
          </p>
        </div>
      ))}
    </div>
  );
}
