"use client";

import { Form } from "@/components/ui/form";
import {
  type AdditionalFeaturesSchema,
  additionalFeaturesSchema,
} from "@/lib/validation/contact-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { features } from "../../data";
import { SelectCard } from "../select-card";
import { useContactFormContext } from "@/context/contact-form-context";
import { useEffect, useState, useTransition } from "react";
import { FormButton } from "../form-button";

import PageHeader from "../form-header";
import { ChevronRightIcon } from "lucide-react";
import {
  exitAnimationWaitInMs,
  FormAnimateWrapper,
} from "../form-animate-wrapper";
import { wait } from "@/lib/utils";

export function AdditionalFaturesForm() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const edit = searchParams.get("edit") === "true";
  const { newContactFormData, updateContactForm, dataLoaded } =
    useContactFormContext();

  const [isPending, startTransition] = useTransition();

  const [isFormVisible, setIsFormVisible] = useState(true);

  const form = useForm<AdditionalFeaturesSchema>({
    resolver: zodResolver(additionalFeaturesSchema),

    defaultValues: {
      additionalFeatures: [],
    },
  });

  async function onSubmit(values: AdditionalFeaturesSchema) {
    setIsFormVisible(false);
    await wait(exitAnimationWaitInMs);
    startTransition(() => {
      updateContactForm(values);
      router.push(edit ? "/join/form-summary" : "/join/contact-method");
    });
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
        <FormAnimateWrapper show={isFormVisible}>
          <PageHeader
            title="Potrzebujesz dodatkowych opcji?"
            subtitle="Zaznacz funkcje, które mogą być przydatne dla Twojej strony. Jeśli nie wiesz, które wybrać – pomogę Ci to ustalić podczas darmowej konsultacji!"
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {features.map(
              ({ id, label, fullLabel, value, icon, description }) => (
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
                  fullLabel={fullLabel}
                  icon={icon}
                  description={description}
                />
              ),
            )}
          </div>
        </FormAnimateWrapper>
        <div className="min-h-6">
          <FormButton loading={isPending}>
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
