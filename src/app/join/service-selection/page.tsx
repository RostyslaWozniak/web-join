import PageHeader from "../_components/form-header";
import { ServiceSelectionForm } from "./service-selection-form";

export default function ContactMethodPage() {
  return (
    <>
      <PageHeader
        title="Co Cię interesuje?"
        subtitle="Zaznacz, jakiego rodzaju stronę potrzebujesz. Jeśli nie jesteś pewien – nie martw się! Omówimy wszystko na darmowej konsultacji."
      />
      <ServiceSelectionForm />
    </>
  );
}
