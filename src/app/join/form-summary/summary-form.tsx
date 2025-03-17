"use client";

import { Form } from "@/components/ui/form";
import {
  type ContactFormSchema,
  contactFormSchema,
} from "@/lib/validation/contact-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { GradientButton } from "@/components/ui/gradient-button";
import { Loader, Loader2, PlayCircle } from "lucide-react";
import { useContactFormContext } from "@/context/contact-form-context";
import { Text } from "@/components/ui/typography";
import { services } from "../service-selection/data";
import { features } from "../additional-features/data";
import { useEffect } from "react";
import { sendForm } from "./action";
import { toast } from "sonner";

export function SummaryForm() {
  const { newContactFormData, resetLocalStorage, dataLoaded } =
    useContactFormContext();
  const router = useRouter();

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(values: ContactFormSchema) {
    if (!newContactFormData.phone && !newContactFormData.email) {
      router.push("/join/contact-method");
      return;
    }
    if (!newContactFormData.serviceType) {
      router.push("/join/service-selection");
      return;
    }
    try {
      const res = await sendForm(values);

      if (!res.success) {
        console.log(res);
        toast.error(res.message);
        router.push("/");
      }
      if (res.success) {
        console.log(res);
        toast.success(res.message);
        resetLocalStorage();
        router.push("/success");
      }
    } catch {
      toast.error("Coś poszło nie tak. Spróbuj wysłać ponownie.");
      router.push("/");
    }
  }

  useEffect(() => {
    form.setValue("phone", newContactFormData.phone ?? "");
    form.setValue("email", newContactFormData.email ?? "");
    form.setValue("serviceType", newContactFormData.serviceType ?? "website");
    form.setValue(
      "additionalFeatures",
      newContactFormData.additionalFeatures ?? [],
    );
  }, [
    form,
    newContactFormData.additionalFeatures,
    newContactFormData.email,
    newContactFormData.phone,
    newContactFormData.serviceType,
  ]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {form.formState.errors.serviceType && (
          <p className="text-destructive">
            {form.formState.errors.serviceType.message}
          </p>
        )}
        {dataLoaded ? (
          <div className="space-y-4">
            <div className="grid place-items-center rounded-2xl border-2 border-muted-foreground bg-background p-6 text-muted-foreground">
              <Text variant="muted">Kontakt</Text>
              {newContactFormData.phone && (
                <p>Telefon: {newContactFormData.phone}</p>
              )}
              {newContactFormData.email && (
                <p>Email: {newContactFormData.email}</p>
              )}
            </div>
            <div className="grid place-items-center rounded-2xl border-2 border-muted-foreground bg-background p-6 text-muted-foreground">
              <Text variant="muted">Wybrana Usługa</Text>
              <div>
                {
                  services.find(
                    (s) => s.value === newContactFormData.serviceType,
                  )?.label
                }
              </div>
            </div>
            {newContactFormData.additionalFeatures && (
              <div className="grid place-items-center rounded-2xl border-2 border-muted-foreground bg-background p-6 text-muted-foreground">
                <Text variant="muted">Dodatkowe usługi</Text>
                <ol>
                  {features.map((s) =>
                    newContactFormData.additionalFeatures?.includes(s.value) ? (
                      <li key={s.value} className="ml-6 list-decimal">
                        {s.label}
                      </li>
                    ) : null,
                  )}
                </ol>
              </div>
            )}
          </div>
        ) : (
          <div className="flex min-h-[500px] items-center justify-center">
            <Loader className="animate-spin" />
          </div>
        )}
        <GradientButton
          type="submit"
          size="lg"
          className="float-end"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="mr-2 min-h-7 min-w-7 animate-spin" />
          ) : (
            <PlayCircle className="mr-2 min-h-7 min-w-7" />
          )}
          <span className="">Join</span>{" "}
        </GradientButton>
      </form>
    </Form>
  );
}
