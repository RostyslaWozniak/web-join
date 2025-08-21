import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/section-header";

type PricingSectionProps = {
  title: string;
  pricing: {
    id: number;
    name: string;
    price: number;
    pricePerMonth: number;
    benefits: string[];
    styles: string;
    isMostPopular?: boolean;
  }[];
};

export function PricingSection({ title, pricing }: PricingSectionProps) {
  return (
    <>
      <SectionHeader title={title} className="mx-auto max-w-4xl" />
      <div className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-x-1 overflow-x-auto px-4 pb-12 pt-8 sm:gap-x-4 lg:gap-x-6 xl:mx-0 xl:grid xl:snap-none xl:grid-cols-3 xl:gap-x-8">
        {pricing.map(
          (
            { id, name, price, pricePerMonth, benefits, styles, isMostPopular },
            i,
          ) => (
            <Card
              key={id}
              className={cn(
                "relative flex min-w-[min(calc(100%-40px),_400px)] scale-95 snap-center flex-col border-gray-300 bg-white/80 shadow-xl backdrop-blur-sm",
                {
                  "border-accent-cyan sm:scale-105": isMostPopular,
                  "scale-100": i === 1,
                },
              )}
            >
              {isMostPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                  <Badge className="bg-accent-cyan tracking-wider text-foreground">
                    Najpopularniejszy
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <Badge className={cn(styles, "mx-auto mb-4 uppercase")}>
                  {name}
                </Badge>
                <CardTitle className="text-2xl">
                  wdrożenie od {price} zł
                </CardTitle>
                <CardDescription className="text-lg">
                  + {pricePerMonth} zł/mies
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="flex-1 space-y-3">
                  {benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm md:text-base"
                    >
                      <span className="flex h-[1lh] items-center">
                        <CheckCircleIcon className="h-4 w-4 text-emerald-500" />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ),
        )}
      </div>
    </>
  );
}
