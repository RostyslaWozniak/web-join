"use server";

import { env } from "@/env";
import { resend } from "@/lib/services/resend";
import {
  contactFormSchema,
  type ContactFormSchema,
} from "@/lib/validation/contact-form-schema";
import { db } from "@/server/db";

export async function sendForm(
  formData: ContactFormSchema,
): Promise<
  { data: { id: string }; error: null } | { data: null; error: string }
> {
  const { success: parseSuccess, data: parsedData } =
    contactFormSchema.safeParse(formData);
  if (!parseSuccess || !parsedData) {
    return {
      data: null,
      error: "Błędnie wypełniony formularz. Spróbuj ponownie.",
    };
  }
  try {
    if (parsedData.email) {
      const existingEmail = await db.subscribers.findUnique({
        where: {
          email: parsedData.email,
        },
      });
      if (!existingEmail) {
        await db.subscribers.create({
          data: {
            email: parsedData.email,
          },
        });
      }
    }

    const { data: emailData, error: emailError } = await resend.emails.send({
      from: `Web Join <${env.RESEND_FROM_NAME}@${env.RESEND_DOMAIN}>`,
      to: "rostyslav.vozniak.dev@gmail.com",
      subject: "Oferta Web Join",
      text: `Nowa oferta Web Join. Dane kontaktowe: ${JSON.stringify(parsedData)}`,
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
        phone: parsedData.phone,
        message: JSON.stringify(parsedData),
        consent: true,
        emailId: emailData.id,
      },
    });

    return {
      data: emailData,
      error: null,
    };
  } catch (err) {
    console.log(err);
    return {
      data: null,
      error: "Coś poszło nie tak. Spróbuj wysłać ponownie.",
    };
  }
}
