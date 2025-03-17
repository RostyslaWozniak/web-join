import { MotionWrapper } from "@/components/motion-wrapper";
import PageHeader from "../_components/form-header";
import { AdditionalFaturesForm } from "./additional-features-form";

export default function ContactMethodPage() {
  return (
    <MotionWrapper className="w-full space-y-8" animate={{ opacity: 1, y: 0 }}>
      <PageHeader
        title="Czego potrzebujesz w swoim projekcie?"
        subtitle="Zaznacz funkcje, które sprawią, że Twoja strona będzie dokładnie taka, jakiej potrzebujesz."
      />
      <AdditionalFaturesForm />
    </MotionWrapper>
  );
}
