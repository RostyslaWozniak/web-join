import { GradientButton } from "@/components/ui/gradient-button";
import { ChevronRightIcon } from "lucide-react";

export function NextButton({ edit }: { edit: boolean }) {
  return (
    <GradientButton
      type="submit"
      size="default"
      className="fixed bottom-2 left-2 right-2 float-end w-auto py-4 sm:static sm:px-6"
    >
      <span className="text-base">{edit ? "Zapisz" : "Kontynuuj"}</span>{" "}
      <ChevronRightIcon className="min-h-5 min-w-5" />
    </GradientButton>
  );
}
