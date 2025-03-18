import { cn } from "@/lib/utils";

type CardWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardWrapper({ children, className }: CardWrapperProps) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-card-gradient p-6 shadow-muted duration-300 hover:scale-[1.02] hover:shadow-md hover:shadow-muted",
        className,
      )}
    >
      {children}
    </div>
  );
}
