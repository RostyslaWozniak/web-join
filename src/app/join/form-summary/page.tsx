import { SummaryForm } from "./summary-form";
import PageHeader from "../_components/form-header";

export default function ContactMethodPage() {
  return (
    <>
      <PageHeader
        title='Prawie gotowe! Teraz wystarczy kliknąć "JOIN".'
        subtitle="Sprawdź swoje wybory i wyślij formularz. To nic nie kosztuje i do niczego Cię nie zobowiązuje. W ciągu 24 godzin skontaktuję się z Tobą, aby omówić szczegóły i zaproponować najlepsze rozwiązanie dla Twojej firmy."
      />
      <SummaryForm />
    </>
  );
}
