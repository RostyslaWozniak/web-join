import OfferEmail from "@/components/emails/offer-email";
import VetAppOfferEmail from "@/components/emails/vet-app-offer-email";
import { env } from "@/env";
import { resend } from "@/lib/services/resend";
import { tryCatch } from "@/lib/utils/try-catch";
import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  emails: z.array(z.string().email()),
});

export async function POST(req: NextRequest) {
  const body: unknown = await req.json();

  const secret = req.headers.get("secret");

  if (!secret || secret !== env.SEND_EMAILS_SECRET) {
    return NextResponse.json({ status: 401, message: "Unauthorized" });
  }

  const isValidBody = bodySchema.safeParse(body);

  if (!isValidBody.success) {
    return NextResponse.json({ status: 400, message: "Invalid body" });
  }

  const emailsSet = [...new Set(isValidBody.data.emails)]; // Ensure unique emails

  const { data: response, error } = await tryCatch(
    resend.batch.send(
      emailsSet.map((email) => ({
        from: `Web Join <${process.env.RESEND_FROM_NAME}@${process.env.RESEND_DOMAIN}>`,
        to: email,
        subject: "Oferta Web Join",
        react: VetAppOfferEmail(),
      })),
    ),
  );

  if (error) {
    return NextResponse.json({
      status: 500,
      message: "Cannot send emails, try again later",
    });
  }

  return NextResponse.json({ status: 200, response });
}
