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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ctaFormSchema, type CtaFormSchema } from "../lib/validation";
import { LoadingButton } from "@/components/ui/loading-button";
import { useState, useTransition } from "react";
import { ArrowUpRightIcon } from "lucide-react";
import { sendCtaFormAction } from "../actions/send-cta-form";
import { CtaFormAlerts } from "./cta-form-alerts";

export function CtaForm({ typeOfProject }: { typeOfProject?: string }) {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const form = useForm<CtaFormSchema>({
    resolver: zodResolver(ctaFormSchema),
    defaultValues: {
      username: "",
      email: "",
      consent: true,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: CtaFormSchema) {
    setError(null);
    setSuccess(null);
    startTransition(async () => {
      const { error: sendFromError, success: sendFormSuccess } =
        await sendCtaFormAction({
          ...values,
          typeOfProject,
        });
      if (!sendFormSuccess) {
        startTransition(() => {
          setError(sendFromError);
        });
        return;
      }
      startTransition(() => {
        setSuccess(
          "Dziękuję za wysłanie zapytania! Sprawdź swoją skrzynkę mailową — wysłałem do Ciebie szczegóły.",
        );
        form.reset();
      });
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative mx-auto grid max-w-xl gap-4 md:max-w-full md:grid-cols-3"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="relative md:col-span-1">
              <FormLabel>Imię</FormLabel>
              <FormControl>
                <Input placeholder="Jan Kowalski" type="text" {...field} />
              </FormControl>
              <FormMessage className="absolute -top-1.5 right-0 w-min text-nowrap rounded-full px-2 text-sm text-destructive" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative md:col-span-2">
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  placeholder="twój-email@gmail.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute -top-1.5 right-0 w-min text-nowrap rounded-full px-2 text-sm text-destructive" />
            </FormItem>
          )}
        />
        <div className="md:col-span-2">
          <p className="flex items-start px-2 text-sm font-normal leading-5 tracking-wider">
            Wysyłając formularz wyrażasz zgodę na przetwarzanie danych osobowych
            w celu udzielenia odpowiedzi i nawiązania kontaktu.
          </p>
        </div>
        <LoadingButton
          loading={isPending}
          type="submit"
          className="group col-span-1 bg-primary-gradient"
        >
          Wyślij zapytanie
          <ArrowUpRightIcon className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </LoadingButton>
        <div className="md:col-span-3">
          <CtaFormAlerts error={error} success={success} />
        </div>
      </form>
    </Form>
  );
}
