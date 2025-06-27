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
    <MaxWidthWrapper className="flex max-w-5xl flex-col gap-x-16 pb-12 md:pt-6">
      <StepNav />
      <div className="relative min-h-[500px] flex-grow">
        <ContactFormProvider>{children}</ContactFormProvider>
      </div>
    </MaxWidthWrapper>
  );
}
