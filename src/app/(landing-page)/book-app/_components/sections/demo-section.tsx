import { AccessibleLink } from "@/components/accesible-link";
import { GradientButton } from "@/components/ui/gradient-button";
import { H2 } from "@/components/ui/typography";
import { ExternalLinkIcon } from "lucide-react";

export function DemoSection({
  href = "https://vet-app-demo.vercel.app",
}: {
  href?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <H2 className="mb-6">🎯 Zobacz demo w akcji</H2>
      <p className="mb-8 text-xl text-gray-600">
        Zanim podejmiesz decyzję – zobacz, jak to działa. Kliknij i przejrzyj
        wersję demonstracyjną aplikacji.
      </p>
      <AccessibleLink
        href={href}
        target="_blank"
        className="w-full md:w-min"
        aria-label="Przejdź do demo"
      >
        <GradientButton size="default">
          Zobacz demo
          <ExternalLinkIcon className="ml-2 h-5 w-5" />
        </GradientButton>
      </AccessibleLink>
    </div>
  );
}
