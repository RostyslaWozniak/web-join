"use client";

import { Form } from "@/components/ui/form";
import {
  type AdditionalFeaturesSchema,
  additionalFeaturesSchema,
} from "@/lib/validation/contact-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { features } from "./data";
import { SelectCard } from "../_components/select-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { ChevronRight } from "lucide-react";
import { Text } from "@/components/ui/typography";
import { useContactFormContext } from "@/context/contact-form-context";
import { useEffect } from "react";

export function AdditionalFaturesForm() {
  const router = useRouter();
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
    router.push("/join/contact-method");
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
        <div>
          <Text size="sm" className="mb-2 text-destructive">
            {form.formState.errors.additionalFeatures?.message}
          </Text>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map(({ id, label, value, icon }) => (
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
              />
            ))}
          </div>
        </div>
        <GradientButton type="submit" size="lg" className="float-end">
          <span className="text-lg">Kontynuuj</span>{" "}
          <ChevronRight className="min-h-5 min-w-5" />
        </GradientButton>
      </form>
    </Form>
  );
}
