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
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpRightIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { sendCtaFormAction } from "../actions/send-cta-form";
import { CtaFormAlerts } from "./cta-form-alerts";

export function CtaForm() {
  const params = useParams<{ slug: string }>();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const form = useForm<CtaFormSchema>({
    resolver: zodResolver(ctaFormSchema),
    defaultValues: {
      username: "",
      email: "",
      consent: false,
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
          slug: params.slug,
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
        className="mx-auto grid max-w-xl gap-4 md:max-w-full md:grid-cols-3"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="relative md:col-span-1">
              <FormLabel>Imię</FormLabel>
              <FormControl>
                <Input placeholder="Jan Kowalski" {...field} />
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
                <Input placeholder="twój-email@gmail.com" {...field} />
              </FormControl>
              <FormMessage className="absolute -top-1.5 right-0 w-min text-nowrap rounded-full px-2 text-sm text-destructive" />
            </FormItem>
          )}
        />
        <div className="md:col-span-3">
          <CtaFormAlerts error={error} success={success} />
        </div>
        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="-mt-2 flex items-start gap-x-1 md:col-span-2">
              <FormControl>
                <Checkbox
                  className="mx-2 mt-2.5"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="col-span-11 text-xs font-normal leading-5 tracking-wider">
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                udzielenia odpowiedzi i nawiązania kontaktu.
              </FormLabel>
            </FormItem>
          )}
        />

        <LoadingButton
          loading={isPending}
          type="submit"
          className="group col-span-1 bg-primary-gradient"
        >
          Wyślij zapytanie
          <ArrowUpRightIcon className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </LoadingButton>
      </form>
    </Form>
  );
}
