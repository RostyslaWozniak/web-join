import { type ButtonProps } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Loader2 } from "lucide-react";

interface LoadingButtonProps extends ButtonProps {
  loading: boolean;
}

export function FormButton({
  children,
  disabled,
  loading,
}: LoadingButtonProps) {
  return (
    <GradientButton
      disabled={loading || disabled}
      type="submit"
      size="default"
      className="fixed bottom-6 left-3 right-3 w-auto py-3 sm:absolute sm:bottom-0 sm:left-auto sm:right-0 sm:w-min sm:px-6"
    >
      {loading && <Loader2 className="mr-2 size-5 animate-spin" />}
      {children}
    </GradientButton>
  );
}
