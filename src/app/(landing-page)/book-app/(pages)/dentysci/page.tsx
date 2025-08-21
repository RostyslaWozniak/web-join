import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  PhoneIcon,
  RocketIcon,
  TargetIcon,
  AlarmClockCheckIcon,
  ZapIcon,
  UserCheckIcon,
  UsersIcon,
  ChartNoAxesCombinedIcon,
  SearchIcon,
  BellIcon,
  ShieldCheckIcon,
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
import { PricingSection } from "@/components/sections/pricing-section";
import {
  AppleIOIcon,
  GoogleCalendarIcon,
  GoogleMeetsIcon,
  MasterCardIcon,
  PayPalIcon,
  StripeIcon,
} from "@/components/icons/brands-icons";
import { MotionWrapper } from "@/components/motion-wrapper";

export default function VeterinaryLanding() {
  return (
    <>
      <SectionWrapper paddingBlock="none">
        <HeroSection />
      </SectionWrapper>

      <SectionWrapper id="dla-czego">
        <MaxWidthWrapper>
          <SolutionsSection />
        </MaxWidthWrapper>
      </SectionWrapper>

      <SectionWrapper paddingBlock="lg" className="bg-card-gradient">
        <MaxWidthWrapper size="sm">
          <IntegrationsSection />
        </MaxWidthWrapper>
      </SectionWrapper>

      <SectionWrapper id="funkcje">
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
          <PricingSection
            title="Elastyczny Cennik BookApp – Dopasowany do Potrzeb Twojej Przychodni Stomatologicznej"
            pricing={dentistPricing}
          />
        </MaxWidthWrapper>
      </SectionWrapper>

      <SectionWrapper className="relative" id="form">
        <MaxWidthWrapper size="sm" className="relative z-10">
          <SectionHeader
            title="Czy jesteś gotowy na rewolucję w Umawianiu Wizyt w Twoim Gabinecie Stomatologicznym?"
            subtitle="Program do umawiania wizyt dla dentystów czeka, aby odciążyć Twój zespół. Nie zwlekaj, zrób pierwszy krok w stronę efektywniejszej pracy i większej liczby zadowolonych pacjentów."
            className="mx-auto max-w-2xl"
          />
          <div>
            <CtaForm typeOfProject="rezerwacji wizyt dla dentystów online BookApp" />
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
    <GridBackground className="py-8 xl:py-12">
      <MaxWidthWrapper>
        <div className="relative grid items-center gap-8 lg:gap-12">
          <div className="mx-auto flex max-w-3xl flex-col items-start sm:mb-4 sm:items-center lg:max-w-7xl">
            <MotionWrapper>
              <Badge className="mb-3 rounded-full bg-card-gradient text-foreground md:mb-6">
                Nowoczesne rozwiązania dla dentystów
              </Badge>
            </MotionWrapper>

            <MotionWrapper>
              <H1 className="mb-3 font-bold text-foreground md:mb-6 md:text-center">
                System rezerwacji online dla Twojego{" "}
                <br className="hidden md:block" />
                <span className="text-emerald-500 brightness-[0.95]">
                  Gabinetu Stomatologicznego
                </span>
                <br />– Zyskaj Czas i Pacjentów
              </H1>
            </MotionWrapper>
            <MotionWrapper>
              <Text
                variant="muted"
                size="subtitle"
                className="max-w-3xl md:text-center"
              >
                Nowoczesny system rezerwacji wizyt BookApp w połączeniu z
                profesjonalną stroną internetową to wsparcie 24/7 dla dentystów.
                Zautomatyzuj umawianie wizyt i zwiększ widoczność w Google.
              </Text>
            </MotionWrapper>
            {/* <Benefits /> */}
            <MotionWrapper className="w-full sm:w-auto">
              <AccessibleLink
                href="/book-app/weterynarze#form"
                aria-label="Umów darmową prezentację"
                className="mt-4 sm:mx-0 md:mt-8"
              >
                <GradientButton>
                  <CalendarIcon className="mr-2" />
                  Umów prezentację online
                </GradientButton>
              </AccessibleLink>
            </MotionWrapper>
          </div>

          {/* Main placeholder image */}
          <MotionWrapper>
            <div className="pointer-events-none relative mx-auto max-w-3xl rounded-2xl">
              <Image
                priority
                src="https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vcrmwkf42Ceq1RWILG3fczmyvMhgQnO4VHDwx"
                alt="VetApp Dashboard Preview"
                className="w-full rounded-lg object-cover lg:scale-110"
                width="900"
                height="900"
              />
            </div>
          </MotionWrapper>
        </div>
      </MaxWidthWrapper>
    </GridBackground>
  );
}

