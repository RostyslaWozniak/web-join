import { Card, CardContent } from "@/components/ui/card";
import {
  DatabaseIcon,
  PhoneIcon,
  StethoscopeIcon,
  TargetIcon,
} from "lucide-react";

export function ProblemSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center">
            <StethoscopeIcon className="mr-4 hidden text-accent-emerald md:block md:h-16 md:w-16" />
            <h2 className="text-3xl font-bold lg:text-4xl">
              Twoja przychodnia ma potencjał. Ale zarządzanie wizytami to wciąż
              chaos?
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="border-accent-cyan bg-transparent">
              <CardContent className="p-6 text-center">
                <PhoneIcon className="mx-auto mb-4 h-8 w-8 text-accent-cyan" />
                <p>
                  Telefony w godzinach pracy, zapisy na kartce, klienci
                  zapominający o wizytach?
                </p>
              </CardContent>
            </Card>
            <Card className="border-accent-green bg-transparent">
              <CardContent className="p-6 text-center">
                <DatabaseIcon className="mx-auto mb-4 h-8 w-8 border-accent-green text-accent-green" />
                <p>Brak historii pacjentów w jednym miejscu?</p>
              </CardContent>
            </Card>
            <Card className="border-accent-lime bg-transparent">
              <CardContent className="p-6 text-center">
                <TargetIcon className="mx-auto mb-4 h-8 w-8 border-accent-lime text-accent-lime" />
                <p>
                  A może obecny system jest zbyt skomplikowany albo… nie ma go
                  wcale?
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-12 text-xl font-medium text-muted-foreground">
            Zaprojektowaliśmy VetApp, by rozwiązać dokładnie te problemy.
          </p>
        </div>
      </div>
    </section>
  );
}
