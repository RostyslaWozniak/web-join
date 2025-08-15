import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("production"),
    // resend
    RESEND_API_KEY: z.string().min(1),
    RESEND_DOMAIN: z.string().min(1),
    RESEND_FROM_NAME: z.string().min(1),
    SEND_EMAILS_SECRET: z.string().min(1),
    // twilio
    TWILIO_AUTH_TOKEN: z.string().min(1),
    TWILIO_ACCOUNT_SID: z.string().min(1),
    TWILIO_PHONE_NUMBER: z.string().min(1),
    RECEIVE_SMS_NUMBER: z.string().min(1),
  },

  client: {
    NEXT_PUBLIC_BASE_URL: z.string().url(),
    // google
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string().min(1),
  },

  runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    // resend
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_DOMAIN: process.env.RESEND_DOMAIN,
    RESEND_FROM_NAME: process.env.RESEND_FROM_NAME,
    SEND_EMAILS_SECRET: process.env.SEND_EMAILS_SECRET,
    // twilio
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
    TWILIO_PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER,
    RECEIVE_SMS_NUMBER: process.env.RECEIVE_SMS_NUMBER,
    // google
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID:
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  emptyStringAsUndefined: true,
});
