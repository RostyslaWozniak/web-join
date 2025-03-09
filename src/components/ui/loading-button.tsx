import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";

interface LoadingButtonProps extends ButtonProps {
  loading: boolean;
}

export function LoadingButton({
  loading,
  disabled,
  className,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      size={props.size ?? "lg"}
      disabled={loading || disabled}
      className={cn("relative flex items-center gap-2", className)}
      {...props}
    >
      {loading && <Loader2 className="animate-out size-5" />}
      {props.children}
    </Button>
  );
}
