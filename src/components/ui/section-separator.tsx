"use client";

import { cn } from "@/lib/utils";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { motion } from "framer-motion";

export type SectionSeparatorProps = {
  className?: string;
};

export function SectionSeparator({ className }: SectionSeparatorProps) {
  return (
    <div className="w-full">
      <MaxWidthWrapper className={cn("sm:px-5", className)}>
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          className="sm:duraton-1000 h-0.5 rounded-full bg-primary-gradient duration-100"
        />
      </MaxWidthWrapper>
    </div>
  );
}
