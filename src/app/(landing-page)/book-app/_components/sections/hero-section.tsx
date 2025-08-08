import { AccessibleLink } from "@/components/accesible-link";
import { AnimatedText } from "@/components/animations/animated-text";
import { GridBackground } from "@/components/grid-background";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { MotionWrapper } from "@/components/motion-wrapper";
import { Badge } from "@/components/ui/badge";
import { GradientButton } from "@/components/ui/gradient-button";
import { CalendarIcon, CheckCircleIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";

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
              <MotionWrapper className="w-full">
                <CTAButtons />
              </MotionWrapper>
            </div>

            {/* Main placeholder image */}
            <MotionWrapper>
              <div className="pointer-events-none relative mx-auto max-w-3xl rounded-2xl">
                <Image
                  priority
                  src="https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vcrmwkf42Ceq1RWILG3fczmyvMhgQnO4VHDwx"
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
    <h1 className="tra mb-6 max-w-2xl text-4xl font-bold tracking-tighter text-foreground sm:text-center sm:text-5xl lg:max-w-full lg:text-7xl">
      <AnimatedText
        className="gap-x-2 sm:gap-x-4 md:justify-center"
        text="Strona internetowa i rezerwacje online dla Twojej firmy usługowej"
        accentWords={["rezerwacje", "online"]}
      />
    </h1>
  );
}

const benefits = [
  "Zyskaj klientów 24/7",
  "Mniej telefonów",
  "Działaj lokalnie – bez prowizji",
];

function Benefits() {
  return (
    <div className="mb-6 flex flex-col flex-wrap justify-start gap-4 text-sm sm:flex-row lg:my-8">
      {benefits.map((benefit, i) => (
        <MotionWrapper key={benefit} transition={{ delay: 0.1 * i }}>
          <div className="flex items-center gap-2" key={benefit}>
            <CheckCircleIcon className="h-5 w-5 text-emerald-600" />
            <span className="_font-semibold text-lg">{benefit}</span>
          </div>
        </MotionWrapper>
      ))}
    </div>
  );
}

function CTAButtons() {
  return (
    <div className="mx-auto flex flex-col gap-4 sm:w-min sm:flex-row sm:justify-center">
      <AccessibleLink
        href="/kontakt#form"
        aria-label="Umów darmową prezentację"
      >
        <GradientButton>
          <CalendarIcon className="mr-2 h-5 w-5" />
          Umów się na prezentację
        </GradientButton>
      </AccessibleLink>
      <AccessibleLink
        href="https://vet-app-demo.vercel.app/"
        target="_blank"
        aria-label="Przejdź do demo"
      >
        <GradientButton outline>
          Zobacz demo
          <ExternalLinkIcon className="ml-2 h-5 w-5 text-accent-cyan" />
        </GradientButton>
      </AccessibleLink>
    </div>
  );
}
