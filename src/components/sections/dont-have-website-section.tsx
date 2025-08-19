import { Text } from "../ui/typography";
import { MotionWrapper } from "../motion-wrapper";
import {
  ArrowUpRightIcon,
  Clock10Icon,
  PhoneIcon,
  SparklesIcon,
} from "lucide-react";
import { AccessibleLink } from "../accesible-link";
import { GradientButton } from "../ui/gradient-button";
import { CardItem } from "../card-item";
import { SectionHeader } from "../section-header";

export function DontHaveWebsiteSection() {
  return (
    <>
      <SectionHeader
        title={
          <>
            Nie masz jeszcze strony? <br />
            Pomogę Ci zacząć od zera
          </>
        }
        subtitle="Tworzenie strony internetowej nie musi być trudne. W prostych krokach
          przeprowadzę Cię przez cały proces – bez technicznych komplikacji i
          zbędnych kosztów."
        subtitleClassName="max-w-3xl mx-auto"
      />

      <div className="mb-6 space-y-4 md:mb-12">
        <Text size="subtitle" className="!text-start">
          Jak to wygląda?
        </Text>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dontHaveWebsiteData.map(
            ({ id, title, text, style, icon }, index) => (
              <MotionWrapper
                key={id}
                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                <CardItem
                  key={id}
                  icon={icon}
                  title={title}
                  description={text}
                  iconClassName={style}
                />
              </MotionWrapper>
            ),
          )}
        </div>
      </div>
      <div className="mx-auto max-w-4xl">
        <AccessibleLink href="/kontakt" aria-label="Przejdź do strony kontakt">
          <GradientButton outline>
            Umów bezpłatną konsultację
            <ArrowUpRightIcon className="ml-1 h-4 w-4 text-accent-emerald" />
          </GradientButton>
        </AccessibleLink>
      </div>
    </>
  );
}

const dontHaveWebsiteData = [
  {
    id: "1",
    icon: PhoneIcon,
    title: "Krótka rozmowa",
    text: "W 30 minut opowiesz mi o swoim biznesie – dowiem się, co robisz i czego potrzebujesz.",
    style: "border-accent-cyan text-cyan-600 bg-cyan-100",
  },
  {
    id: "2",
    icon: SparklesIcon,
    title: "Dopasowana propozycja",
    text: "Otrzymasz konkretny projekt strony internetowej dopasowanej do Twoich potrzeb.",
    style: "border-accent-emerald text-emerald-600 bg-emerald-100",
  },
  {
    id: "3",
    icon: Clock10Icon,
    title: "Szybka realizacja",
    text: "Gotową stronę możesz mieć nawet w 14 dni – od projektu po wdrożenie.",
    style: "border-accent-lime text-lime-600 bg-lime-100",
  },
];
