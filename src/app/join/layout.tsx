import { JoinHeroSection } from "@/components/sections/join-hero-section";
import StepNav from "@/app/join/_components/step-nav";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import dynamic from "next/dynamic";
const ContactFormProvider = dynamic(() =>
  import("@/context/contact-form-context").then(
    (mod) => mod.ContactFormProvider,
  ),
);

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="hidden lg:block">
        <JoinHeroSection />
      </div>
      <MaxWidthWrapper className="flex max-w-7xl flex-col gap-x-16 pb-28 sm:pt-20 lg:flex-row">
        <StepNav />
        <div className="relative min-h-[500px] flex-grow">
          <ContactFormProvider>{children}</ContactFormProvider>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
