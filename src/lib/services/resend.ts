import { env } from "@/env";
import { Resend } from "resend";

export const resend = new Resend(env.RESEND_API_KEY);

export async function sendEmail({
  emails,
  subject,
  emailTemplate: EmailTemplate,
  name = env.RESEND_FROM_NAME,
}: {
  emails: string[] | null;
  subject: string;
  emailTemplate: React.ReactNode;
  name?: string;
}) {
  if (!emails) return null;
  const { data, error } = await resend.emails.send({
    from: `Web Join <${name}@${env.RESEND_DOMAIN}>`,
    to: emails,
    subject,
    react: EmailTemplate,
  });

  if (error) {
    console.log({ error });
  }
  return data;
}
