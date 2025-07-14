"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  contactMethodSchema,
  type ContactMethodSchema,
} from "@/lib/validation/contact-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { SelectCard } from "@/app/(website)/join/_components/select-card";
import { useContactFormContext } from "@/context/contact-form-context";
import { contactMethods } from "./data";
import { FormButton } from "../_components/form-button";

import PageHeader from "../_components/form-header";
import { ChevronRightIcon } from "lucide-react";
import { FormAnimateWrapper } from "../_components/form-animate-wrapper";

export function ContactMethodForm() {
  const [selectedMethod, setSelectedMethod] = useState<
    keyof ContactMethodSchema | null
  >("phone");
  const searchParams = useSearchParams();
  const edit = searchParams.get("edit") === "true";

  const { newContactFormData, updateContactForm } = useContactFormContext();

  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const form = useForm<ContactMethodSchema>({
    resolver: zodResolver(contactMethodSchema),

    defaultValues: {
      email: "",
      phone: "",
    },
  });

  function onSubmit(values: ContactMethodSchema) {
    startTransition(() => {
      updateContactForm(values);
      router.push("/join/form-summary");
    });
  }

  useEffect(() => {
    setSelectedMethod(newContactFormData.email ? "email" : "phone");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newContactFormData.email]);

  useEffect(() => {
    form.setValue("email", newContactFormData.email ?? "");
    form.setValue("phone", newContactFormData.phone ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newContactFormData.email, newContactFormData.phone]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormAnimateWrapper show={!isPending}>
          <PageHeader
            title="Jak najlepiej się z Tobą skontaktować?"
            subtitle="Wybierz swój preferowany sposób kontaktu – skontaktuję się z Tobą w ciągu 24h, aby odpowiedzieć na Twoje pytania i omówić szczegóły."
          />
          <div className="grid grid-cols-2 gap-4">
            {contactMethods.map(({ id, label, value, icon }) => (
              <SelectCard
                key={id}
                onClick={() => setSelectedMethod(value)}
                isSelected={selectedMethod === value}
                error={
                  selectedMethod
                    ? !!(
                        form.formState.errors[selectedMethod] &&
                        selectedMethod === value
                      )
                    : !!form.formState.errors[value]
                }
                label={label}
                icon={icon}
              />
            ))}
          </div>
          {selectedMethod === "phone" && (
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Wpisz swój numer telefonu</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+48 123 456 789"
                      {...field}
                      name="phone"
                      type="tel"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {selectedMethod === "email" && (
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Wpisz swój email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@gmail.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </FormAnimateWrapper>
        <div>
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