function SolutionsSection() {
  return (
    <>
      <SectionHeader
        title="Jak BookApp Rozwiązuje Problemy Twojego Gabinetu Stomatologicznego?"
        subtitle="Poznaj kluczowe rozwiązania, które usprawnią zarządzanie terminami wizyt u stomatologa i pozwolą Tobie oraz Twojemu zespołowi skupić się na zapewnianiu najwyższej jakości opieki stomatologicznej."
        className="mx-auto mb-12 max-w-4xl md:mb-24"
      />
      <div className="mb-6 grid gap-4 sm:grid-cols-2 md:mb-12 md:grid-cols-3 md:gap-6">
        {[
          {
            id: "1",
            title: "Automatyczna rezerwacja wizyt 24/7",
            description:
              "Dzięki systemowi rezerwacji wizyt online, Twoi klienci umawiają wizyty samodzielnie, 24/7, z dowolnego miejsca. Recepcja jest odciążona, a personel może skupić się na pacjentach.",
            icon: PhoneIcon,
            iconClassName: "bg-orange-100 text-orange-600 border-orange-600",
          },
          {
            id: "2",
            title: "Inteligentny kalendarz dentystyczny",
            description:
              "Program do rezerwacji wizyt dla stomatologów eliminuje nakładanie się terminów i zapewnia przejrzysty harmonogram dla każdego lekarza.",
            icon: CalendarIcon,

            iconClassName: "bg-purple-100 text-purple-600 border-purple-600",
          },
          {
            id: "3",
            title: "Skuteczne przypomnienia dla pacjentów",
            description:
              "Automatyczne powiadomienia SMS/E-mail minimalizują nieobecności na wizytach i gwarantują pełne wykorzystanie każdego slotu w Twojej przychodni dentystycznej.",
            icon: AlarmClockCheckIcon,

            iconClassName: "bg-indigo-100 text-indigo-600   border-indigo-600",
          },
          {
            id: "4",
            title: " Błyskawiczna rezerwacja bez czekania",
            description:
              "Pacjenci umawiają się natychmiastowo, ceniąc wygodę i dyskrecję, co poprawia ich pierwsze wrażenie o Twojej klinice.",
            icon: ZapIcon,

            iconClassName: "bg-blue-100 text-blue-600 border-blue-600",
          },
          {
            id: "5",
            title: "Wygodny panel pacjenta z historią wizyt",
            description:
              " Dedykowany panel pozwala pacjentom zarządzać swoimi rezerwacjami i przeglądać historię leczenia online.",
            icon: UserCheckIcon,

            iconClassName: "bg-green-100 text-green-600 border-green-600",
          },
          {
            id: "6",
            title: "Zwiększona widoczność Twojej kliniki online",
            description:
              "Zoptymalizowana pod SEO strona internetowa z BookApp oraz prośby o opinie wzmacniają Twoje lokalne SEO, przyciągając nowych pacjentów szukających lekarza dentysty.",
            icon: RocketIcon,
            iconClassName: "bg-pink-100 text-pink-600 border-pink-600",
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
      <div className="flex flex-wrap justify-center gap-4 md:gap-10">
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
        title="BookApp – Dodatkowe funkcje,  które Napędzą Wzrost i Efektywność Twojego Gabinetu Stomatologicznego"
        subtitle="Odkryj unikalne funkcje oprogramowania do rezerwacji wizyt dla dentystów BookApp, które wykraczają poza standard, budując profesjonalny wizerunek i automatyzując kluczowe procesy w Twojej klinice."
        className="mx-auto mb-12 max-w-4xl md:mb-24"
      />

      <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {[
          {
            id: "1",
            title: "Optymalizacja wizytówki Google dla stomatologów",
            description: (
              <>
                System automatycznie prosi pacjentów o opinie po wizycie, co
                wzmacnia Twój wizerunek i <b>lokalne SEO</b> przychodni
              </>
            ),
            icon: SearchIcon,
            iconClassName: "bg-green-100 text-green-600 border-green-600",
          },
          {
            id: "2",
            title: "Programy lojalnościowe i cykliczne kontrole",
            description: (
              <>
                Możliwość ustawiania <b>przypomnień o cyklicznych wizytach </b>
                kontrolnych czy higienizacji, budując długotrwałe relacje z
                pacjentami
              </>
            ),
            icon: BellIcon,
            iconClassName: "bg-amber-100 text-amber-600 border-amber-600",
          },

          {
            id: "3",
            title: "Szczegółowe statystyki i raporty",
            description: (
              <>
                Monitoruj popularność usług, efektywność lekarzy i źródła
                pozyskiwania pacjentów, aby podejmować świadome decyzje
                strategiczne dla swojej kliniki.
              </>
            ),
            icon: ChartNoAxesCombinedIcon,
            iconClassName: "bg-orange-100 text-orange-600 border-orange-600",
          },
          {
            id: "4",
            title: "Inteligentne dopasowanie terminów do specjalistów",
            description: (
              <>
                <b>Program do zarządzania kliniką stomatologiczną </b>
                automatycznie optymalizuje grafik, dopasowując terminy do
                specjalizacji dentysty (np. ortodonta, chirurg) i czasu trwania
                zabiegu.
              </>
            ),
            icon: TargetIcon,
            iconClassName: "bg-purple-100 text-purple-600 border-purple-600",
          },
          {
            id: "5",
            title: "Bezpieczne płatności online za wizyty",
            description: (
              <>
                Pacjenci mogą od razu opłacać wizyty, znacząco zmniejszając
                <b>liczbę odwołanych wizyt lub niepojawienie się klienta</b> i
                usprawniając zarządzanie finansami Twojej przychodni
                dentystycznej.
              </>
            ),
            icon: ShieldCheckIcon,
            iconClassName: "bg-pink-100 text-pink-600 border-pink-600",
          },
          {
            id: "6",
            title: "Wsparcie dla wielu specjalistów",
            description: (
              <>
                System łatwo skaluje się, umożliwiając zarządzanie kalendarzami
                dla dowolnej liczby dentystów, higienistek i asystentów w jednej{" "}
                <b>aplikacji do rezerwacji wizyt u dentysty</b>.
              </>
            ),
            icon: UsersIcon,
            iconClassName: "bg-indigo-100 text-indigo-600 border-indigo-600",
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

const howItWorksData = [
  {
    title: "Dla Pacjenta: Szybkie Umawianie Wizyt u Dentysty",
    image: {
      url: "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vzqYJjdT6QqothpDwSr5YB8LNHEvyWmMIun40",
      alt: "Panel Pacjenta systemu BookApp",
    },
    features: [
      <>
        Wchodzi na dedykowaną stronę Twojej przychodni → wybiera usługę (np.
        przegląd, leczenie, higienizacja) i preferowanego dentystę.
      </>,
      <>
        Rezerwuje termin w przejrzystym <b>kalendarzu online</b> – dostępnym
        24/7 z każdego urządzenia.
      </>,
      <>
        Dostaje automatyczne potwierdzenie i przypomnienie SMS/e-mail 24h przed
        wizytą.
      </>,
      <>
        Po wizycie otrzymuje prośbę o opinię w Google i możliwość rezerwacji
        kolejnego terminu, budując zaufanie do Twojej kliniki.
      </>,
    ],
  },
  {
    title: "Dla Lekarza Dentysty: Pełna Kontrola nad Grafikiem Wizyt",
    image: {
      url: "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vfN9aQv3AcEKai1sNROF2CSTYBeHqmWk4G3vg",
      alt: "Panel Dentysty systemu BookApp",
    },
    features: [
      <>
        Loguje się do intuicyjnego panelu <b>aplikacji dla dentysty</b> → widzi
        swój indywidualny kalendarz spotkań i zabiegów.
      </>,
      <>
        Może łatwo ustawić dostępność, zaplanować urlopy czy przerwy w pracy,
        zapewniając <b>optymalny grafik pracy dentysty</b>.
      </>,
      <>Dostaje natychmiastowe powiadomienia o nowych rezerwacjach.</>,
      <>
        Ma szybki dostęp do danych kontaktowych i historii leczenia każdego
        pacjenta, co ułatwia zarządzanie wizytami w przychodni stomatologicznej.
      </>,
    ],
  },
  {
    title:
      "Dla Menedżera Przychodni: Pełny Nadzór nad Działaniem Kliniki Stomatologicznej",
    image: {
      url: "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5veCalen2JPzipwlqtrkLVBCHund47cRNXgFxS",

      alt: "Panel administratora/menedżera systemu BookApp",
    },
    features: [
      <>
        Zarządza wszystkimi dentystami i oferowanymi usługami w ramach{" "}
        <b>systemu rezerwacji dla przychodni stomatologicznych</b>.
      </>,
      <>
        Ma kompleksowy podgląd całego harmonogramu kliniki w jednym centralnym
        kalendarzu.
      </>,
      <>
        Analizuje statystyki: obroty, efektywność poszczególnych specjalistów i
        źródła pozyskiwania pacjentów.
      </>,
      <>
        Konfiguruje automatyczne wiadomości e-mail i SMS, personalizując
        komunikację z pacjentami.
      </>,
    ],
  },
];
function HowItWorksSection() {
  return (
    <>
      <SectionHeader
        title="BookApp w Działaniu: Prosta i Intuicyjna Rezerwacja Wizyt u Stomatologa"
        className="mx-auto mb-12 max-w-4xl md:mb-24"
      />
      <div className="space-y-12">
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
                width={1000}
                height={650}
                className={cn("relative", {
                  "rounded-lg shadow-sm": i !== 0,
                })}
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
        title="Gotowy, aby Twój Gabinet Stomatologiczny Działał Wydajniej i Nowocześniej?"
        subtitle="Nie trać więcej czasu na ręczne zarządzanie wizytami. Zobacz, jak oprogramowanie do rezerwacji BookApp może usprawnić codzienną pracę Twojej przychodni i pozwolić Ci skupić się na zapewnianiu zdrowego uśmiechu pacjentów."
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

const dentistPricing = [
  {
    id: 1,
    name: "basic",
    price: 3900,
    pricePerMonth: 249,
    benefits: [
      "Profesjonalna strona główna z nowoczesnym designem",
      "System rezerwacji wizyt dla jednego dentysty",
      "Intuicyjny terminarz dostępny online 24/7",
      "Automatyczne potwierdzenia wizyt (SMS/e-mail)",
      "Podstawowa optymalizacja SEO (widoczność w Google)",
      "Możliwość dalszej rozbudowy w przyszłości",
    ],
    styles: "bg-emerald-100 text-emerald-800",
  },
  {
    id: 2,
    name: "standard",
    price: 5900,
    pricePerMonth: 349,
    benefits: [
      "Wszystko z Basic",
      "Rozbudowana strona z podstronami (o nas, usługi, kontakt, blog, każda usługa osobno — lepsze SEO)",
      "Możliwość zarządzania grafikami dla 2–4 stomatologów",
      "Panel zarządzania dla właściciela lub menadżera kliniki dentystycznej",
      "Osobne widoki kalendarza dla każdego dentysty",
      "Statystyki — ile wizyt dziennie, tygodniowo, miesięcznie",
      "Regularne wsparcie i aktualizacje",
      "Przygotowanie do dalszej rozbudowy (np. płatności online, CMS itd.)",
    ],
    styles: "bg-blue-100 text-blue-800",
    isMostPopular: true,
  },
  {
    id: 3,
    name: "premium",
    price: 9900,
    pricePerMonth: 499,
    benefits: [
      "Wszystko z pakietu Standard",
      "Obsługa dowolnej liczby stomatologów",
      "Możliwość dodania płatności online i planów subskrypcyjnych",
      "Strona w wielu językach (jeśli potrzebna)",
      "Stała współpraca w ramach rozwoju i strategii online",
      "Priorytetowe wsparcie — szybka reakcja na potrzeby i zmiany",
      "Regularne konsultacje i analizy rozwoju strony",
    ],
    styles: "bg-purple-100 text-purple-800",
  },
];
