import { GridBackground } from "@/components/grid-background";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { MotionWrapper } from "@/components/motion-wrapper";
import { H1, Text } from "@/components/ui/typography";
import { Code, Globe, RocketIcon, Sparkles, ZapIcon } from "lucide-react";
import { GradientButton } from "../ui/gradient-button";
import Link from "next/link";
import { AnimatedText } from "../animations/animated-text";

export function HomeHeroSection() {
  return (
    <section id="start">
      <GridBackground className="flex items-center justify-center">
        <MaxWidthWrapper className="relative flex min-h-[70vh] flex-col items-center justify-center py-8 sm:gap-y-4 md:py-16 lg:min-h-[90vh]">
          <div className="flex flex-grow flex-col items-center justify-center gap-y-3 md:flex-none">
            <H1 className="flex max-w-7xl text-start text-foreground md:text-center">
              <span className="absolute right-4 top-4 aspect-square h-20 md:static">
                <RocketIcon className="stroke-accent-cyan min-h-full min-w-full" />
              </span>
              <AnimatedText
                className="md:justify-center"
                text="Strona internetową, która napędzi Twój biznes"
                accentWords={["Strona", "biznes"]}
              />
            </H1>

            <MotionWrapper
              transition={{ delay: 0.2, duration: 0.3 }}
              className="hidden max-w-4xl sm:inline md:text-center"
            >
              <Text size={"subtitle"} variant="muted">
                Ty rozwijasz firmę, a ja tworzę stronę, która działa szybko,
                bezpiecznie i skutecznie. Zadbam o technologię, żebyś mógł
                skupić się na zyskach.
              </Text>
            </MotionWrapper>
          </div>
          <div className="flex w-full flex-col-reverse gap-y-6 sm:flex-col">
            <MotionWrapper
              transition={{ delay: 0.3, duration: 0.3 }}
              className="flex w-full flex-col items-center justify-end gap-4 md:flex-row md:justify-center"
            >
              <div className="hidden lg:block">
                <Link href="/#portfolio" className="w-full">
                  <GradientButton size="lg" outline>
                    Portfolio
                  </GradientButton>
                </Link>
              </div>
              <div className="w-full md:w-auto">
                <Link href="/join" className="w-full md:w-auto">
                  <GradientButton size="lg" showIcon>
                    Join
                  </GradientButton>
                </Link>
              </div>
            </MotionWrapper>

            <div className="flex flex-col items-start justify-center gap-x-14 gap-y-4 sm:flex-row sm:flex-wrap sm:items-center sm:pt-20">
              <MotionWrapper
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex items-center gap-x-2 text-xl"
              >
                <ZapIcon className="stroke-accent-lime" /> Szybkie strony
              </MotionWrapper>
              <MotionWrapper
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="flex items-center gap-x-2 text-xl"
              >
                <Code className="stroke-accent-cyan" />
                Clean code
              </MotionWrapper>
              <MotionWrapper
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="flex items-center gap-x-2 text-xl"
              >
                <Sparkles className="stroke-accent-green" /> Modern UX
              </MotionWrapper>
              <MotionWrapper
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="flex items-center gap-x-2 text-xl"
              >
                <Globe className="stroke-accent-green" /> Globalny zasięg
              </MotionWrapper>
            </div>
          </div>
        </MaxWidthWrapper>
      </GridBackground>
    </section>
  );
}
