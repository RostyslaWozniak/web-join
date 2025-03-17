import { SummaryForm } from "./summary-form";
import PageHeader from "../_components/form-header";
import { MotionWrapper } from "@/components/motion-wrapper";

export default function ContactMethodPage() {
  return (
    <MotionWrapper className="w-full space-y-8" animate={{ opacity: 1, y: 0 }}>
      <PageHeader
        title="Prawie gotowe!"
        subtitle='Sprawdź swoje wybory i kliknij "Join️", aby rozpocząć współpracę.'
      />
      <SummaryForm />
    </MotionWrapper>
  );
}
