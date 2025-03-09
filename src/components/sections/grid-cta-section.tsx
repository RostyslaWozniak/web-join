import { GridBackground } from "../grid-background";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { GradientButton } from "../ui/gradient-button";
import { Text } from "../ui/typography";

export function GridCTASection() {
  return (
    <section>
      <GridBackground>
        <MaxWidthWrapper className="flex flex-col items-center gap-8 py-40">
          <div className="grid place-items-center gap-4">
            <h2 className="text-center text-5xl font-bold tracking-tighter lg:text-7xl">
              Chcesz zacząć projekt?
            </h2>
            <Text size="subtitle" className="max-w-2xl text-center">
              Skontaktuj się ze mną już dziś, aby uzyskać indywidualną
              konsultację.
            </Text>
          </div>
          <GradientButton size="lg" showIcon>
            Join
          </GradientButton>
        </MaxWidthWrapper>
      </GridBackground>
    </section>
  );
}
