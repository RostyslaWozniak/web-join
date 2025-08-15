"use client";

import { AccessibleLink } from "@/components/accesible-link";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

type BurgerNavItemProps = {
  children: React.ReactNode;
  href: string;
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
    <AccessibleLink
      href={href}
      aria-label={areaLabel}
      className={cn(
        "flex min-h-14 min-w-full items-end gap-x-4 px-8 text-lg tracking-widest",
        {
          "text-accent-cyan": isActiveLink,
        },
      )}
    >
      <Icon size={32} />
      {children}
    </AccessibleLink>
  );
}
