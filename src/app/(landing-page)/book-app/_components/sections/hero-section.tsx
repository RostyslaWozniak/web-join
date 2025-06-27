import { AnimatedText } from "@/components/animations/animated-text";
import { GridBackground } from "@/components/grid-background";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { MotionWrapper } from "@/components/motion-wrapper";
import { Badge } from "@/components/ui/badge";
import { GradientButton } from "@/components/ui/gradient-button";
import { CalendarIcon, CheckCircleIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function BookAppHeroSection() {
  return (
    <section>
      <GridBackground className="py-8 xl:py-12">
        <MaxWidthWrapper>
          <div className="relative grid items-center gap-8 lg:gap-12">
            <div className="mx-auto flex max-w-3xl flex-col items-start sm:mb-4 sm:items-center lg:max-w-4xl">
              <MotionWrapper>
                <TopBadge />
              </MotionWrapper>

              <MotionWrapper>
                <Heading />
              </MotionWrapper>
              <Benefits />
              <MotionWrapper>
                <CTAButtons />
              </MotionWrapper>
            </div>

            {/* Main placeholder image */}
            <MotionWrapper>
              <div className="pointer-events-none relative mx-auto max-w-3xl rounded-2xl">
                <Image
                  priority
                  src="/images/book-app/book-app-hero.png"
                  alt="VetApp Dashboard Preview"
                  className="w-full rounded-lg object-cover lg:scale-110"
                  width="900"
                  height="900"
                />
              </div>
            </MotionWrapper>
          </div>
        </MaxWidthWrapper>
      </GridBackground>
    </section>
  );
}

function TopBadge() {
  return (
    <Badge className="mb-4 rounded-full bg-card-gradient text-emerald-800">
      Twoja strona. Twój system. Twoi klienci.
    </Badge>
  );
}

function Heading() {
  return (
    <h1 className="mb-6 max-w-2xl text-4xl font-bold leading-tight text-foreground sm:text-center sm:text-5xl lg:max-w-full lg:text-7xl">
      <AnimatedText
        className="md:justify-center"
        text="Zautomatyzuj rezerwacje i zdobywaj klientów nawet gdy śpisz"
        accentWords={["zdobywaj", "klientów"]}
      />
      {/* <div>
        Zautomatyzuj rezerwacje
        <br className="hidden sm:block" /> i{" "}
        <span className="bg-primary-gradient bg-clip-text text-transparent">
          zdobywaj klientów{" "}
        </span>
        nawet gdy śpisz
      </div> */}
    </h1>
  );
}

const benefits = [
  "Mniej telefonów",
  "Więcej klientów",
  "Więcej czasu dla zespołu",
];

function Benefits() {
  return (
    <div className="mb-6 flex flex-col flex-wrap justify-start gap-4 text-sm sm:flex-row lg:my-8">
      {benefits.map((benefit, i) => (
        <MotionWrapper key={benefit} transition={{ delay: 0.1 * i }}>
          <div className="flex items-center gap-2" key={benefit}>
            <CheckCircleIcon className="h-5 w-5 text-emerald-600" />
            <span>{benefit}</span>
          </div>
        </MotionWrapper>
      ))}
    </div>
  );
}

function CTAButtons() {
  return (
    <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
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
        href="/join/service-selection?service=book-app"
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
  );
}
