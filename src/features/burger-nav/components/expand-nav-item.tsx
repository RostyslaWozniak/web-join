"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, DotIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type ExpandNavItemProps = {
  label: string;
  list: { label: string; href: string }[];
};

export function ExpandNavItem({ label, list }: ExpandNavItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="flex w-full items-center justify-between text-start"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {label}{" "}
        <ChevronDown
          className={cn("duration-300", {
            "rotate-180": isOpen,
          })}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <MotionListWrapper listLength={list.length}>
            {list.map((item) => (
              <ListItem key={item.href} {...item} />
            ))}
          </MotionListWrapper>
        )}
      </AnimatePresence>
    </>
  );
}

function MotionListWrapper({
  children,
  listLength,
}: {
  children: React.ReactNode;
  listLength: number;
}) {
  return (
    <motion.div
      initial={{ height: "0px" }}
      animate={{ height: listLength * 48 }}
      exit={{ height: "0px" }}
      transition={{ duration: 0.1 }}
      className="mt-2 flex flex-col overflow-hidden rounded-md bg-white/80 text-sm shadow-sm backdrop-blur-md"
    >
      {children}
    </motion.div>
  );
}

function ListItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <Link
      key={href}
      href={href}
      className={cn("flex min-h-12 items-center px-2", {
        "text-cyan-600 underline underline-offset-2": isActive,
      })}
    >
      <DotIcon /> {label}
    </Link>
  );
}
