"use client";

import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";
import Link from "next/link";
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
    <Link
      href={href}
      aria-label={areaLabel}
      className={cn("flex items-end gap-x-4 tracking-widest", {
        "text-accent-cyan": isActiveLink,
        "-mx-8 -my-2 items-center rounded-full bg-primary-gradient py-2 pl-8 font-bold text-foreground text-white":
          href === "/join",
      })}
    >
      <Icon size={32} />
      {children}
    </Link>
  );
}
