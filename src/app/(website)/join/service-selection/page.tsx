import { ServiceSelectionForm } from "@/features/join-form/components/forms/service-selection.form";

export const dynamic = "force-static";

export default async function ContactMethodPage() {
  return <ServiceSelectionForm />;
}
