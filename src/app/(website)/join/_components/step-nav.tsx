"use client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
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
    title: "Dodatkowe opcje",
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
  const router = useRouter();
  const currentPath = path.basename(pathname);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setCurrentStep(steps.findIndex((step) => step.route === currentPath));
  }, [currentPath]);

  return (
    <div className="isolate min-w-72">
      {/* list of form steps */}
      <div className="relative flex flex-row justify-between">
        {steps.map(({ id, title, route, link }, i) => (
          <button
            key={id}
            onClick={() => currentStep > i && router.push(link)}
            disabled={currentStep <= i}
            className="group z-20 flex flex-col items-center gap-x-3 gap-y-1"
          >
            <span
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-colors duration-200 md:h-12 md:w-12 md:text-lg",
                {
                  "border-none bg-primary-gradient text-background":
                    currentPath === route,
                  "border-foreground bg-background text-foreground group-hover:text-foreground":
                    currentPath !== route,
                  "border-transparent bg-muted text-muted-foreground":
                    currentStep < i,
                },
              )}
            >
              {i + 1}
            </span>
            <span
              className={cn(
                "w-min text-center text-xs text-foreground transition-colors duration-200 group-hover:text-foreground md:text-sm",
                {
                  "font-light": currentPath !== route,
                  "font-semibold text-foreground": currentPath === route,
                },
              )}
            >
              {title}
            </span>
          </button>
        ))}
        {/* mobile background dashes */}
        <div
          className={cn(
            "absolute top-[18px] mx-auto flex h-1 w-full md:top-[24px]",
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
