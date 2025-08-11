import { cn } from "@/lib/utils";

export function SectionWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-12 md:py-20", className)}>{children}</section>
  );
}
