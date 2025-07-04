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
import { NextButton } from "../_components/next-button";

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
        <div>
          <NextButton edit={edit} />
        </div>
      </form>
    </Form>
  );
}
