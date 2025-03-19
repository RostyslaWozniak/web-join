import OfferEmail from "@/components/emails/offer-email";
import { sendEmail } from "@/lib/services/resend";
import { NextResponse } from "next/server";
import pMap from "p-map";
import type { CreateEmailResponseSuccess, ErrorResponse } from "resend";

const emails = [
  "rostik19wozniak@icloud.com",
  "rostik19wozniak@gmail.com",
  "ewelina.m.teklinska@gmail.com",
  "rostyslav.vozniak.dev@gmail.com",
];

export async function POST() {
  const emailsSet = [...new Set(emails)]; // Ensure unique emails
  const concurrencyLimit = 2; // Max 2 requests per second
  const response: (CreateEmailResponseSuccess | ErrorResponse | null)[] = [];

  await pMap(
    emailsSet,
    async (email) => {
      const res = await sendEmail({
        email: email,
        subject: "Oferta Web Join",
        emailTemplate: OfferEmail(),
      });
      response.push(res);

      // Delay of 500ms to respect the 2 requests/sec limit
      await new Promise((resolve) => setTimeout(resolve, 500));
    },
    { concurrency: concurrencyLimit },
  );

  return NextResponse.json({ status: 200, response });
}
