import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  CalendarIcon,
  SmartphoneIcon,
  ClockIcon,
  CheckCircleIcon,
  MailIcon,
  UsersIcon,
  SearchIcon,
} from "lucide-react";
import Image from "next/image";
import { GridBackground } from "@/components/grid-background";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { GradientButton } from "@/components/ui/gradient-button";
import { BlogPreviewSection } from "@/components/sections";
import { H1, H3, Text } from "@/components/ui/typography";
import { AccessibleLink } from "@/components/accesible-link";
import { SectionWrapper } from "@/components/section-wrapper";
import { CardItem } from "@/components/card-item";
import { CtaForm } from "@/features/forms/cta-form";
import { SectionHeader } from "@/components/section-header";

export default function VeterinaryLanding() {
  return (
    <>
      <SectionWrapper paddingBlock="none">
        <HeroSection />
      </SectionWrapper>
      <SectionWrapper id="dla-czego">
        <MaxWidthWrapper>
          <WhySection />
        </MaxWidthWrapper>
      </SectionWrapper>
      <SectionWrapper id="co-zyskujesz" className="bg-white">
        <MaxWidthWrapper>
          <FeaturesSection />
        </MaxWidthWrapper>
      </SectionWrapper>

      <SectionWrapper id="jak-to-dziala">
        <MaxWidthWrapper>
          <HowItWorksSection />
        </MaxWidthWrapper>
      </SectionWrapper>

      <SectionWrapper className="relative" id="form">
        <MaxWidthWrapper size="md" className="relative z-10">
          <SectionHeader
            title="Zacznij już dziś!"
            subtitle="Umów się na bezpłatną prezentację i poznaj możliwości systemu BookApp"
            className="mx-auto max-w-2xl"
          />
          <div>
            <CtaForm typeOfProject="rezerwacji wizyt dla weterynarzy online BookApp" />
          </div>
        </MaxWidthWrapper>
        <div className="absolute inset-0 bg-card-gradient opacity-50" />
      </SectionWrapper>

      {/* <SectionWrapper className="bg-card-gradient">
        <MaxWidthWrapper>
          <DemoSection />
        </MaxWidthWrapper>
      </SectionWrapper> */}

      <SectionWrapper id="ceny">
        <MaxWidthWrapper>
          <PricingSection />
        </MaxWidthWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <MaxWidthWrapper>
          <BlogPreviewSection />
        </MaxWidthWrapper>
      </SectionWrapper>
    </>
  );
}

function HeroSection() {
  return (
    <GridBackground className="py-8 xl:py-20">
      <MaxWidthWrapper>
        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="max-w-4xl space-y-4">
              <Badge className="mb-4 rounded-full bg-card-gradient text-foreground">
                Nowoczesne rozwiązania dla weterynarii
              </Badge>
              <H1 className="text-4xl font-bold leading-tight text-foreground lg:text-6xl">
                Szybka i nowoczesna strona internetowa dla Twojej{" "}
                <span className="text-accent-cyan brightness-[0.95]">
                  przychodni weterynaryjnej
                </span>
              </H1>
              <Text variant="muted" size="subtitle" className="leading-relaxed">
                System rezerwacji wizyt online, który działa 24/7. Zwiększ
                widoczność w Google i zyskaj nowych klientów.
              </Text>
            </div>
            <div className="mx-auto flex flex-col gap-4 sm:mx-0 sm:w-min sm:flex-row sm:justify-center">
              <AccessibleLink
                href="/book-app/weterynarze#form"
                aria-label="Umów darmową prezentację"
              >
                <GradientButton>
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  Umów się na prezentację
                </GradientButton>
              </AccessibleLink>
              {/* <AccessibleLink
                href="https://vet-app-demo.vercel.app/"
                target="_blank"
                aria-label="Przejdź do demo"
              >
                <GradientButton outline>
                  Zobacz demo
                  <ExternalLinkIcon className="ml-2 h-5 w-5 text-accent-cyan" />
                </GradientButton>
              </AccessibleLink> */}
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vIlu9mSQsuw8XFMkabNAfpSTG7Kyi6xOWVh4R"
              alt="System BookApp dla przychodni weterynaryjnej"
              width={800}
              height={500}
              className="rounded-2xl opacity-90"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </GridBackground>
  );
}

