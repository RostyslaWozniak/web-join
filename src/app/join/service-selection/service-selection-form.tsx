"use client";

import { Form } from "@/components/ui/form";
import {
  serviceSelectionSchema,
  type ServiceSelectionSchema,
} from "@/lib/validation/contact-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { services } from "./data";
import { SelectCard } from "../_components/select-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { ChevronRight } from "lucide-react";
import { Text } from "@/components/ui/typography";
import { useContactFormContext } from "@/context/contact-form-context";
import { useEffect } from "react";

export function ServiceSelectionForm({ edit }: { edit: boolean }) {
  const router = useRouter();
  const { newContactFormData, updateContactForm, dataLoaded } =
    useContactFormContext();

  const form = useForm<ServiceSelectionSchema>({
    resolver: zodResolver(serviceSelectionSchema),
  });

  function onSubmit(values: ServiceSelectionSchema) {
    updateContactForm(values);
    router.push(edit ? "/join/form-summary" : "/join/additional-features");
  }

  useEffect(() => {
    if (dataLoaded) {
      form.setValue("serviceType", newContactFormData.serviceType ?? "website");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newContactFormData.serviceType]);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <Text size="sm" className="mb-2 text-destructive">
            {form.formState.errors.serviceType?.message}
          </Text>
          <div className="grid grid-cols-2 gap-4">
            {services.map(({ id, label, value, icon }) => (
              <SelectCard
                key={id}
                onClick={() => form.setValue("serviceType", value)}
                isSelected={form.watch("serviceType")?.includes(value)}
                error={!!form.formState.errors.serviceType}
                label={label}
                icon={icon}
              />
            ))}
          </div>
        </div>
        <GradientButton type="submit" size="lg" className="float-end">
          <span className="text-lg">{edit ? "Zapisz" : "Kontynuuj"}</span>{" "}
          <ChevronRight className="min-h-5 min-w-5" />
        </GradientButton>
      </form>
    </Form>
  );
}
