import { AnimatedText } from "@/components/animations/animated-text";
import { GridBackground } from "@/components/grid-background";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { NotFoundIllustration } from "@/components/illustrations/not-found-llustration";
import { H1, Text } from "@/components/ui/typography";
import { IconCard } from "@/components/ui/icon-card";
import { Frown, X } from "lucide-react";
import { type Metadata } from "next";
import { BackButton } from "@/components/back-button";

export const metadata: Metadata = {
  title: "404",
  description: "Strona nie została znaleziona",
};

export default function NotFound() {
  return (
    <GridBackground className="overflow-x-hidden">
      <MaxWidthWrapper className="px-2 pb-12 md:py-20">
        <div className="relative flex flex-col items-center py-12">
          <NotFoundIllustration className="scale-50 sm:scale-100 sm:pb-12" />
          <div className="grid max-w-4xl place-items-center gap-6 px-6 text-center">
            <H1>
              <AnimatedText
                className="justify-center"
                text="Coś poszło nie tak"
              />
            </H1>
            <Text variant="muted" size="lg">
              Strona którą szukasz nie została znaleziona.
            </Text>
            <BackButton variant="default" />
          </div>
          <IconCard
            icon={X}
            iconSize={50}
            text="error"
            position="top-left"
            rotate={-6}
            className="left-0 top-10 text-accent-emerald"
            col
            duration="1.4"
          />
          <IconCard
            icon={Frown}
            iconSize={50}
            text="not found!"
            position="top-right"
            rotate={6}
            className="top-10 text-accent-cyan"
            col
          />
        </div>
      </MaxWidthWrapper>
    </GridBackground>
  );
}
