"use client";

import { Form } from "@/components/ui/form";
import {
  serviceSelectionSchema,
  type ServiceSelectionSchema,
} from "@/lib/validation/contact-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { services } from "./data";
import { SelectCard } from "../_components/select-card";
import { useContactFormContext } from "@/context/contact-form-context";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { toast } from "sonner";
import { NextButton } from "../_components/next-button";

export function ServiceSelectionForm() {
  const searchParams = useSearchParams();
  const edit = searchParams.get("edit") === "true";
  const service =
    (searchParams.get("service") as ServiceSelectionSchema["serviceType"]) ??
    undefined;
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

  useEffect(() => {
    if (form.formState.errors.serviceType?.message == null) return;
    toast.error(form.formState.errors.serviceType?.message, {
      position: "top-center",
    });
  }, [form.formState.errors.serviceType?.message]);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
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
        <div>
          <NextButton edit={edit} />
        </div>
      </form>
    </Form>
  );
}
