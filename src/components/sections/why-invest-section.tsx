import { CardWrapper } from "@/components/card-wrapper";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { MotionWrapper } from "@/components/motion-wrapper";
import { H2, H3, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { AlarmClockCheck, BriefcaseBusiness, Search } from "lucide-react";

export function WhyInvestSection() {
  return (
    <section>
      <MaxWidthWrapper className="flex flex-col items-center gap-y-8 py-16 md:gap-y-14 md:py-20">
        <H2 className="w-full max-w-3xl">
          Dlaczego warto zainwestować w profesjonalną stronę?
        </H2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cardData.map(({ id, icon: Icon, title, text, styles }, i) => (
            <MotionWrapper
              key={id}
              transition={{ duration: 0.3, delay: i * 0.2 }}
            >
              <CardItem icon={Icon} title={title} text={text} styles={styles} />
            </MotionWrapper>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

const cardData = [
  {
    id: 1,
    icon: Search,
    title: "Zwiekszenie widoczności",
    text: "Twoja firma będzie łatwiej znajdowana przez potencjalnych klientów w wyszukiwarkach, co oznacza więcej zapytań i więcej sprzedaży.",
    styles: "bg-accent-lime",
  },
  {
    id: 2,
    icon: AlarmClockCheck,
    title: "Dostepnosc 24/7",
    text: "Strona internetowa działa non stop, co oznacza, że klienci mogły dowiedzieć się o Twojej ofercie nawet gdy Ty odpoczywasz. To jak posiadanie sklepu otwartego przez całą dobę.",
    styles: "bg-accent-cyan",
  },
  {
    id: 3,
    icon: BriefcaseBusiness,
    title: "Profesjonalny wizerunek",
    text: "Strona internetowa daje wrażenie profesjonalizmu i rzetelności, co zbuduje zaufanie wśród Twoich klientów i pozwoli wyrzeć się na tle konkurencji.",
    styles: "bg-accent-emerald",
  },
];

function CardItem({
  title,
  icon: Icon,
  text,
  styles,
}: Omit<(typeof cardData)[number], "id">) {
  return (
    <CardWrapper className="h-full max-w-[470px]">
      <div className="mb-2 flex items-center gap-4 md:flex-col md:items-start">
        <div className={cn("rounded-full p-3 md:rounded-2xl", styles)}>
          <Icon className="min-h-6 min-w-6 stroke-background dark:opacity-80 md:min-h-8 md:min-w-8" />
        </div>
        <H3>{title}</H3>
      </div>
      <Text>{text}</Text>
    </CardWrapper>
  );
}
