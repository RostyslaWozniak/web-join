import { ContactMethodForm } from "./contact-method-form";
import PageHeader from "../_components/form-header";

export default function ContactMethodPage() {
  return (
    <>
      <PageHeader
        title="Jak najlepiej się z Tobą skontaktować?"
        subtitle="Wybierz swój preferowany sposób kontaktu – skontaktuję się z Tobą w ciągu 24h, aby odpowiedzieć na Twoje pytania i omówić szczegóły."
      />
      <ContactMethodForm />
    </>
  );
}
