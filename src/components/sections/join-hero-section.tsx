import { GridBackground } from "@/components/grid-background";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { H1 } from "@/components/ui/typography";

import { AnimatedText } from "../animations/animated-text";

export function JoinHeroSection() {
  return (
    <section>
      <GridBackground maskGradient className="py-12 md:py-20">
        <MaxWidthWrapper className="relative z-10 flex flex-col items-center">
          <H1 className="max-w-sm sm:text-center md:max-w-6xl">
            <AnimatedText
              className="md:justify-center"
              text="Twoja droga do sukcesu zaczyna się tutaj!"
              accentWords={["sukcesu"]}
            />
          </H1>
        </MaxWidthWrapper>
      </GridBackground>
    </section>
  );
}
