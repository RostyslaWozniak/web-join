"use client";

import { AccessibleLink } from "@/components/accesible-link";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

type BurgerNavItemProps = {
  children: React.ReactNode;
  href?: string;
  icon: LucideIcon;
  areaLabel: string;
};

export function BurgerNavItem({
  href,
  areaLabel,
  icon: Icon,
  children,
}: BurgerNavItemProps) {
  const pathname = usePathname();
  const isActiveLink = pathname === href;
  return (
    <>
      {href ? (
        <AccessibleLink
          href={href}
          aria-label={areaLabel}
          className={cn(
            "flex min-w-full items-start gap-x-4 text-wrap py-4 text-base tracking-widest",
            {
              "text-accent-cyan": isActiveLink,
            },
          )}
        >
          <Icon size={24} className="min-w-6" />
          <span className="mt-0.5">{children}</span>
        </AccessibleLink>
      ) : (
        <div
          className={cn(
            "flex min-w-full items-start gap-x-4 text-wrap py-4 text-base tracking-widest",
            {
              "text-accent-cyan": isActiveLink,
            },
          )}
        >
          <Icon size={24} className="min-w-6" />
          <span className="mt-0.5 w-full">{children}</span>
        </div>
      )}
    </>
  );
}
