import { AccessibleLink } from "@/components/accesible-link";
import { GradientButton } from "@/components/ui/gradient-button";
import { H2 } from "@/components/ui/typography";
import { CalendarIcon, ExternalLinkIcon } from "lucide-react";

export function CTASection({
  scheduleHref,
  demoHref,
}: {
  scheduleHref: string;
  demoHref: string;
}) {
  return (
    <section className="relative isolate py-20">
      <div className="container relative z-20 mx-auto px-4 text-center">
        <H2 className="mb-4 text-3xl font-bold text-cyan-900 lg:text-4xl">
          Zacznij już dziś!
        </H2>
        <p className="mx-auto mb-8 max-w-2xl text-xl">
          Umów się na bezpłatną prezentację i poznaj możliwości systemu BookApp
        </p>
        <div className="mx-auto flex flex-col gap-4 sm:w-min sm:flex-row sm:justify-center">
          <AccessibleLink
            href={scheduleHref}
            aria-label="Umów darmową prezentację"
          >
            <GradientButton>
              <CalendarIcon className="mr-2 h-5 w-5" />
              Umów się na prezentację
            </GradientButton>
          </AccessibleLink>
          <AccessibleLink
            href={demoHref}
            target="_blank"
            aria-label="Przejdź do demo"
          >
            <GradientButton outline>
              Zobacz demo
              <ExternalLinkIcon className="ml-2 h-5 w-5 text-accent-cyan" />
            </GradientButton>
          </AccessibleLink>
        </div>
      </div>
      <div className="absolute inset-0 bg-card-gradient opacity-50"></div>
    </section>
  );
}
