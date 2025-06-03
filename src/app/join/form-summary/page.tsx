import { SummaryForm } from "./summary-form";
import PageHeader from "../_components/form-header";
import { MotionWrapper } from "@/components/motion-wrapper";
import { formAnimationVariants } from "../_components/form-animation-variants";

export default function ContactMethodPage() {
  return (
    <MotionWrapper
      animate={"animate"}
      initial={"initial"}
      variants={formAnimationVariants}
      className="space-y-4 md:space-y-8"
    >
      <PageHeader
        title="Prawie gotowe!"
        subtitle='Sprawdź swoje wybory i wyślij formularz klikając "Dołącz". To nic nie kosztuje i do niczego Cię nie zobowiązuje. W ciągu 24 godzin skontaktuję się z Tobą, aby omówić szczegóły i zaproponować najlepsze rozwiązanie dla Twojej firmy.'
      />
      <SummaryForm />
    </MotionWrapper>
  );
}
