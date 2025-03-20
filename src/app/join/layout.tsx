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
      <div className="hidden lg:block">
        <ContactHeroSection />
      </div>
      <MaxWidthWrapper className="flex max-w-6xl flex-col gap-x-16 pb-28 sm:pt-20 lg:flex-row">
        <StepNav />
        <ContactFormProvider>{children}</ContactFormProvider>
      </MaxWidthWrapper>
    </>
  );
}
