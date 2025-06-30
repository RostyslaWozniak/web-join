import { MotionWrapper } from "@/components/motion-wrapper";
import PageHeader from "../_components/form-header";
import { AdditionalFaturesForm } from "./additional-features-form";
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
        title="Potrzebujesz dodatkowych opcji?"
        subtitle="Zaznacz funkcje, które mogą być przydatne dla Twojej strony. Jeśli nie wiesz, które wybrać – pomogę Ci to ustalić podczas darmowej konsultacji!"
      />
      <AdditionalFaturesForm edit={!!edit} />
    </MotionWrapper>
  );
}
