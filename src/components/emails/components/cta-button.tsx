import { cn } from "@/lib/utils";
import { Section, Button } from "@react-email/components";

export const CTAButton = ({
  href,
  children,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  return (
    <Section className="my-5">
      <Button
        href={href}
        className={cn(
          "rounded-full bg-[linear-gradient(to_right,#31d5dd,#6ce6b9)] px-6 py-3 text-lg text-white no-underline",
          className,
        )}
      >
        {children}
      </Button>
    </Section>
  );
};
