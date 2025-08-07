import StepNav from "@/features/join-form/components/step-nav";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import dynamic from "next/dynamic";
import { type Metadata } from "next";
const ContactFormProvider = dynamic(() =>
  import("@/context/contact-form-context").then(
    (mod) => mod.ContactFormProvider,
  ),
);

export const metadata: Metadata = {
  title: "Join Form - Web Join",
  robots: {
    index: false,
    follow: true,
  },
};

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
          <div className="relative flex min-h-[300px] flex-grow flex-col justify-center sm:min-h-[600px]">
            {children}
          </div>
        </ContactFormProvider>
      </MaxWidthWrapper>
    </div>
  );
}
