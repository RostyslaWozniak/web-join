"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  subscribeFormSchema,
  type SubscribeFormSchema,
} from "@/lib/validation/subscribe-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Text } from "../ui/typography";
import { LoadingButton } from "@/components/ui/loading-button";
import { toast } from "sonner";
import { subscribe } from "./actions";
import { useState } from "react";

export function SubscribeForm() {
  const [isPending, setIsPending] = useState(false);
  const form = useForm<SubscribeFormSchema>({
    resolver: zodResolver(subscribeFormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: SubscribeFormSchema) {
    try {
      setIsPending(true);
      const res = await subscribe(values);
      if (res.code === 201 || res.code === 200) {
        toast.success(res.message);
        form.reset();
      } else if (res.code === 400) {
        toast.warning(res.message);
      }
    } catch {
      toast.error("Coś poszło nie tak");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Text size="lg" className="">
                  Zapisz się do newslettera
                </Text>
              </FormLabel>

              <FormMessage />
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <FormControl>
                  <Input
                    placeholder="Wpisz swoój email"
                    className="h-12 w-full rounded-full pl-4 sm:h-10"
                    {...field}
                  />
                </FormControl>
                <LoadingButton
                  type="submit"
                  loading={isPending}
                  size="default"
                  variant="secondary"
                  className="h-12 w-full text-white sm:h-10 sm:w-min"
                >
                  Zapisz się
                </LoadingButton>
              </div>
              <FormDescription className="max-w-lg text-foreground/80">
                Zapisując się, zgadzasz się na otrzymywanie aktualizacji i
                akceptujesz naszą Politykę prywatności.
              </FormDescription>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
