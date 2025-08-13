import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const sectionVariants = cva("", {
  variants: {
    paddingBlock: {
      default: "py-12 md:py-20",
      none: "py-0",
      sm: "py-10 md:py-16",
      lg: "py-16 md:py-28",
    },
  },
  defaultVariants: {
    paddingBlock: "default",
  },
});

type SectionWrapperProps = React.SelectHTMLAttributes<HTMLSelectElement> &
  VariantProps<typeof sectionVariants>;

export function SectionWrapper({
  children,
  className,
  paddingBlock,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      className={cn(sectionVariants({ paddingBlock }), className)}
      {...props}
    >
      {children}
    </section>
  );
}
