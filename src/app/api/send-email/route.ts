import { OfferEmail } from "@/components/emails/offer-email";
import { sendEmail } from "@/lib/services/resend";
import { NextResponse } from "next/server";

export async function POST() {
  await sendEmail({
    emails: [
      "rostyslav.vozniak.dev@gmail.com",
      "rostik19wozniak@gmail.com",
      "ewelina.m.teklinska@gmail.com",
    ],
    subject: "Oferta Web Join",
    emailTemplate: OfferEmail(),
  });

  return new NextResponse("OK", { status: 200 });
}
