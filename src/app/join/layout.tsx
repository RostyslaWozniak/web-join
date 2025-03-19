import React from "react";
import { ContactHeroSection } from "@/components/sections/contact-hero-section";
import StepNav from "@/app/join/_components/step-nav";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ContactFormProvider } from "@/context/contact-form-context";

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <div className="hidden lg:block"> */}
      <ContactHeroSection />
      {/* </div> */}
      <section id="form">
        <MaxWidthWrapper className="mb-28 flex max-w-6xl flex-col gap-x-16 sm:mt-20 lg:flex-row">
          <StepNav />
          <ContactFormProvider>{children}</ContactFormProvider>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
