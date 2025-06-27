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
import { useEffect, useTransition } from "react";
import { sendForm } from "./action";
import { toast } from "sonner";
import Link from "next/link";

export function SummaryForm() {
  const { newContactFormData, resetLocalStorage } = useContactFormContext();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  function onSubmit(values: ContactFormSchema) {
    if (!newContactFormData.phone && !newContactFormData.email) {
      router.push("/join/contact-method?edit=true");
      return;
    }
    if (!newContactFormData.serviceType) {
      router.push("/join/service-selection?edit=true");
      return;
    }
    try {
      startTransition(async () => {
        const res = await sendForm(values);

        if (!res.success) {
          startTransition(() => {
            toast.error(res.message);
            router.push("/");
          });
        }
        if (res.success) {
          startTransition(() => {
            resetLocalStorage();
            router.push("/success");
          });
        }
      });
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
          contact={[
            {
              method: "Telefon",
              value: newContactFormData.phone,
            },
            {
              method: "Email",
              value: newContactFormData.email,
            },
          ]}
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
          size="default"
          className="float-end"
          textSize="text-base"
          disabled={isPending}
        >
          {isPending ? (
            <Loader2 className="mr-2 min-h-7 min-w-7 animate-spin" />
          ) : (
            <PlayCircle className="mr-2 min-h-7 min-w-7" />
          )}
          <span className="">Dołącz</span>{" "}
        </GradientButton>
      </form>
    </Form>
  );
}

const Summary = ({
  contact,
  service,
  features,
}: {
  contact: { method: "Telefon" | "Email"; value: string | undefined }[];
  service: string;
  features: string[];
}) => {
  return (
    <div className="mx-auto w-full overflow-hidden rounded-2xl bg-card-gradient px-4 py-6 md:p-6">
      <h3 className="mb-4 text-start text-xl font-semibold md:text-2xl">
        Podsumowanie Twojego wyboru
      </h3>

      <div className="space-y-4">
        {/* Kontakt */}
        <div className="relative flex items-center justify-between border-b pb-2">
          <div className="space-y-2">
            <Text variant="muted">Kontakt:</Text>
            {contact.map(({ method, value }, index) => (
              <div key={index}>
                {value && (
                  <Text>
                    {method} ({value})
                  </Text>
                )}
              </div>
            ))}
          </div>

          <EditLink href="/join/contact-method?edit=true" />
        </div>

        {/* Usługa */}
        <div className="relative flex items-center justify-between border-b pb-2">
          <div className="space-y-2">
            <Text variant="muted">Usługa:</Text>
            <Text className="font-semibold">{service}</Text>
          </div>
          <EditLink href="/join/service-selection?edit=true" />
        </div>

        {/* Dodatkowe opcje */}
        <div className="relative flex items-center justify-between">
          <div className="space-y-2">
            <Text variant="muted">Dodatkowe opcje:</Text>
            {features.length > 0 ? (
              <ul className="list-inside list-disc text-lg">
                {features.map((feature, index) => (
                  <li key={index} className="flex gap-2">
                    <div className="mt-1 h-full">
                      <CheckCircle
                        size={18}
                        className="text-accent-green"
                      />{" "}
                    </div>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <Text>
                Nie zaznaczyłeś żadnych dodatkowych opcji – zawsze możemy je
                dodać później!
              </Text>
            )}
          </div>

          <EditLink href="/join/additional-features?edit=true" />
        </div>
      </div>
    </div>
  );
};

function EditLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="absolute right-0 top-0 flex flex-col items-center gap-y-1 text-foreground hover:underline"
    >
      <Edit2 className="size-4" />
      <span className="ml-2 text-xs">edytuj</span>
      <span className="sr-only">edytuj kontakt</span>
      <span className="absolute -inset-2 [@media(pointer:fine)]:hidden" />
    </Link>
  );
}
