import { GradientButton } from "@/components/ui/gradient-button";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

export function DemoSection({
  href = "https://vet-app-demo.vercel.app",
}: {
  href?: string;
}) {
  return (
    <section id="demo" className="bg-emerald-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
            🎯 Zobacz demo w akcji
          </h2>
          <p className="mb-8 text-xl text-gray-600">
            Zanim podejmiesz decyzję – zobacz, jak to działa. Kliknij i
            przejrzyj wersję demonstracyjną aplikacji.
          </p>
          <Link
            href={href}
            target="_blank"
            className="w-full md:w-auto"
            aria-label="Zobacz demo"
          >
            <GradientButton size="default">
              Zobacz demo
              <ExternalLinkIcon className="ml-2 h-5 w-5" />
            </GradientButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
