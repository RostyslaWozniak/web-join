import { ContactMethodForm } from "./contact-method-form";
import PageHeader from "../_components/form-header";
import { MotionWrapper } from "@/components/motion-wrapper";

export default function ContactMethodPage() {
  return (
    <MotionWrapper className="w-full space-y-8" animate={{ opacity: 1, y: 0 }}>
      <PageHeader
        title="Jak najlepiej się z Tobą skontaktować?"
        subtitle="Wybierz swój preferowany sposób kontaktu – skontaktuję się z Tobą w ciągu 24h, aby odpowiedzieć na Twoje pytania i omówić szczegóły."
      />
      <ContactMethodForm />
    </MotionWrapper>
  );
}
