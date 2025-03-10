import { GridBackground } from "@/components/grid-background";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { MotionWrapper } from "@/components/motion-wrapper";
import { H1 } from "@/components/ui/typography";
import { Code, Globe, Sparkles, ZapIcon } from "lucide-react";
import { AnimatedText } from "@/components/animations/animated-text";
import { GradientButton } from "../ui/gradient-button";

export function HomeHeroSection() {
  return (
    <section id="start">
      <GridBackground className="flex items-center justify-center">
        <MaxWidthWrapper className="relative flex min-h-[70vh] flex-col items-center justify-center gap-y-12 py-8 md:py-16">
          <div className="flex flex-grow flex-col items-center justify-center gap-y-8 md:flex-none">
            <div className="space-y-22 grid place-items-center gap-y-2">
              <H1 className="max-w-7xl text-start text-foreground md:text-center">
                Stwórzmy stronę{" "}
                <span className="hidden md:inline">internetową</span>, która
                rozpędzi{" "}
                <span className="bg-primary-gradient bg-clip-text text-transparent">
                  Twój biznes
                </span>
              </H1>
              <AnimatedText
                className="hidden max-w-4xl md:inline md:text-center"
                textProps={{ size: "subtitle" }}
              >
                Ty rozwijasz biznes, a ja tworzę stronę, która go wspiera.
                Zadbam o wszystkie aspekty techniczne, żebyś mógł skupić się na
                tym, co ważne.
              </AnimatedText>
            </div>
            <div className="flex w-full flex-grow flex-col justify-center gap-6 md:hidden">
              <div className="flex items-center gap-x-4 text-nowrap text-2xl">
                <ZapIcon className="min-h-8 min-w-8 stroke-accent-yellow" />{" "}
                Szybkie strony
              </div>

              <div className="flex items-center gap-x-4 text-nowrap text-2xl">
                <Sparkles className="min-h-8 min-w-8 stroke-primary-green" />{" "}
                Modern UX
              </div>
              <div className="flex items-center gap-x-4 text-nowrap text-2xl">
                <Globe className="min-h-8 min-w-8 stroke-accent-green" />{" "}
                Globalny zasięg
              </div>
              <div className="flex items-center gap-x-4 text-nowrap text-2xl">
                <Code className="min-h-8 min-w-8 stroke-primary-cyan" />
                Clean code
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-end gap-4 md:flex-row md:justify-center">
            <div className="hidden lg:block">
              <GradientButton size="lg" outline>
                Portfolio
              </GradientButton>
            </div>
            <GradientButton size="lg" showIcon>
              Join
            </GradientButton>
          </div>

          <div className="hidden flex-col items-center gap-x-14 pt-20 md:flex md:flex-row">
            <MotionWrapper
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
            >
              <div className="flex items-center gap-x-2 text-xl">
                <ZapIcon className="stroke-accent-yellow" /> Szybkie strony
              </div>
            </MotionWrapper>
            <MotionWrapper
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-x-2 text-xl">
                <Code className="stroke-primary-cyan" />
                Clean code
              </div>
            </MotionWrapper>
            <MotionWrapper
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-x-2 text-xl">
                <Sparkles className="stroke-primary-green" /> Modern UX
              </div>
            </MotionWrapper>
            <MotionWrapper
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-x-2 text-xl">
                <Globe className="stroke-accent-green" /> Globalny zasięg
              </div>
            </MotionWrapper>
          </div>
        </MaxWidthWrapper>
      </GridBackground>
    </section>
  );
}
