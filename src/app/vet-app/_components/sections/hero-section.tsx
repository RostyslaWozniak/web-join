import { GridBackground } from "@/components/grid-background";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { GradientButton } from "@/components/ui/gradient-button";
import { CalendarIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function VetAppHeroSection() {
  return (
    <section>
      <GridBackground className="py-12 md:py-28">
        <MaxWidthWrapper>
          <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <h1 className="text-4xl font-bold leading-tight text-foreground lg:text-5xl xl:text-6xl">
                <div>
                  Zarządzaj wizytami w swojej{" "}
                  <span className="bg-primary-gradient bg-clip-text text-transparent">
                    przychodni weterynaryjnej
                  </span>
                </div>
              </h1>
              <p className="text-xl leading-relaxed text-muted-foreground">
                Dedykowany system rezerwacji + nowoczesna strona internetowa dla
                Twojej przychodni. Więcej czasu dla pacjentów, mniej bałaganu w
                kalendarzu.
              </p>
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
            <div className="pointer-events-none relative order-first rounded-2xl sm:order-last">
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
