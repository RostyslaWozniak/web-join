import { ContactMethodForm } from "./contact-method-form";
import PageHeader from "../_components/form-header";
import { MotionWrapper } from "@/components/motion-wrapper";
import { formAnimationVariants } from "../_components/form-animation-variants";

export default async function ContactMethodPage({
  searchParams,
}: {
  searchParams: Promise<{ edit: string }>;
}) {
  const { edit } = await searchParams;
  return (
    <MotionWrapper
      animate={"animate"}
      initial={"initial"}
      variants={formAnimationVariants}
      className="space-y-4 md:space-y-8"
    >
      <PageHeader
        title="Jak najlepiej się z Tobą skontaktować?"
        subtitle="Wybierz swój preferowany sposób kontaktu – skontaktuję się z Tobą w ciągu 24h, aby odpowiedzieć na Twoje pytania i omówić szczegóły."
      />
      <ContactMethodForm edit={!!edit} />
    </MotionWrapper>
  );
}
