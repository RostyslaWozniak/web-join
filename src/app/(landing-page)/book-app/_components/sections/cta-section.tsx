import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
        <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
          Zacznij już dziś!
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl">
          Umów się na bezpłatną prezentację i poznaj możliwości systemu BookApp
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={scheduleHref}
            className={cn(
              buttonVariants({ size: "md" }),
              "bg-white px-8 py-4 text-lg text-cyan-700 hover:bg-gray-100",
            )}
          >
            Darmowa prezentacja
          </Link>
          <Link
            href={demoHref}
            className={cn(
              buttonVariants({ variant: "outline", size: "md" }),
              "border-2 border-white bg-transparent px-8 py-4 text-lg duration-200 hover:bg-white hover:text-cyan-700 hover:opacity-100",
            )}
          >
            Zobacz demo
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 bg-card-gradient opacity-60"></div>
    </section>
  );
}
