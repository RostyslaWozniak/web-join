"use client";

import { MaxWidthWrapper } from "../max-width-wrapper";
import { motion } from "framer-motion";

export function SectionSeparator() {
  return (
    <div className="w-full">
      <MaxWidthWrapper className="px-5">
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          className="h-0.5 rounded-full bg-primary-gradient"
        />
      </MaxWidthWrapper>
    </div>
  );
}
