"use server";

import { resend } from "@/lib/services/resend";
import {
  contactFormSchema,
  type ContactFormSchema,
} from "../lib/contact-form-schema";
import { env } from "@/env";
import { db } from "@/server/db";

export async function sendContactForm(
  unsafeData: ContactFormSchema,
): Promise<
  { data: { id: string }; error: null } | { data: null; error: string }
> {
  const {
    success: parseSuccess,
    data: parsedData,
    error: parseError,
  } = contactFormSchema.safeParse(unsafeData);
  if (!parseSuccess) {
    console.error(parseError);
    return {
      data: null,
      error:
        "Błąd walidacji. Sprawdź czy wszystkie pola są poprawnie wypełnione.",
    };
  }
  try {
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: `Web Join <contact-form@${env.RESEND_DOMAIN}>`,
      to: "rostyslav.vozniak.dev@gmail.com",
      subject: "Formularz kontaktowy WebJoin",
      text: JSON.stringify(parsedData),
    });
    if (emailError || !emailData) {
      return {
        data: null,
        error: "Nie udało się wysłać formularz. Spróbuj ponownie.",
      };
    }

    await db.contactForm.create({
      data: {
        email: parsedData.email,
        phone: parsedData.phoneNumber,
        emailId: emailData.id,
        consent: parsedData.consent,
      },
    });
    return { data: emailData, error: null };
  } catch {
    return { data: null, error: "Coś poszło nie tak. Spróbuj ponownie." };
  }
}
