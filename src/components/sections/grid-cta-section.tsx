import Link from "next/link";
import { GridBackground } from "../grid-background";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { FlipWords } from "../ui/flip-words";
import { GradientButton } from "../ui/gradient-button";

const words = ["landing page", "website", "e-commerce", "blog", "konsultacja"];

export function GridCTASection() {
  return (
    <section>
      <GridBackground>
        <MaxWidthWrapper className="flex flex-col items-center gap-8 py-20 lg:py-40">
          <div className="grid place-items-center gap-4">
            <h2 className="text-6xl font-bold tracking-tighter sm:text-center lg:text-7xl">
              Wybierz czego potrzebujesz,
              <br /> a ja zajmę się resztą
              {/* <br /> */}
              <div className="w-full overflow-hidden pb-4">
                <FlipWords
                  words={words}
                  className="text-nowrap px-0 font-semibold text-primary-cyan"
                />
              </div>
            </h2>
          </div>
          <Link href="/join" className="w-full sm:w-auto">
            <GradientButton size="lg" showIcon>
              Join
            </GradientButton>
          </Link>
        </MaxWidthWrapper>
      </GridBackground>
    </section>
  );
}
