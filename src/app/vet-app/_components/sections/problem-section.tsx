import { Card, CardContent } from "@/components/ui/card";
import {
  Clock10Icon,
  DatabaseIcon,
  PhoneIcon,
  StethoscopeIcon,
  TargetIcon,
} from "lucide-react";

export function ProblemSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl text-center">
          <div className="relative mx-auto mb-12 max-w-4xl">
            <StethoscopeIcon className="absolute -left-20 -top-4 hidden h-16 w-16 text-accent-emerald md:block" />
            <h2 className="text-3xl font-bold lg:text-4xl">
              Twoja przychodnia ma potencjał, ale tracisz cenny czas na ręczne
              zarządzanie wizytami?
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-start text-2xl font-semibold">Masz dość:</p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-accent-cyan bg-transparent">
                <CardContent className="p-6 text-center">
                  <PhoneIcon className="mx-auto mb-4 h-8 w-8 text-accent-cyan" />
                  <p>
                    Niekończących się telefonów z pytaniami o terminy w
                    godzinach pracy?
                  </p>
                </CardContent>
              </Card>
              <Card className="border-accent-green bg-transparent">
                <CardContent className="p-6 text-center">
                  <DatabaseIcon className="mx-auto mb-4 h-8 w-8 border-accent-green text-accent-green" />
                  <p>
                    Chaotycznych zapisów na kartkach lub w przestarzałych
                    kalendarzach?
                  </p>
                </CardContent>
              </Card>
              <Card className="border-accent-green bg-transparent">
                <CardContent className="p-6 text-center">
                  <Clock10Icon className="mx-auto mb-4 h-8 w-8 border-accent-green text-accent-green" />
                  <p>
                    Zapominających o wizytach klientów, którzy nie dostają
                    przypomnień?
                  </p>
                </CardContent>
              </Card>
              <Card className="border-accent-lime bg-transparent">
                <CardContent className="p-6 text-center">
                  <TargetIcon className="mx-auto mb-4 h-8 w-8 border-accent-lime text-accent-lime" />
                  <p>
                    Braku widoczności online, przez co nowi pacjenci trafiają do
                    konkurencji?
                  </p>
                </CardContent>
              </Card>
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
