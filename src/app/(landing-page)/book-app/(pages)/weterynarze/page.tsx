import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Search,
  Smartphone,
  Users,
  CheckCircle,
  Mail,
  ExternalLinkIcon,
  CalendarIcon,
} from "lucide-react";
import Image from "next/image";
import { CTASection } from "../../_components/sections/cta-section";
import { DemoSection } from "../../_components/sections/demo-section";
import { GridBackground } from "@/components/grid-background";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Link from "next/link";
import { GradientButton } from "@/components/ui/gradient-button";
import BlogPreviewSection from "@/components/sections/blog-preview-section";

export default function VeterinaryLanding() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <div id="dla-czego">
        <WhySection />
      </div>
      <div id="co-zyskujesz">
        <FeaturesSection />
      </div>
      <div id="jak-to-dziala">
        <HowItWorksSection />
      </div>

      <DemoSection />
      <div id="ceny">
        <PricingSection />
      </div>
      <CTASection
        scheduleHref="/join/service-selection?service=book-app"
        demoHref="https://vet-app-demo.vercel.app"
      />
      <BlogPreviewSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section>
      <GridBackground className="py-8 xl:py-20">
        <MaxWidthWrapper>
          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="mb-4 rounded-full bg-card-gradient text-emerald-800">
                  Nowoczesne rozwiązania dla weterynarii
                </Badge>
                <h1 className="text-4xl font-bold leading-tight text-foreground lg:text-6xl">
                  Szybka i nowoczesna strona internetowa dla Twojej{" "}
                  <span className="text-cyan-500">
                    przychodni weterynaryjnej
                  </span>
                </h1>
                <p className="text-xl leading-relaxed">
                  System rezerwacji wizyt online, który działa 24/7. Zwiększ
                  widoczność w Google i zyskaj nowych klientów.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:w-auto sm:flex-row sm:justify-start">
                <Link
                  href="https://vet-app-demo.vercel.app/"
                  target="_blank"
                  className="w-full md:w-auto"
                >
                  <GradientButton size="default">
                    <ExternalLinkIcon className="mr-2 h-5 w-5" />
                    Zobacz demo
                  </GradientButton>
                </Link>
                <Link
                  href="/join/service-selection?service=book-app"
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
            <div className="relative hidden lg:block">
              <Image
                src="https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vGv9hFviLmG6Bl5ZSRD14bKQUPw0uxyIj2VEM"
                alt="System BookApp dla przychodni weterynaryjnej"
                width={800}
                height={500}
                className="rounded-2xl opacity-90"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </GridBackground>
    </section>
  );
}

function WhySection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-cyan-900 lg:text-4xl">
            Dlaczego Twoja przychodnia potrzebuje nowoczesnej strony?
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Współczesni właściciele zwierząt oczekują wygody i szybkości. Daj im
            to, czego potrzebują.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Smartphone className="h-8 w-8 text-cyan-600" />,
              title: "Wygoda dla klientów",
              description:
                "Twoi klienci chcą wygody — rezerwacji wizyty bez dzwonienia",
            },
            {
              icon: <Clock className="h-8 w-8 text-cyan-600" />,
              title: "Szybkość ładowania",
              description:
                "Strona ładująca się szybko na telefonie to podstawa zaufania",
            },
            {
              icon: <Search className="h-8 w-8 text-cyan-600" />,
              title: "Lepsze SEO",
              description:
                "Lepsze SEO = więcej osób z Twojej okolicy Cię znajdzie",
            },
            {
              icon: <Users className="h-8 w-8 text-cyan-600" />,
              title: "Zarządzanie grafikiem",
              description:
                "Prosty system zarządzania grafikiem lekarzy i dostępnością",
            },
            {
              icon: <Mail className="h-8 w-8 text-cyan-600" />,
              title: "Automatyczne przypomnienia",
              description: "Automatyczne przypomnienia e-mail/SMS dla klientów",
            },
            {
              icon: <CheckCircle className="h-8 w-8 text-cyan-600" />,
              title: "Pełna kontrola",
              description: "Kompletny system zarządzania wizytami i klientami",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg transition-shadow hover:shadow-xl"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-cyan-900 lg:text-4xl">
            Co zyskujesz z naszą stroną i systemem BookApp?
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Kompleksowe rozwiązanie, które zmieni sposób działania Twojej
            przychodni
          </p>
        </div>
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
      </div>
    </section>
  );
}
function HowItWorksSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-cyan-900 lg:text-4xl">
            Jak to działa?
          </h2>
          <p className="text-xl text-gray-600">Prosty proces w 3 krokach</p>
        </div>
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
              <CardContent className="relative z-20 p-6">
                <div className="mb-4">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 text-xl font-bold text-white">
                    {step.step}
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mb-6 text-gray-600">{step.description}</p>
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  width={400}
                  height={300}
                  className="mx-auto mb-4 rounded-lg"
                />
              </CardContent>
              <div className="absolute inset-0 bg-card-gradient opacity-40"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
function PricingSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-cyan-900 lg:text-4xl">
            Cennik i oferta
          </h2>
          <p className="text-xl text-gray-600">
            Kompleksowe rozwiązanie w przystępnej cenie
          </p>
        </div>
        <Card className="mx-auto max-w-2xl border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="mb-8 text-center">
              <h3 className="mb-2 text-2xl font-bold text-cyan-900">
                Strona + BookApp dla przychodni weterynaryjnej
              </h3>
              <p className="mb-6 text-gray-600">
                Gotowy do wdrożenia system rezerwacji i strona wizytówka
              </p>
              <div className="mb-2 text-4xl font-bold text-cyan-700">
                wdrożenie od 3900 zł
              </div>
            </div>
            <div className="mb-8 space-y-4">
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
      </div>
    </section>
  );
}
