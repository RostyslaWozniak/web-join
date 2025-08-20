import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  CalendarIcon,
  SmartphoneIcon,
  ClockIcon,
  PhoneIcon,
  PawPrintIcon,
  FrownIcon,
  RocketIcon,
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
import { cn } from "@/lib/utils";
import { PricingSection } from "../../_components/sections/pricing-section";
import {
  AppleIOIcon,
  GoogleCalendarIcon,
  GoogleMeetsIcon,
  MasterCardIcon,
  PayPalIcon,
  StripeIcon,
} from "@/components/icons/brands-icons";

export default function VeterinaryLanding() {
  return (
    <>
      <SectionWrapper paddingBlock="none">
        <HeroSection />
      </SectionWrapper>

      <SectionWrapper id="">
        <MaxWidthWrapper>
          <SolutionsSection />
        </MaxWidthWrapper>
      </SectionWrapper>

      <SectionWrapper paddingBlock="lg" className="bg-card-gradient">
        <MaxWidthWrapper size="sm">
          <IntegrationsSection />
        </MaxWidthWrapper>
      </SectionWrapper>

      <SectionWrapper id="" className="bg-white">
        <MaxWidthWrapper>
          <FeaturesSection />
        </MaxWidthWrapper>
      </SectionWrapper>

      <SectionWrapper id="jak-to-dziala">
        <MaxWidthWrapper>
          <HowItWorksSection />
        </MaxWidthWrapper>
      </SectionWrapper>

      <SectionWrapper className="bg-card-gradient">
        <MaxWidthWrapper size="md">
          <CtaSection />
        </MaxWidthWrapper>
      </SectionWrapper>

      <SectionWrapper id="ceny">
        <MaxWidthWrapper>
          <PricingSection />
        </MaxWidthWrapper>
      </SectionWrapper>

      <SectionWrapper className="relative" id="form">
        <MaxWidthWrapper size="sm" className="relative z-10">
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

      <SectionWrapper className="bg-white">
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
          <div>
            <div className="mb-4 max-w-4xl md:mb-8">
              <Badge className="mb-3 rounded-full bg-card-gradient text-foreground md:mb-6">
                Nowoczesne rozwiązania dla weterynarii
              </Badge>
              <H1 className="mb-3 font-bold text-foreground md:mb-6">
                System rezerwacji online dla Twojej{" "}
                <span className="text-accent-cyan brightness-[0.95]">
                  przychodni weterynaryjnej
                </span>
              </H1>
              <Text variant="muted" size="subtitle" className="leading-relaxed">
                Nowoczesny system rezerwacji w połączeniu z profesjonalną stroną
                internetową to Twoje wsparcie 24/7. Zwiększ widoczność w Google
                i zyskaj nowych klientów.
              </Text>
            </div>
            <div>
              <AccessibleLink
                href="/book-app/weterynarze#form"
                aria-label="Umów darmową prezentację"
                className="sm:mx-0"
              >
                <GradientButton className="">
                  <CalendarIcon className="mr-2" />
                  Umów prezentację online
                </GradientButton>
              </AccessibleLink>
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

function SolutionsSection() {
  return (
    <>
      <SectionHeader
        title="BookApp dla Przychodni Weterynaryjnych: Konkretne Rozwiązania dla Twoich Problemów"
        className="mx-auto mb-12 max-w-4xl md:mb-24"
      />
      <div className="mb-6 grid gap-4 sm:grid-cols-2 md:mb-12 md:grid-cols-3 md:gap-6">
        {[
          {
            id: "1",
            title: "Koniec z niekończącymi się telefonami",
            description:
              "Dzięki systemowi rezerwacji wizyt online, Twoi klienci umawiają wizyty samodzielnie, 24/7, z dowolnego miejsca. Recepcja jest odciążona, a personel może skupić się na pacjentach.",
            icon: PhoneIcon,
            iconClassName: "bg-green-100 text-green-600 border-green-600",
          },
          {
            id: "2",
            title: "Bez chaosu i nakładających się wizyt",
            description:
              "Inteligentne algorytmy BookApp automatycznie dopasowują dostępne sloty na podstawie czasu trwania usługi i grafiku lekarzy. Koniec z podwójnymi rezerwacjami i nieporozumieniami w kalendarzu.",
            icon: FrownIcon,
            iconClassName: "bg-blue-100 text-blue-600 border-blue-600",
          },
          {
            id: "3",
            title: "Mniej zapomnianych wizyt",
            description:
              "BookApp wysyła automatyczne przypomnienia SMS i e-mail na 24 godziny przed wizytą. To minimalizuje szansę, że klient się nie pojawi i maksymalizuje Twoje przychody, jednocześnie dbając o komfort klienta.",
            icon: ClockIcon,
            iconClassName: "bg-pink-100 text-pink-600 border-pink-600",
          },
          {
            id: "4",
            title: "Natychmiastowa rezerwacja, bez czekania na linii",
            description:
              "Klienci cenią swój czas. Dzięki aplikacji do umawiania wizyt, rezerwacja zajmuje im kilkanaście sekund, eliminując frustrację związaną z długim oczekiwaniem na połączenie.",
            icon: SmartphoneIcon,
            iconClassName: "bg-purple-100 text-purple-600 border-purple-600",
          },
          {
            id: "5",
            title: "Wygoda i nowoczesność dla opiekunów zwierząt",
            description:
              "Zaoferuj swoim klientom intuicyjny panel, gdzie mogą przeglądać historię wizyt, umówić kolejny termin i otrzymywać personalizowane oferty. To buduje lojalność i pozytywne doświadczenia.",
            icon: PawPrintIcon,
            iconClassName: "bg-gray-100 text-gray-600   border-gray-600",
          },
          {
            id: "6",
            title: "Zwiększona widoczność w Google",
            description:
              "Strona internetowa zintegrowana z BookApp jest zoptymalizowana pod SEO i szybkość działania. Dodatkowo, system automatycznie prosi o opinie w Google po wizycie, znacząco poprawiając Twoją pozycję w wynikach wyszukiwania i na Mapach Google Moja Firma.",
            icon: RocketIcon,
            iconClassName: "bg-orange-100 text-orange-600 border-orange-600",
          },
        ].map(({ id, title, description, icon: Icon, iconClassName }) => (
          <CardItem
            key={id}
            title={title}
            description={description}
            icon={Icon}
            iconClassName={iconClassName}
          />
        ))}
      </div>
    </>
  );
}

const integrationsIcons = [
  GoogleCalendarIcon,
  GoogleMeetsIcon,
  AppleIOIcon,
  StripeIcon,
  PayPalIcon,
  MasterCardIcon,
];

function IntegrationsSection() {
  return (
    <>
      <SectionHeader title="Podłącz swoje ulubione aplikacje do swojego procesu pracy." />
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {integrationsIcons.map((Icon, i) => (
          <div key={i} className="h-12 w-12 md:h-16 md:w-16">
            <Icon />
          </div>
        ))}
      </div>
    </>
  );
}

function FeaturesSection() {
  return (
    <>
      <SectionHeader
        title="BookApp – Dodatkowe funkcje, które Napędzą Rozwój Twojej Kliniki Weterynaryjnej"
        className="mx-auto mb-12 max-w-4xl md:mb-24"
      />

      <div className="mb-6 grid items-center gap-12 md:mb-12 lg:grid-cols-2">
        <div className="space-y-8">
          {[
            <>
              <b>Zwiększona widoczność dzięki opiniom Google:</b> System
              automatycznie prosi klientów o opinie po wizycie, co wzmacnia Twój
              wizerunek online i <b>lokalne SEO</b>
            </>,
            <>
              <b>Programy lojalnościowe i abonamenty:</b> Możliwość tworzenia
              dedykowanych &quot;Pakietów Zdrowy Pupil&quot; i subskrypcji,
              budujących długotrwałe relacje z opiekunami zwierząt i
              zapewniających stały dopływ wizyt.
            </>,
            <>
              <b>Bezpieczne płatności online:</b> Klienci mogą od razu opłacać
              wizyty, znacząco zmniejszając liczbę
              <b>odwołanych wizyt lub niepojawienie się klienta</b> i
              usprawniając zarządzanie finansami Twojej kliniki weterynaryjnej.
            </>,
            <>
              <b>Inteligentne dopasowanie usług i lekarzy:</b> Nasze
              oprogramowanie do zarządzania kliniką weterynaryjną automatycznie
              optymalizuje grafik, dopasowując terminy do konkretnego lekarza i
              rodzaju usługi.
            </>,
            <>
              <b> Szczegółowe statystyki i raporty:</b> Monitoruj popularność
              usług, trendy i efektywność kliniki, aby podejmować świadome
              decyzje, które napędzą rozwój Twojej placówki.
            </>,
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

const howItWorksData = [
  {
    title: "Dla Właściciela Zwierzęcia: Szybkie Umawianie Wizyt dla Pupila",
    image: {
      url: "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vZnUYYy9NdUy9Ex7CYT1F6pQR5h4ct83KgBOi",
      alt: "Panel klienta systemu BookApp",
    },
    features: [
      <>
        Wchodzi na dedykowaną stronę Twojej przychodni → wybiera usługę i
        preferowanego lekarza.
      </>,
      <>Rezerwuje termin w przejrzystym kalendarzu online – dostępnym 24/7.</>,
      <>
        Dostaje automatyczne potwierdzenie i przyjazne przypomnienie SMS/e-mail
        24h przed wizytą.
      </>,
      <>
        Po wizycie otrzymuje prośbę o opinię w Google i możliwość rezerwacji
        kolejnego terminu, co sprzyja budowaniu lojalności.
      </>,
    ],
  },
  {
    title: "Dla Lekarza Weterynarii: Pełna Kontrola nad Grafikiem i Pacjentami",
    image: {
      url: "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vDYUg4gImIwaJ1zTQ5WiArgde3NYZcoP2M9hR",
      alt: "Panel weterynarza systemu BookApp",
    },
    features: [
      <>
        Loguje się do intuicyjnego panelu aplikacji dla weterynarza → widzi swój
        indywidualny kalendarz wizyt.
      </>,
      <>
        Może łatwo ustawić dostępność, zaplanować urlopy czy przerwy w pracy,
        zapewniając optymalny grafik pracy weterynarza.
      </>,
      <>Dostaje natychmiastowe powiadomienia o nowych rezerwacjach.</>,
      <>
        Ma szybki dostęp do danych kontaktowych i historii leczenia każdego
        pacjenta, co ułatwia zarządzanie wizytami w klinice weterynaryjnej.
      </>,
    ],
  },
  {
    title: "Dla Menedżera Przychodni: Pełny Nadzór nad Działaniem Kliniki",
    image: {
      url: "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vFUcNU5oBYGM0x51Xkr9t2iosJVAzI8RjdTOb",
      alt: "Panel administratora/menedżera systemu BookApp",
    },
    features: [
      <>
        Zarządza wszystkimi lekarzami i oferowanymi usługami (np. szczepienia,
        konsultacje, zabiegi) w ramach systemu rezerwacji dla przychodni
        weterynaryjnej.
      </>,
      <>
        Ma kompleksowy podgląd całego harmonogramu kliniki w jednym centralnym
        kalendarzu.
      </>,
      <>
        Analizuje statystyki: obroty, efektywność poszczególnych lekarzy i
        źródła pozyskiwania klientów.
      </>,
      <>
        Konfiguruje automatyczne wiadomości e-mail i SMS, personalizując
        komunikację z klientami.
      </>,
    ],
  },
];
function HowItWorksSection() {
  return (
    <>
      <SectionHeader
        title="BookApp w Działaniu: Prosta i Intuicyjna Rezerwacja Wizyt Online dla Każdego"
        className="mx-auto mb-12 max-w-4xl md:mb-24"
      />
      <div className="space-y-12 md:space-y-24">
        {howItWorksData.map(({ title, image, features }, i) => (
          <div
            key={title}
            className="grid items-center gap-y-12 md:gap-x-24 lg:grid-cols-2"
          >
            <div
              className={cn({
                "md:order-last": i === 1,
              })}
            >
              <H3 className="mb-6 md:mb-12">{title}</H3>
              <div className="space-y-4 md:space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="grid aspect-square min-w-8 place-items-center rounded-full bg-cyan-100 text-xl font-bold text-cyan-800">
                      {index + 1}
                    </div>
                    <Text>{feature}</Text>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={image.url}
                alt={image.alt}
                width={700}
                height={500}
                className="rounded-2xl object-cover shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function CtaSection() {
  return (
    <>
      <SectionHeader
        title="Gotowy, aby Twoja Przychodnia Weterynaryjna Działała Wydajniej?"
        subtitle="Nie trać więcej czasu na ręczne zarządzanie wizytami. Zobacz, jak
        oprogramowanie do rezerwacji BookApp może usprawnić Twoją codzienną
        pracę i pozwolić Ci skupić się na tym, co najważniejsze – zdrowiu
        zwierząt."
      />
      <AccessibleLink
        href="/book-app/weterynarze#form"
        className="w-full md:w-min"
        aria-label="Przejdź do demo"
      >
        <GradientButton size="default" outline>
          <CalendarIcon className="mr-2 h-5 w-5 text-accent-cyan max-[380px]:hidden" />
          Umów darmową prezentację online
        </GradientButton>
      </AccessibleLink>
    </>
  );
}
