"use server";

import { env } from "@/env";
import { sendSms } from "@/lib/services/twilio";
import { contactFormSchema } from "@/lib/validation/contact-form-schema";
import { db } from "@/server/db";

export async function sendForm(formData: unknown) {
  const { success, data } = contactFormSchema.safeParse(formData);
  if (!success) {
    return {
      success: false,
      message: "Błędnie wypełniony formularz. Spróbuj ponownie.",
    };
  }
  try {
    await db.contactForm.create({
      data: {
        email: data.email,
        phone: data.phone,
        service: data.serviceType,
        features: data.additionalFeatures.join(", "),
      },
    });
    if (data.email) {
      const existingEmail = await db.subscribers.findUnique({
        where: {
          email: data.email,
        },
      });
      if (!existingEmail) {
        await db.subscribers.create({
          data: {
            email: data.email,
          },
        });
      }
    }

    if (env.NODE_ENV === "production") {
      await sendSms({
        number: env.RECEIVE_SMS_NUMBER,
        message: `Web Join contact form submited. Contact ${data.email?.length ? data.email : data.phone}`,
      });
    }

    return {
      success: true,
      message: "Twoja wiadomość została wysłana.",
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Coś poszło nie tak. Spróbuj wysłać ponownie.",
    };
  }
}
