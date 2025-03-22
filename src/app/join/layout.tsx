import { ContactHeroSection } from "@/components/sections/contact-hero-section";
import StepNav from "@/app/join/_components/step-nav";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
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
      <div className="">
        <ContactHeroSection />
      </div>
      <MaxWidthWrapper className="flex max-w-6xl flex-col gap-x-16 pb-28 sm:pt-20 lg:flex-row">
        <StepNav />
        <div className="min-h-[500px]">
          <Suspense
            fallback={
              <div className="flex min-h-[500px] w-full items-center justify-center">
                <Loader2 className="size-8 animate-spin md:size-10" />
              </div>
            }
          >
            <ContactFormProvider>{children}</ContactFormProvider>
          </Suspense>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
