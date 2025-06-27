import { MotionWrapper } from "@/components/motion-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { H2 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import {
  Clock10Icon,
  DatabaseIcon,
  PhoneIcon,
  SearchIcon,
  TargetIcon,
} from "lucide-react";

const sectionData = [
  {
    id: "1",
    icon: PhoneIcon,
    text: "Niekończących się telefonów z pytaniami o terminy w godzinach pracy?",
    style: "border-accent-cyan text-accent-cyan",
  },
  {
    id: "2",
    icon: DatabaseIcon,
    text: "Chaotycznych zapisów na kartkach lub w przestarzałych kalendarzach?",
    style: "border-accent-green text-accent-green",
  },
  {
    id: "3",
    icon: Clock10Icon,
    text: "Zapominających o wizytach klientów, którzy nie dostają przypomnień?",
    style: "border-accent-lime text-accent-lime",
  },
  {
    id: "4",
    icon: TargetIcon,
    text: "Braku widoczności online, przez co nowi pacjenci trafiają do konkurencji?",
    style: "border-accent-emerald text-accent-emerald",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl text-center">
          <div className="relative mx-auto mb-12 max-w-4xl">
            <SearchIcon className="absolute -left-20 -top-4 hidden h-16 w-16 text-accent-emerald md:block" />
            <H2>
              Twoja firma ma potencjał, ale tracisz cenny czas na ręczne
              zarządzanie wizytami?
            </H2>
          </div>
          <div className="space-y-4">
            <p className="text-start text-2xl font-semibold">Masz dość:</p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {sectionData.map(({ id, icon: Icon, text, style }, i) => (
                <MotionWrapper transition={{ delay: 0.1 * i + 1 }} key={id}>
                  <Card className={cn("bg-transparent", style)}>
                    <CardContent className="p-6 text-center">
                      <Icon className="mx-auto mb-4 h-8 w-8" />
                      <p className="text-foreground">{text}</p>
                    </CardContent>
                  </Card>
                </MotionWrapper>
              ))}
            </div>
          </div>
          <div className="mx-auto max-w-4xl">
            <p className="mt-12 text-xl font-medium text-muted-foreground">
              A może szukasz prostego, intuicyjnego rozwiązania, które odciąży
              Twoją recepcję i przyciągnie nowych klientów, bez konieczności
              zmiany Twojego wewnętrznego systemu zarządzania?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
