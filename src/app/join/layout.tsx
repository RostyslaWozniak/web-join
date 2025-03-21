import { ContactHeroSection } from "@/components/sections/contact-hero-section";
import StepNav from "@/app/join/_components/step-nav";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ContactFormProvider } from "@/context/contact-form-context";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

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
        <Suspense
          fallback={
            <div className="flex min-h-[400px] w-full min-w-[200px] items-center justify-center">
              <Loader2 className="size-8 animate-spin md:size-10" />
            </div>
          }
        >
          <ContactFormProvider>{children}</ContactFormProvider>
        </Suspense>
      </MaxWidthWrapper>
    </>
  );
}
