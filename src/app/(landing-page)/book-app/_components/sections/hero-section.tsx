import { GridBackground } from "@/components/grid-background";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Badge } from "@/components/ui/badge";
import { GradientButton } from "@/components/ui/gradient-button";
import { CalendarIcon, CheckCircleIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function BookAppHeroSection() {
  return (
    <section>
      <GridBackground className="py-6 md:py-28">
        <MaxWidthWrapper>
          <div className="relative grid items-center gap-8 lg:gap-12 xl:grid-cols-2">
            {/* Left side - Text content */}
            <div className="mx-auto flex max-w-3xl flex-col items-start sm:items-center xl:items-start">
              <Badge className="mb-4 rounded-full bg-accent-emerald text-emerald-800">
                Twoja strona. Twój system. Twoi klienci.
              </Badge>
              <h1 className="mb-6 max-w-2xl text-4xl font-bold leading-tight text-foreground sm:text-center sm:text-5xl xl:text-start">
                <div>
                  Zautomatyzuj rezerwacje
                  <br className="hidden sm:block" /> i{" "}
                  <span className="bg-primary-gradient bg-clip-text text-transparent">
                    zdobywaj klientów{" "}
                  </span>
                  nawet gdy śpisz
                </div>
              </h1>

              <p className="mb-4 text-lg leading-relaxed text-muted-foreground sm:text-center sm:text-xl xl:text-start">
                BookApp to nowoczesna strona internetowa z wbudowanym systemem
                rezerwacji, stworzona specjalnie dla lokalnych firm usługowych.
              </p>
              <div className="my-6 flex flex-col flex-wrap justify-start gap-4 text-sm sm:flex-row lg:my-8">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-600" />
                  <span>Mniej telefonów</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-600" />
                  <span>Więcej klientów</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-600" />
                  <span>Więcej czasu dla zespołu</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="https://vet-app-demo.vercel.app/"
                  target="_blank"
                  className="w-full md:w-auto"
                >
                  <GradientButton size="default">
                    <ExternalLinkIcon className="mr-2 h-5 w-5" />
                    Zobacz demo
                  </GradientButton>
                </Link>
                <Link
                  href="/join/service-selection?service=vet-app"
                  className="w-full md:w-auto"
                >
                  <GradientButton
                    size="default"
                    outline
                    textSize="tracking-tight text-base [@media(min-width:390px)]:tracking-normal [@media(min-width:390px)]:text-lg"
                  >
                    <CalendarIcon className="mr-2 h-5 w-5 text-accent-cyan" />
                    Umów się na bezpłatną prezentację
                  </GradientButton>
                </Link>
              </div>
            </div>

            {/* Main placeholder image */}
            <div className="pointer-events-none relative order-first hidden rounded-2xl sm:order-last xl:block">
              <Image
                priority
                src="/images/vet-app/vet-app-hero-img.png"
                alt="VetApp Dashboard Preview"
                className="w-full rounded-lg object-cover lg:scale-110"
                width="1200"
                height="775"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </GridBackground>
    </section>
  );
}
