import Link from "next/link";
import { GridBackground } from "../grid-background";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { FlipWords } from "../ui/flip-words";
import { GradientButton } from "../ui/gradient-button";
import { H2 } from "../ui/typography";

const words = ["landing page", "website", "e-commerce", "blog", "konsultacja"];

export function GridCTASection() {
  return (
    <section>
      <GridBackground>
        <MaxWidthWrapper className="flex flex-col items-center gap-8 py-20 lg:py-40">
          <div className="grid place-items-center gap-4">
            <H2 className="text-[min(60px,15vw)] font-bold leading-[min(60px,16vw)] tracking-tighter lg:text-7xl">
              Wybierz czego potrzebujesz,
              <br /> a ja zajmę się resztą
              <div className="max-w-screen hidden w-full overflow-hidden pb-4 lg:block">
                <FlipWords
                  words={words}
                  className="text-nowrap px-0 font-semibold text-accent-cyan"
                />
              </div>
            </H2>
          </div>
          <Link href="/kontakt" className="w-full sm:w-auto">
            <GradientButton size="default" showIcon>
              Wyślij zapytanie
            </GradientButton>
          </Link>
        </MaxWidthWrapper>
      </GridBackground>
    </section>
  );
}
