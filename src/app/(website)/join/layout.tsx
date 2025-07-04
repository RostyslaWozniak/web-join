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
    <MaxWidthWrapper className="flex max-w-5xl flex-grow flex-col bg-background pb-8">
      <div className="flex max-h-48 flex-grow flex-col justify-center">
        <StepNav />
      </div>
      <ContactFormProvider>
        <div className="_justify-center relative flex min-h-[500px] flex-grow flex-col">
          {children}
        </div>
      </ContactFormProvider>
    </MaxWidthWrapper>
  );
}
