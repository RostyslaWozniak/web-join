import { resend } from "@/lib/services/resend";
import { db } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET() {
  const contactData = await db.contactForm.findFirst({
    select: {
      emailId: true,
    },
  });
  if (!contactData) return NextResponse.json({ error: "Email not found" });
  const email = await resend.emails.get(contactData.emailId);
  console.log({ email });

  return NextResponse.json({ success: true, email });
}
