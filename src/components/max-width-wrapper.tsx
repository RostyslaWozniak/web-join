import { cn } from "@/lib/utils";

type MaxWidthWrapperProps = { children: React.ReactNode; className?: string };
export function MaxWidthWrapper({ children, className }: MaxWidthWrapperProps) {
  return (
    <div className={cn("mx-auto max-w-[1400px] px-2.5", className)}>
      {children}
    </div>
  );
}
