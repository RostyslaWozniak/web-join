"use client";

import React, { useEffect, useRef, useState } from "react";
import { ContactHeroSection } from "@/components/sections/contact-hero-section";
import StepNav from "@/app/join/_components/step-nav";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ContactFormProvider } from "@/context/contact-form-context";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-is-mobile";

export const pageVariants = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
};

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  const isMobile = useIsMobile();

  const pathname = usePathname();
  const formRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isClient) setIsClient(true);
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: "instant",
        block: isMobile ? "start" : "center",
      });
    }
  }, [pathname, isClient, isMobile]);
  return (
    <>
      <ContactHeroSection />
      <section ref={formRef}>
        <MaxWidthWrapper className="flex max-w-6xl flex-col gap-x-16 pb-28 sm:pt-20 lg:flex-row">
          <StepNav />
          <ContactFormProvider>
            <AnimatePresence mode="wait">
              <motion.div
                className="space-y-4 lg:space-y-8"
                key={pathname}
                initial={"initial"}
                animate={"animate"}
                variants={pageVariants}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </ContactFormProvider>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
