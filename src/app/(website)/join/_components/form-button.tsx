import { GradientButton } from "@/components/ui/gradient-button";

export function FormButton({
  children,
  disabled,
}: {
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <GradientButton
      disabled={disabled}
      type="submit"
      size="default"
      className="fixed bottom-6 left-3 right-3 float-end w-auto py-3 sm:static sm:px-6"
    >
      {children}
    </GradientButton>
  );
}
