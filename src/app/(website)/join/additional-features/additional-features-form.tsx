"use client";

import { Form } from "@/components/ui/form";
import {
  type AdditionalFeaturesSchema,
  additionalFeaturesSchema,
} from "@/lib/validation/contact-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { features } from "./data";
import { SelectCard } from "../_components/select-card";
import { useContactFormContext } from "@/context/contact-form-context";
import { useEffect } from "react";
import { FormButton } from "../_components/form-button";
import { MotionWrapper } from "@/components/motion-wrapper";
import { formAnimationVariants } from "../_components/form-animation-variants";
import PageHeader from "../_components/form-header";
import { ChevronRightIcon } from "lucide-react";

export function AdditionalFaturesForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const edit = searchParams.get("edit") === "true";
  const { newContactFormData, updateContactForm, dataLoaded } =
    useContactFormContext();

  const form = useForm<AdditionalFeaturesSchema>({
    resolver: zodResolver(additionalFeaturesSchema),

    defaultValues: {
      additionalFeatures: [],
    },
  });

  function onSubmit(values: AdditionalFeaturesSchema) {
    updateContactForm(values);
    router.push(edit ? "/join/form-summary" : "/join/contact-method");
  }

  useEffect(() => {
    if (dataLoaded) {
      form.setValue(
        "additionalFeatures",
        newContactFormData.additionalFeatures ?? [],
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newContactFormData.serviceType]);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {features.map(({ id, label, value, icon, description }) => (
              <SelectCard
                key={id}
                onClick={() => {
                  if (form.watch("additionalFeatures")?.includes(value)) {
                    form.setValue("additionalFeatures", [
                      ...form
                        .watch("additionalFeatures")
                        .filter((item) => item !== value),
                    ]);
                  } else {
                    form.setValue("additionalFeatures", [
                      ...form.watch("additionalFeatures"),
                      value,
                    ]);
                  }
                }}
                isSelected={form.watch("additionalFeatures")?.includes(value)}
                error={!!form.formState.errors.additionalFeatures}
                label={label}
                icon={icon}
                description={description}
              />
            ))}
          </div>
        </MotionWrapper>
        <div className="min-h-6">
          <FormButton>
            {" "}
            <span className="text-base">
              {edit ? "Zapisz" : "Kontynuuj"}
            </span>{" "}
            <ChevronRightIcon className="min-h-5 min-w-5" />
          </FormButton>
        </div>
      </form>
    </Form>
  );
}
