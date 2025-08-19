import { cn } from "@/lib/utils";
import { H2 } from "./ui/typography";

export function SectionHeader({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: {
  title: React.ReactNode;
  subtitle: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}) {
  return (
    <div className={cn("mb-6 text-center md:mb-12", className)}>
      <H2 className={cn("mb-3 md:mb-6", titleClassName)}>{title}</H2>
      {subtitle && (
        <p className={cn("text-xl", subtitleClassName)}>{subtitle}</p>
      )}
    </div>
  );
}
