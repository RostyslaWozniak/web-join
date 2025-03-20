"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { ContactHeroSection } from "@/components/sections/contact-hero-section";
import StepNav from "@/app/join/_components/step-nav";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ContactFormProvider } from "@/context/contact-form-context";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { Loader2 } from "lucide-react";

const pageVariants = {
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
    if (!pathname.includes("service-selection") && formRef.current) {
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
          <Suspense
            fallback={
              <div className="flex min-h-[500px] w-full items-center justify-center">
                <Loader2 className="size-8 animate-spin md:size-10" />
              </div>
            }
          >
            <ContactFormProvider>
              <div className="min-h-[500px]">
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
              </div>
            </ContactFormProvider>
          </Suspense>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
