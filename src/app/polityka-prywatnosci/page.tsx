import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Markdown from "react-markdown";
import { privacyPolicyContent } from "./data";

export default async function PrivacyPolicyPage() {
  return (
    <section className="bg-gradient-to-b from-card to-transparent">
      <MaxWidthWrapper className="max-w-[1000px] py-16">
        <Markdown
          components={{
            h1: ({ children }) => (
              <h1 className="mt-6 text-3xl font-bold text-foreground">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="mt-4 text-2xl font-semibold text-foreground">
                {children}
              </h2>
            ),
            li: ({ children }) => (
              <li className="ml-6 list-disc">{children}</li>
            ),
          }}
        >
          {privacyPolicyContent}
        </Markdown>
      </MaxWidthWrapper>
    </section>
  );
}
