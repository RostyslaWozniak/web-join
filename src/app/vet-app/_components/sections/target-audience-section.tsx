import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";

export function TargetAudienceSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
            👨‍⚕️ Czy to rozwiązanie dla Twojej przychodni?
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-transparent shadow-lg dark:border-accent-cyan">
              <CardHeader>
                <CardTitle className="text-xl">Tak, jeśli masz dość:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="flex h-[1lh] items-center">
                      <ChevronRightIcon className="h-4 w-4 text-emerald-500" />
                    </span>
                    Ciągłych telefonów** i ręcznego umawiania wizyt, które
                    pochłaniają czas Twojego personelu.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-[1lh] items-center">
                      <ChevronRightIcon className="h-4 w-4 text-emerald-500" />
                    </span>
                    Problemów z pozyskiwaniem nowych klientów online.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-[1lh] items-center">
                      <ChevronRightIcon className="h-4 w-4 text-emerald-500" />
                    </span>
                    Przestarzałych rozwiązań, które nie nadążają za potrzebami
                    współczesnych pacjentów.
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-transparent shadow-lg dark:border-accent-cyan">
              <CardHeader>
                <CardTitle className="text-xl">Tak, jeśli chcesz:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="flex h-[1lh] items-center">
                      <ChevronRightIcon className="h-4 w-4 text-emerald-500" />
                    </span>
                    Zacząć pozyskiwać nowych pacjentów 24 godziny na dobę, 7 dni
                    w tygodniu.**
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-[1lh] items-center">
                      <ChevronRightIcon className="h-4 w-4 text-emerald-500" />
                    </span>
                    Wyglądać profesjonalnie i nowocześnie w Internecie, budując
                    zaufanie.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-[1lh] items-center">
                      <ChevronRightIcon className="h-4 w-4 text-emerald-500" />
                    </span>
                    Zwiększyć liczbę powracających klientów i ich lojalność
                    dzięki wygodnym rezerwacjom i przypomnieniom.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-[1lh] items-center">
                      <ChevronRightIcon className="h-4 w-4 text-emerald-500" />
                    </span>
                    Zoptymalizować pracę swojej przychodni i myśleć
                    długoterminowo o jej dynamicznym rozwoju.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
