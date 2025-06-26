import { MotionWrapper } from "@/components/motion-wrapper";
import PageHeader from "../_components/form-header";
import { ServiceSelectionForm } from "./service-selection-form";
import { formAnimationVariants } from "../_components/form-animation-variants";
import { type ServiceSelectionSchema } from "@/lib/validation/contact-form-schema";

export const dynamic = "force-static";

export default async function ContactMethodPage({
  searchParams,
}: {
  searchParams: Promise<{
    edit: string;
    service: ServiceSelectionSchema["serviceType"] | undefined;
  }>;
}) {
  const { edit, service } = await searchParams;
  return (
    <MotionWrapper
      animate={"animate"}
      initial={"initial"}
      variants={formAnimationVariants}
      className="space-y-4 md:space-y-8"
    >
      <PageHeader
        title="Co Cię interesuje?"
        subtitle="Zaznacz, jakiego rodzaju stronę potrzebujesz. Omówimy wszystko na darmowej konsultacji i rozwieję twoje wątpliwości."
      />
      <ServiceSelectionForm edit={!!edit} service={service} />
    </MotionWrapper>
  );
}
