"use server";

import { env } from "@/env";
import { resend } from "@/lib/services/resend";
import { type FormData } from "@/lib/validation/vet-research-form";

export async function sendVetSearchForm(formData: FormData) {
  const { error } = await resend.emails.send({
    from: `Formularz Badawczy VetApp <form@${env.RESEND_DOMAIN}>`,
    to: "rostyslav.vozniak.dev@gmail.com",
    subject: "Formularz Badawczy VetApp",
    text: JSON.stringify(formData),
  });

  if (error) {
    console.log({ error });
    return error;
  }
  return null;
}