function WhySection() {
  return (
    <>
      <SectionHeader
        title="Dlaczego Twoja przychodnia potrzebuje nowoczesnej strony?"
        subtitle=" Współczesni właściciele zwierząt oczekują wygody i szybkości. Daj im
          to, czego potrzebują."
        className="mx-auto max-w-2xl"
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: SmartphoneIcon,
            title: "Wygoda dla klientów",
            description:
              "Twoi klienci chcą wygody — rezerwacji wizyty bez dzwonienia",
          },
          {
            icon: ClockIcon,
            title: "Szybkość ładowania",
            description:
              "Strona ładująca się szybko na telefonie to podstawa zaufania",
          },
          {
            icon: SearchIcon,
            title: "Lepsze SEO",
            description:
              "Lepsze SEO = więcej osób z Twojej okolicy Cię znajdzie",
          },
          {
            icon: UsersIcon,
            title: "Zarządzanie grafikiem",
            description:
              "Prosty system zarządzania grafikiem lekarzy i dostępnością",
          },
          {
            icon: MailIcon,
            title: "Automatyczne przypomnienia",
            description: "Automatyczne przypomnienia e-mail/SMS dla klientów",
          },
          {
            icon: CheckCircleIcon,
            title: "Pełna kontrola",
            description: "Kompletny system zarządzania wizytami i klientami",
          },
        ].map(({ title, icon, description }, index) => (
          <CardItem
            key={index}
            align="center"
            title={title}
            description={description}
            icon={icon}
            className="border-0 shadow-lg transition-shadow hover:shadow-xl"
            iconClassName="min-w-14 min-h-14 text-cyan-600 bg-gray-100"
          />
        ))}
      </div>
    </>
  );
}
function FeaturesSection() {
  return (
    <>
      <SectionHeader
        title="Co zyskujesz z naszą stroną i systemem BookApp?"
        subtitle="Kompleksowe rozwiązanie, które zmieni sposób działania Twojej
          przychodni"
      />

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          {[
            "Intuicyjny system umawiania wizyt — klienci rezerwują 24/7",
            "Klienci mogą dodać swoje zwierzaki i zarządzać wizytami online",
            "Lekarze widzą pełen grafik, mogą łatwo zmieniać dostępność",
            "Administrator ma pełną kontrolę nad usługami i harmonogramem",
            "Szybka i responsywna strona, która działa doskonale na każdym urządzeniu",
            "Strona zoptymalizowana pod lokalne SEO — wyższa pozycja w Google",
          ].map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-emerald-600" />
              <p className="text-lg text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
        <div className="relative">
          <Image
            src="https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vFUcNU5oBYGM0x51Xkr9t2iosJVAzI8RjdTOb"
            alt="Interfejs systemu BookApp"
            width={700}
            height={500}
            className="rounded-2xl shadow-md"
          />
        </div>
      </div>
    </>
  );
}
function HowItWorksSection() {
  return (
    <>
      <SectionHeader
        title="Jak to działa?"
        subtitle="Prosty proces w 3 krokach"
      />
      <div className="grid gap-8 md:grid-cols-3">
        {[
          {
            step: "1",
            title: "Wybierz termin i usługę",
            description:
              "Klient wybiera dogodny termin i usługę z oferty przychodni.",
            image:
              "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vZnUYYy9NdUy9Ex7CYT1F6pQR5h4ct83KgBOi",
          },
          {
            step: "2",
            title: "Dodaj zwierzaka i potwierdź wizytę",
            description:
              "Możliwość dodania zwierzaka oraz automatyczne przypomnienia.",
            image:
              "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vaulmEJOQBkN6lL4YuXxhyPqd0mR3FWnMrU7G",
          },
          {
            step: "3",
            title: "Weterynarz zarządza grafikiem",
            description:
              "Lekarze widzą swoje wizyty i mogą elastycznie dostosować grafik.",
            image:
              "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vDYUg4gImIwaJ1zTQ5WiArgde3NYZcoP2M9hR",
          },
        ].map((step, index) => (
          <Card
            key={index}
            className="relative isolate overflow-hidden border-0 bg-transparent text-center shadow-lg"
          >
            <CardContent className="relative z-20 flex h-full flex-col items-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 text-xl font-bold text-white">
                {step.step}
              </div>
              <H3 className="mb-2 text-xl font-semibold">{step.title}</H3>
              <p className="mb-6">{step.description}</p>
              <div className="flex flex-grow items-center justify-center">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-card-gradient opacity-60"></div>
          </Card>
        ))}
      </div>
    </>
  );
}
function PricingSection() {
  return (
    <>
      <SectionHeader
        title="Cennik i oferta"
        subtitle="Kompleksowe rozwiązanie w przystępnej cenie"
      />
      <Card className="mx-auto max-w-2xl border-0 bg-white/80 shadow-xl backdrop-blur-sm hover:shadow-lg">
        <CardContent className="p-4 md:p-8">
          <div className="mb-8 text-center">
            <H3 className="0 mb-2 text-2xl font-bold">
              Strona + BookApp dla przychodni weterynaryjnej
            </H3>
            <p className="mb-3 md:mb-6">
              Gotowy do wdrożenia system rezerwacji i strona wizytówka
            </p>
            <div className="mb-2 text-4xl font-bold text-cyan-700">
              wdrożenie od 3900 zł
            </div>
          </div>
          <div className="space-y-4">
            {[
              "Pełna personalizacja i optymalizacja SEO",
              "System rezerwacji wizyt online 24/7",
              "Panel administracyjny dla lekarzy",
              "Zarządzanie profilami zwierząt",
              "Automatyczne przypomnienia",
              "Responsywny design",
              "Wsparcie techniczne",
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
