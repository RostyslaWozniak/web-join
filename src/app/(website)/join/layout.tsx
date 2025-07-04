import StepNav from "@/app/(website)/join/_components/step-nav";
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
    <div className="w-screen">
      <MaxWidthWrapper className="flex max-w-5xl flex-grow flex-col bg-background pb-8">
        <div className="my-8">
          <StepNav />
        </div>

        <ContactFormProvider>
          <div className="relative flex min-h-[500px] flex-grow flex-col">
            {children}
          </div>
        </ContactFormProvider>
      </MaxWidthWrapper>
    </div>
  );
}
