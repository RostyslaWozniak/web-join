import { AnimatedCard } from "@/components/animated-card";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { SectionSeparator } from "@/components/ui/section-separator";
import { H1, H2, H3, Text } from "@/components/ui/typography";
import {
  AlarmClockCheck,
  BriefcaseBusiness,
  Code,
  Globe,
  PlayCircle,
  Search,
  Sparkles,
  ZapIcon,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <section>
        <MaxWidthWrapper className="flex min-h-[90vh] flex-col items-center justify-center gap-y-12 py-8 md:py-16">
          <div className="flex flex-grow flex-col items-center justify-center gap-y-8 md:flex-none">
            <div className="space-y-22 grid place-items-center gap-y-2">
              <H1 className="max-w-7xl text-start text-foreground md:text-center">
                Stwórzmy stronę{" "}
                <span className="hidden md:inline">internetową</span>, która
                rozpędzi{" "}
                <span className="bg-primary-gradient bg-clip-text text-transparent">
                  Twój biznes
                </span>
              </H1>
              <Text
                size="subtitle"
                className="hidden max-w-3xl md:inline md:text-center"
              >
                Ty rozwijasz biznes, a ja tworzę stronę, która go wspiera.
                Zadbam o wszystkie aspekty techniczne, żebyś mógł skupić się na
                tym, co ważne.
              </Text>
            </div>
            <div className="flex w-full flex-grow flex-col justify-center gap-6 md:hidden">
              <div className="flex items-center gap-x-4 text-nowrap text-2xl">
                <ZapIcon className="stroke-accent-yellow min-h-8 min-w-8" />{" "}
                Szybkie strony
              </div>

              <div className="flex items-center gap-x-4 text-nowrap text-2xl">
                <Sparkles className="stroke-primary-green min-h-8 min-w-8" />{" "}
                Modern UX
              </div>
              <div className="flex items-center gap-x-4 text-nowrap text-2xl">
                <Globe className="stroke-accent-green min-h-8 min-w-8" />{" "}
                Globalny zasięg
              </div>
              <div className="flex items-center gap-x-4 text-nowrap text-2xl">
                <Code className="stroke-primary-cyan min-h-8 min-w-8" />
                Clean code
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-end gap-4 md:flex-row md:justify-center">
            <Button
              size="lg"
              className="bg-primary-gradient group relative w-full md:w-auto"
            >
              <div className="shadow-primary-cyan absolute inset-0.5 rounded-full bg-background group-hover:shadow-lg" />
              <span className="bg-primary-gradient relative bg-clip-text text-2xl text-transparent">
                Portfolio
              </span>
            </Button>

            <Button
              size="lg"
              className="bg-primary-gradient group w-full md:w-auto"
            >
              <PlayCircle className="relative min-h-8 min-w-8 stroke-background duration-300 group-hover:-translate-x-0.5 group-hover:scale-110" />
              <span className="relative text-2xl text-background duration-300 group-hover:translate-x-0.5 group-hover:scale-110">
                Join
              </span>
            </Button>
          </div>

          <div className="hidden flex-col items-center gap-x-14 pt-20 md:flex md:flex-row">
            <div className="flex items-center gap-x-2 text-xl">
              <ZapIcon className="stroke-accent-yellow" /> Szybkie strony
            </div>
            <div className="flex items-center gap-x-2 text-xl">
              <Code className="stroke-primary-cyan" />
              Clean code
            </div>
            <div className="flex items-center gap-x-2 text-xl">
              <Sparkles className="stroke-primary-green" /> Modern UX
            </div>
            <div className="flex items-center gap-x-2 text-xl">
              <Globe className="stroke-accent-green" /> Globalny zasięg
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* SEPARATOR */}
      <SectionSeparator />
      <section>
        <MaxWidthWrapper className="flex flex-col items-center gap-y-8 py-16 md:gap-y-14 md:py-20">
          <H2 className="w-full max-w-3xl text-start md:text-center">
            Dlaczego warto zainwestować w profesjonalną stronę?
          </H2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatedCard className="h-full" delay={0}>
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <div className="bg-accent-yellow rounded-full p-3 md:rounded-2xl">
                  <Search className="min-h-8 min-w-8 stroke-white md:min-h-12 md:min-w-12" />
                </div>
                <H3>Zwiększenie widoczności </H3>
              </div>
              <Text>
                Twoja firma będzie łatwiej znajdowana przez potencjalnych
                klientów w wyszukiwarkach, co oznacza więcej zapytań i więcej
                sprzedaży.
              </Text>
            </AnimatedCard>
            <AnimatedCard className="h-full" delay={0.2}>
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <div className="bg-primary-cyan rounded-full p-3 md:rounded-2xl">
                  <AlarmClockCheck className="min-h-8 min-w-8 stroke-white md:min-h-12 md:min-w-12" />
                </div>
                <H3>Dostępność 24/7</H3>
              </div>
              <Text>
                Strona internetowa działa non-stop, co oznacza, że klienci mogą
                dowiedzieć się o Twojej ofercie, nawet gdy Ty odpoczywasz. To
                jak posiadanie sklepu otwartego przez całą dobę.
              </Text>
            </AnimatedCard>
            <AnimatedCard className="h-full" delay={0.4}>
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <div className="bg-accent-green rounded-full p-3 md:rounded-2xl">
                  <BriefcaseBusiness className="min-h-8 min-w-8 stroke-white md:min-h-12 md:min-w-12" />
                </div>
                <H3>Profesjonalny wizerunek</H3>
              </div>
              <Text>
                Strona internetowa daje wrażenie profesjonalizmu i rzetelności,
                co zbuduje zaufanie wśród Twoich klientów i pozwoli wyróżnić się
                na tle konkurencji.
              </Text>
            </AnimatedCard>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* SEPARATOR */}
      <SectionSeparator />
      <section>
        <MaxWidthWrapper>
          <div className="min-h-screen"></div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
