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
import { useEffect, useTransition } from "react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { toast } from "sonner";
import { FormButton } from "../_components/form-button";
import PageHeader from "../_components/form-header";
import { formAnimationVariants } from "../_components/form-animation-variants";
import { MotionWrapper } from "@/components/motion-wrapper";
import { ChevronRightIcon } from "lucide-react";

export function ServiceSelectionForm() {
  const isMobile = useIsMobile();
  const { newContactFormData, updateContactForm, dataLoaded } =
    useContactFormContext();
  const searchParams = useSearchParams();
  const edit = searchParams.get("edit") === "true";
  const service =
    (searchParams.get("service") as ServiceSelectionSchema["serviceType"]) ??
    undefined;
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const form = useForm<ServiceSelectionSchema>({
    resolver: zodResolver(serviceSelectionSchema),
    defaultValues: {
      serviceType: service,
    },
  });

  function onSubmit(values: ServiceSelectionSchema) {
    startTransition(() => {
      updateContactForm(values);
      router.push(edit ? "/join/form-summary" : "/join/additional-features");
    });
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
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {services.map(
              ({ id, label, fullLabel, value, icon, description }) => (
                <SelectCard
                  key={id}
                  onClick={() => form.setValue("serviceType", value)}
                  isSelected={form.watch("serviceType")?.includes(value)}
                  error={!!form.formState.errors.serviceType}
                  label={label}
                  fullLabel={fullLabel}
                  icon={icon}
                  description={description}
                />
              ),
            )}
          </div>
        </MotionWrapper>
        <div className="h-8">
          <FormButton loading={isPending}>
            <span className="text-base">{edit ? "Zapisz" : "Kontynuuj"}</span>{" "}
            <ChevronRightIcon className="min-h-5 min-w-5" />
          </FormButton>
        </div>
      </form>
    </Form>
  );
}
