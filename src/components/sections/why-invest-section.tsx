import { CardWrapper } from "@/components/card-wrapper";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { MotionWrapper } from "@/components/motion-wrapper";
import { H2, H3, Text } from "@/components/ui/typography";
import { AlarmClockCheck, BriefcaseBusiness, Search } from "lucide-react";

export function WhyInvestSection() {
  return (
    <section>
      <MaxWidthWrapper className="flex flex-col items-center gap-y-8 py-16 md:gap-y-14 md:py-20">
        <H2 className="w-full max-w-3xl">
          Dlaczego warto zainwestować w profesjonalną stronę?
        </H2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <MotionWrapper transition={{ duration: 0.3, delay: 0 }}>
            <CardWrapper className="max-w-[470px]">
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <div className="rounded-full bg-accent-lime p-3 md:rounded-2xl">
                  <Search className="min-h-8 min-w-8 stroke-background dark:opacity-80 md:min-h-12 md:min-w-12" />
                </div>
                <H3>Zwiększenie widoczności </H3>
              </div>
              <Text>
                Twoja firma będzie łatwiej znajdowana przez potencjalnych
                klientów w wyszukiwarkach, co oznacza więcej zapytań i więcej
                sprzedaży.
              </Text>
            </CardWrapper>
          </MotionWrapper>
          <MotionWrapper transition={{ duration: 0.3, delay: 0.2 }}>
            <CardWrapper className="max-w-[470px]">
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <div className="rounded-full bg-accent-cyan p-3 md:rounded-2xl">
                  <AlarmClockCheck className="min-h-8 min-w-8 stroke-background dark:opacity-80 md:min-h-12 md:min-w-12" />
                </div>
                <H3>Dostępność 24/7</H3>
              </div>
              <Text>
                Strona internetowa działa non stop, co oznacza, że klienci mogą
                dowiedzieć się o Twojej ofercie, nawet gdy Ty odpoczywasz. To
                jak posiadanie sklepu otwartego przez całą dobę.
              </Text>
            </CardWrapper>
          </MotionWrapper>
          <MotionWrapper transition={{ duration: 0.3, delay: 0.4 }}>
            <CardWrapper className="max-w-[470px]">
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <div className="rounded-full bg-accent-emerald p-3 md:rounded-2xl">
                  <BriefcaseBusiness className="min-h-8 min-w-8 stroke-background dark:opacity-80 md:min-h-12 md:min-w-12" />
                </div>
                <H3>Profesjonalny wizerunek</H3>
              </div>
              <Text>
                Strona internetowa daje wrażenie profesjonalizmu i rzetelności,
                co zbuduje zaufanie wśród Twoich klientów i pozwoli wyróżnić się
                na tle konkurencji.
              </Text>
            </CardWrapper>
          </MotionWrapper>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
