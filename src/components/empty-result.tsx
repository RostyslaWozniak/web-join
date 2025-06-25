import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

export function EmptyResult({
  icon: Icon,
  title,
  description,
  actionButton,
  className,
}: {
  icon: LucideIcon;
  title: string;
  description?: string;
  actionButton?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-muted/30 flex flex-col items-center justify-center rounded-lg border border-dashed px-4 pb-4 pt-8 sm:pb-8 sm:pt-14",
        className,
      )}
    >
      <Icon className="mb-4 h-12 w-12 text-foreground" />
      <h3 className="mb-1 text-lg font-medium">{title}</h3>
      {description && (
        <p className="max-w-md text-center text-sm text-muted-foreground">
          {description}
        </p>
      )}
      {actionButton}
    </div>
  );
}
