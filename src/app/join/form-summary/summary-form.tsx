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
import { CheckCircle, Edit2, Loader2, PlayCircle } from "lucide-react";
import { useContactFormContext } from "@/context/contact-form-context";
import { Text } from "@/components/ui/typography";
import { services } from "../service-selection/data";
import { features } from "../additional-features/data";
import { useEffect } from "react";
import { sendForm } from "./action";
import { toast } from "sonner";
import Link from "next/link";

export function SummaryForm() {
  const { newContactFormData, resetLocalStorage } = useContactFormContext();
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
        toast.error(res.message);
        router.push("/");
      }
      if (res.success) {
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
        <Summary
          contactMethod={newContactFormData.phone ? "Telefon" : "Email"}
          contactValue={
            newContactFormData.phone?.length
              ? newContactFormData.phone
              : newContactFormData.email!
          }
          service={
            services.find((s) => s.value === newContactFormData.serviceType)
              ?.label ?? ""
          }
          features={
            newContactFormData.additionalFeatures?.map(
              (feature) =>
                features.find((f) => f.value === feature)?.label ?? "",
            ) ?? []
          }
        />

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

const Summary = ({
  contactMethod,
  contactValue,
  service,
  features,
}: {
  contactMethod: string;
  contactValue: string;
  service: string;
  features: string[];
}) => {
  return (
    <div className="mx-auto w-full overflow-hidden rounded-2xl bg-card-gradient px-2 py-6 md:p-6">
      <h2 className="mb-4 text-start text-2xl font-semibold">
        Podsumowanie Twojego wyboru
      </h2>

      <div className="space-y-4">
        {/* Kontakt */}
        <div className="relative flex items-center justify-between border-b pb-2">
          <div>
            <Text variant="muted">Wybrałeś kontakt przez:</Text>
            <Text>
              {contactMethod} ({contactValue})
            </Text>
          </div>

          <EditLink href="/join/contact-method#form" />
        </div>

        {/* Usługa */}
        <div className="relative flex items-center justify-between border-b pb-2">
          <div>
            <Text variant="muted">Interesuje Cię:</Text>
            <Text className="font-semibold">{service}</Text>
          </div>
          <EditLink href="/join/service-selection#form" />
        </div>

        {/* Dodatkowe opcje */}
        <div className="relative flex items-center justify-between">
          <div>
            <Text variant="muted">Dodatkowe opcje:</Text>
            {features.length > 0 ? (
              <ul className="list-inside list-disc text-lg">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-accent-green" />{" "}
                    {feature}
                  </li>
                ))}
              </ul>
            ) : (
              <Text className="text-lg font-medium">
                Nie zaznaczyłeś żadnych dodatkowych opcji – zawsze możemy je
                dodać później!
              </Text>
            )}
          </div>

          <EditLink href="/join/additional-features#form" />
        </div>
      </div>
    </div>
  );
};

function EditLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="absolute right-0 top-0 flex items-center text-foreground hover:underline"
    >
      <Edit2 className="size-4" />
      <span className="ml-2 hidden text-xs sm:block">edytuj</span>
    </Link>
  );
}
