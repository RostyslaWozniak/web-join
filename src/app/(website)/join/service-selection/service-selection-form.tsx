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
import { useIsMobile } from "@/hooks/use-is-mobile";

export function ServiceSelectionForm({
  edit,
  service,
}: {
  edit: boolean;
  service: ServiceSelectionSchema["serviceType"] | undefined;
}) {
  const router = useRouter();
  const isMobile = useIsMobile();
  const { newContactFormData, updateContactForm, dataLoaded } =
    useContactFormContext();

  const form = useForm<ServiceSelectionSchema>({
    resolver: zodResolver(serviceSelectionSchema),
    defaultValues: {
      serviceType: service,
    },
  });

  function onSubmit(values: ServiceSelectionSchema) {
    updateContactForm(values);
    router.push(edit ? "/join/form-summary" : "/join/additional-features");
  }

  useEffect(() => {
    if (dataLoaded && (service || newContactFormData.serviceType)) {
      if (service) {
        form.setValue("serviceType", service);
      } else if (newContactFormData.serviceType) {
        form.setValue("serviceType", newContactFormData.serviceType);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newContactFormData.serviceType]);

  useEffect(() => {
    if (isMobile) {
      scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [isMobile]);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map(({ id, label, value, icon, description }) => (
            <SelectCard
              key={id}
              onClick={() => form.setValue("serviceType", value)}
              isSelected={form.watch("serviceType")?.includes(value)}
              error={!!form.formState.errors.serviceType}
              label={label}
              icon={icon}
              description={description}
            />
          ))}
        </div>
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <Text size="sm" className="mb-2 text-destructive">
            {form.formState.errors.serviceType?.message}
          </Text>
          <GradientButton type="submit" size="default" className="float-end">
            <span className="text-lg">{edit ? "Zapisz" : "Kontynuuj"}</span>{" "}
            <ChevronRight className="min-h-5 min-w-5" />
          </GradientButton>
        </div>
      </form>
    </Form>
  );
}
