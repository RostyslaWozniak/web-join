import { ContactMethodForm } from "./contact-method-form";
import PageHeader from "../_components/form-header";
import { MotionWrapper } from "@/components/motion-wrapper";

export default function ContactMethodPage() {
  return (
    <MotionWrapper className="w-full space-y-8" animate={{ opacity: 1, y: 0 }}>
      <PageHeader
        title="Jak najlepiej się z Tobą skontaktować?"
        subtitle=" Wybierz preferowaną metodę kontaktu, abyśmy mogli sprawnie omówić Twój projekt."
      />
      <ContactMethodForm />
    </MotionWrapper>
  );
}
