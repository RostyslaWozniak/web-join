"use client";

import { MaxWidthWrapper } from "../max-width-wrapper";
import { motion } from "framer-motion";

export function SectionSeparator() {
  return (
    <div className="w-full">
      <MaxWidthWrapper className="sm:px-5">
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
