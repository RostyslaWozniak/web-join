import { cn } from "@/lib/utils";

export function GridBackground({
  children,
  className,
  maskGradient = true,
}: {
  children: React.ReactNode;
  className?: string;
  maskGradient?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative inset-0 h-full w-full bg-[linear-gradient(to_right,#C4F0F7_1px,transparent_1px),linear-gradient(to_bottom,#C4F0F7_1px,transparent_1px)] bg-[size:8px_8px] dark:bg-[linear-gradient(to_right,var(--popover)_1px,transparent_1px),linear-gradient(to_bottom,var(--popover)_1px,transparent_1px)]",
        className,
      )}
    >
      {maskGradient && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] md:[mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]" />
      )}
      {children}
    </div>
  );
}
