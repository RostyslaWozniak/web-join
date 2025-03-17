import { env } from "@/env";
import { Twilio } from "twilio";

const client = new Twilio(env.TWILIO_ACCOUNT_SID, env.TWILIO_AUTH_TOKEN);

export async function sendSms({
  number,
  message,
}: {
  number: string;
  message: string;
}) {
  await client.messages.create({
    body: message,
    from: env.TWILIO_PHONE_NUMBER,
    to: number,
  });
}
