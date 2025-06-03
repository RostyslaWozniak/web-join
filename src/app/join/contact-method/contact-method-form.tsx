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
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GradientButton } from "@/components/ui/gradient-button";
import { useRouter } from "next/navigation";
import { SelectCard } from "@/app/join/_components/select-card";
import { useContactFormContext } from "@/context/contact-form-context";
import { contactMethods } from "./data";

export function ContactMethodForm({ edit }: { edit?: boolean }) {
  const [selectedMethod, setSelectedMethod] = useState<
    keyof ContactMethodSchema | null
  >("phone");

  const { newContactFormData, updateContactForm } = useContactFormContext();

  const router = useRouter();

  const form = useForm<ContactMethodSchema>({
    resolver: zodResolver(contactMethodSchema),

    defaultValues: {
      email: "",
      phone: "",
    },
  });

  function onSubmit(values: ContactMethodSchema) {
    updateContactForm(values);
    router.push("/join/form-summary");
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

        <GradientButton type="submit" size="default" className="float-end">
          <span className="text-xl">{edit ? "Zapisz" : "Kontynuuj"}</span>{" "}
          <ChevronRight className="min-h-5 min-w-5" />
        </GradientButton>
      </form>
    </Form>
  );
}
