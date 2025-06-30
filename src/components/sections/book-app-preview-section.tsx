import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowUpRight,
  CheckIcon,
  ClockIcon,
  SearchIcon,
  StarIcon,
} from "lucide-react";
import Link from "next/link";
import { GradientButton } from "../ui/gradient-button";
import { Badge } from "../ui/badge";
import { MotionWrapper } from "../motion-wrapper";

export function BookAppPreviewSection() {
  return (
    <section className="bg-gradient-to-br px-4 pb-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <MotionWrapper>
            <Badge className="mb-4 rounded-full bg-card-gradient px-4 py-2 text-sm font-medium text-foreground">
              ✨ Nowość!
            </Badge>
          </MotionWrapper>

          <MotionWrapper>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              <span className="bg-primary-gradient bg-clip-text text-transparent">
                BookApp
              </span>{" "}
              – Twoje wizyty. <br /> Twój system. Twoja marka.
            </h2>
          </MotionWrapper>

          <MotionWrapper>
            <p className="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-gray-600">
              Masz firmę, która pracuje na wizytach? Fryzjer? Weterynarz?
              Kosmetyczka? Dentysta?
              <br />
              Poznaj BookApp – nowoczesną stronę internetową z systemem
              rezerwacji online, zaprojektowaną specjalnie dla lokalnych firm
              takich jak Twoja.
            </p>
          </MotionWrapper>
        </div>
        <MotionWrapper>
          <Card className="mb-12 border-0 bg-white/80 shadow-xl backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">
                        Klienci rezerwują wizyty 24/7
                      </h3>
                      <p className="text-sm text-gray-600">
                        Twoi klienci mogą zarezerwować wizytę o każdej porze
                        dnia i nocy
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <ClockIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">
                        Mniej telefonów, więcej czasu
                      </h3>
                      <p className="text-sm text-gray-600">
                        Automatyzacja rezerwacji oznacza więcej czasu na to, co
                        robisz najlepiej
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                      <SearchIcon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">
                        Większa widoczność w Google
                      </h3>
                      <p className="text-sm text-gray-600">
                        Profesjonalna strona internetowa pomoże Ci być lepiej
                        widocznym online
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                      <StarIcon className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">
                        Twoja własna marka, nie cudza platforma
                      </h3>
                      <p className="text-sm text-gray-600">
                        Buduj swoją markę, a nie promuj konkurencyjne platformy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>

        <div className="text-center">
          <Link href="/book-app" className="w-full md:w-auto">
            <GradientButton size="default">
              Zobacz więcej <ArrowUpRight className="ml-2 h-4 w-4" />
            </GradientButton>
          </Link>

          <p className="mt-4 text-sm text-gray-500">
            Bezpłatna prezentacja • Bez zobowiązań
          </p>
        </div>
      </div>
    </section>
  );
}
