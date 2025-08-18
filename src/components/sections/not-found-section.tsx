import { FrownIcon, HomeIcon, XIcon } from "lucide-react";
import { AnimatedText } from "../animations/animated-text";
import { GridBackground } from "../grid-background";
import { NotFoundIllustration } from "../illustrations/not-found-llustration";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { GradientButton } from "../ui/gradient-button";
import { IconCard } from "../ui/icon-card";
import { H1, Text } from "../ui/typography";
import Link from "next/link";

type NotFoundSectionProps = {
  actionButton?: React.ReactNode;
};

export function NotFoundSection({
  actionButton = <DefaultActionButton />,
}: NotFoundSectionProps) {
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
            <Text variant="muted" size="lg" className="animate-slide-in-blur">
              Strona którą szukasz nie została znaleziona.
            </Text>
            {actionButton}
          </div>
          <IconCard
            icon={XIcon}
            iconSize={50}
            text="error"
            position="top-left"
            rotate={-6}
            className="left-0 top-10 text-accent-emerald"
            col
            duration="1.4"
          />
          <IconCard
            icon={FrownIcon}
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

function DefaultActionButton() {
  return (
    <GradientButton className="relative">
      <HomeIcon className="mr-2" />
      Na główną <Link href="/" className="absolute inset-0" />
    </GradientButton>
  );
}
