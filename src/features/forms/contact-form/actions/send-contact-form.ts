"use server";

import { resend } from "@/lib/services/resend";
import {
  contactFormSchema,
  type ContactFormSchema,
} from "../lib/contact-form-schema";
import { env } from "@/env";
import { db } from "@/server/db";
import { redirect } from "next/navigation";
import { tryCatch } from "@/lib/utils/try-catch";

export async function sendContactForm(
  unsafeData: ContactFormSchema,
): Promise<string> {
  const {
    success: parseSuccess,
    data: parsedData,
    error: parseError,
  } = contactFormSchema.safeParse(unsafeData);
  if (!parseSuccess) {
    console.error(parseError);
    return "Błąd walidacji. Sprawdź czy wszystkie pola są poprawnie wypełnione.";
  }

  const { data: emailData, error: emailError } = await resend.emails.send({
    from: `Web Join <contact-form@${env.RESEND_DOMAIN}>`,
    to: "rostyslav.vozniak.dev@gmail.com",
    subject: "Formularz kontaktowy WebJoin",
    text: JSON.stringify(parsedData),
  });
  if (emailError || !emailData) {
    return "Nie udało się wysłać formularz. Spróbuj ponownie.";
  }

  const { error } = await tryCatch(
    db.contactForm.create({
      data: {
        email: parsedData.email,
        phone: parsedData.phoneNumber,
        emailId: emailData.id,
        consent: parsedData.consent,
      },
    }),
  );
  if (error) {
    return "Coś poszło nie tak. Spróbuj ponownie.";
  }
  redirect(`/success?id=${emailData.id}`);
}
