import { MotionWrapper } from "@/components/motion-wrapper";
import PageHeader from "../_components/form-header";
import { ServiceSelectionForm } from "./service-selection-form";

export default function ContactMethodPage() {
  return (
    <MotionWrapper className="w-full space-y-8" animate={{ opacity: 1, y: 0 }}>
      <PageHeader
        title="Co chcesz stworzyć?"
        subtitle="Wybierz typ projektu, który najlepiej odpowiada Twoim potrzebom."
      />
      <ServiceSelectionForm />
    </MotionWrapper>
  );
}
