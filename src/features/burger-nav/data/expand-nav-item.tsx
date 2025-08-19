"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
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
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-12 items-center"
              >
                - {item.label}
              </Link>
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
      className="mt-2 flex flex-col overflow-hidden rounded-md bg-white/80 px-2 text-sm shadow-sm backdrop-blur-md"
    >
      {children}
    </motion.div>
  );
}
