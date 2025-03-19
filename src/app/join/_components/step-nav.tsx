"use client";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import { useEffect, useState } from "react";

export const steps = [
  {
    id: 1,
    title: "Wybór usługi",
    route: "service-selection",
    link: "/join/service-selection",
  },

  {
    id: 2,
    title: "Twoje priorytety",
    route: "additional-features",
    link: "/join/additional-features",
  },
  {
    id: 3,
    title: "Kontakt",
    route: "contact-method",
    link: "/join/contact-method",
  },

  {
    id: 4,
    title: "Join",
    route: "form-summary",
    link: "/join/form-summary",
  },
];

export default function StepNav() {
  const pathname = usePathname();
  const currentPath = path.basename(pathname);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setCurrentStep(steps.findIndex((step) => step.route === currentPath));
  }, [currentPath]);

  return (
    <div className="sticky isolate mb-12 mt-4 min-w-72 lg:mb-0">
      {/* back button */}
      <Link
        href={steps[currentStep - 1]?.link ?? "/"}
        className={cn(
          "mb-8 flex items-center text-xl hover:underline lg:mb-12",
        )}
      >
        <ChevronLeft className="mr-2 h-5 w-5" /> Cofnij
      </Link>

      {/* list of form steps */}
      <div className="relative flex flex-row justify-between lg:flex-col lg:justify-start lg:gap-8">
        {steps.map(({ title, route, link }, i) => (
          <Link
            href={link}
            key={link}
            className="group z-20 flex flex-col items-center gap-3 lg:w-auto lg:flex-row lg:text-nowrap"
            prefetch={true}
          >
            <span
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-colors duration-200 lg:h-12 lg:w-12 lg:text-lg",
                {
                  "border-none bg-primary-gradient text-background":
                    currentPath === route,
                  "border-foreground/75 text-foreground/75 bg-background group-hover:border-foreground group-hover:text-foreground":
                    currentPath !== route,
                },
              )}
            >
              {i + 1}
            </span>
            <span
              className={cn(
                "text-foreground/75 w-min text-center text-sm transition-colors duration-200 group-hover:text-foreground lg:block lg:text-start lg:text-2xl",
                {
                  "font-light": currentPath !== route,
                  "font-semibold text-foreground": currentPath === route,
                },
              )}
            >
              {title}
            </span>
          </Link>
        ))}
        {/* mobile background dashes */}
        <div
          className={cn(
            "absolute top-[18px] mx-auto flex h-1 w-full lg:hidden",
            {
              "bg-[linear-gradient(to_right,transparent_0%,transparent_10px,var(--muted)_10px,var(--muted)_calc(100%-40px),transparent_100%)]":
                currentStep === 0,
              "bg-[linear-gradient(to_right,transparent_0%,transparent_10px,var(--accent-cyan)_10px,var(--accent-emerald)_35%,var(--muted)_35%,var(--muted)_calc(100%-40px),transparent_100%)]":
                currentStep === 1,
              "bg-[linear-gradient(to_right,transparent_0%,transparent_10px,var(--accent-cyan)_10px,var(--accent-emerald)_65%,var(--muted)_65%,var(--muted)_calc(100%-40px),transparent_100%)]":
                currentStep === 2,
              "bg-[linear-gradient(to_right,transparent_0%,transparent_10px,var(--accent-cyan)_10px,var(--accent-emerald)_calc(100%-40px),transparent_calc(100%-40px),transparent_100%)]":
                currentStep === 3,
            },
          )}
        />
      </div>
    </div>
  );
}
