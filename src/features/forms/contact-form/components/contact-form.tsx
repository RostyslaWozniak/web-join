"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
  contactFormSchema,
  type ContactFormSchema,
} from "../lib/contact-form-schema";
import { LoadingButton } from "@/components/ui/loading-button";
import { useTransition } from "react";
import { sendContactForm } from "../actions/send-contact-form";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      username: "",
      phoneNumber: "",
      email: "",
      message: "",
      consent: false,
    },
  });

  function onSubmit(values: ContactFormSchema) {
    startTransition(async () => {
      const error = await sendContactForm(values);
      if (error) {
        toast.error(error, {
          position: "top-center",
        });
      }
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 sm:space-y-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Imię</FormLabel>
              <FormControl>
                <Input
                  className="text-foreground"
                  placeholder="Jan Kowalski"
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage className="absolute right-0 top-0 w-min text-nowrap rounded-full px-2 text-xs font-semibold text-destructive" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Numer telefonu</FormLabel>
              <FormControl>
                <Input
                  className="text-foreground"
                  placeholder="+48 XXX XXX XXX"
                  type="tel"
                  {...field}
                />
              </FormControl>

              <FormMessage className="absolute right-0 top-0 w-min text-nowrap rounded-full px-2 text-xs font-semibold text-destructive" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  className="text-foreground"
                  placeholder="twój-email@gmail.com"
                  type="email"
                  {...field}
                />
              </FormControl>

              <FormMessage className="absolute right-0 top-0 w-min text-nowrap rounded-full px-2 text-xs font-semibold text-destructive" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Temat rozmowy</FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-32 resize-none rounded-2xl text-foreground"
                  placeholder="Wpisz wiadomość"
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute right-0 top-0 w-min text-nowrap rounded-full px-2 text-xs font-semibold text-destructive" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex items-start gap-x-1">
              <FormControl>
                <Checkbox
                  className="mx-2 mt-3"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="col-span-11 pt-0.5 text-xs font-normal leading-5">
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                udzielenia odpowiedzi i nawiązania kontaktu.
              </FormLabel>
            </FormItem>
          )}
        />
        <LoadingButton
          loading={isPending}
          type="submit"
          className="h-auto w-full !px-6 sm:ml-auto sm:w-auto"
        >
          Wyślij wiadomość <ArrowRight />
        </LoadingButton>
      </form>
    </Form>
  );
}
