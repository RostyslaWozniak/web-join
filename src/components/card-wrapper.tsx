import { cn } from "@/lib/utils";

type CardWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardWrapper({ children, className }: CardWrapperProps) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-card-gradient p-6 shadow-[0_0_0_1px_hsl(var(--primary-cyan)_/_30%)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
