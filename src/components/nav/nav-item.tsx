"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  href: string;
  children: React.ReactNode;
};

export function NavItem({ href, children }: NavItemProps) {
  const pathname = usePathname();
  const isActiveLink = href === pathname;
  return (
    <li className="hover:bg-primary-gradient relative h-full p-4 hover:bg-clip-text hover:text-transparent hover:duration-300">
      <Link href={href}>
        {children} <span className="absolute inset-0"></span>
      </Link>
      {isActiveLink && (
        <span className="bg-primary-gradient absolute -bottom-0.5 left-0 h-1 w-full rounded-full"></span>
      )}
    </li>
  );
}
