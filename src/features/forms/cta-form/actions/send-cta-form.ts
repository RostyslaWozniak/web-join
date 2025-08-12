"use server";

import { z } from "zod";
import { ctaFormSchema, type CtaFormSchema } from "../lib/validation";
import { resend } from "@/lib/services/resend";
import { env } from "@/env";
import CtaFormResponseEmail from "@/components/emails/cta-form-response-email";
import { problemsData } from "@/data/problems";
import { db } from "@/server/db";

type SendCtaFormActionArgs = CtaFormSchema & { slug: string };

type SendCtaFormActionReturnType =
  | { error: string; success: false }
  | { error: null; success: true };

export async function sendCtaFormAction(
  unsafeData: SendCtaFormActionArgs,
): Promise<SendCtaFormActionReturnType> {
  const { data: validatedData, success: validationSuccess } = ctaFormSchema
    .extend({ slug: z.string() })
    .safeParse(unsafeData);
  if (!validationSuccess) {
    return {
      error: "Błąd walidacji",
      success: false,
    };
  }

  const service =
    problemsData.find((p) => p.slug === validatedData.slug)?.title ?? null;

  const { data, error } = await sendEmailToClient(
    { name: validatedData.username, email: validatedData.email },
    service,
  );
  if (error || !data) {
    return {
      error: "Nie udało się wysłać zapytania. Spróbuj ponownie.",
      success: false,
    };
  }
  try {
    await db.contactForm.create({
      data: {
        emailId: data.id,
        consent: validatedData.consent,
        email: validatedData.email,
        message: `Widomość wysłana przez CTA form problem: ${service}`,
      },
    });
    return {
      error: null,
      success: true,
    };
  } catch (err) {
    console.error(err);
    return {
      error: "Nie udało się wysłać zapytania. Spróbuj ponownie.",
      success: false,
    };
  }
}

async function sendEmailToClient(
  client: { name: string; email: string },
  service: string | null,
) {
  const sender = "Rostyslav Vozniak";
  const { data, error } = await resend.emails.send({
    from: `${sender} <rostyslav-vozniak@${env.RESEND_DOMAIN}>`,
    to: client.email,
    subject: "Ustalmy termin naszej bezpłatnej rozmowy 🚀",
    react: CtaFormResponseEmail({ clientName: client.name, sender, service }),
  });
  return { data, error };
}
