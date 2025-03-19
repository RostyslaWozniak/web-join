import { MotionWrapper } from "@/components/motion-wrapper";
import PageHeader from "../_components/form-header";
import { AdditionalFaturesForm } from "./additional-features-form";

export default function ContactMethodPage() {
  return (
    <MotionWrapper className="w-full space-y-8" animate={{ opacity: 1, y: 0 }}>
      <PageHeader
        title="Potrzebujesz dodatkowych opcji?"
        subtitle="Zaznacz funkcje, które mogą być przydatne dla Twojej strony. Jeśli nie wiesz, które wybrać – pomogę Ci to ustalić podczas darmowej konsultacji!"
      />
      <AdditionalFaturesForm />
    </MotionWrapper>
  );
}
