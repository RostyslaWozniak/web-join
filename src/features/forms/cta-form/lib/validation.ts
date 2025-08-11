import { z } from "zod";

export const ctaFormSchema = z.object({
  username: z
    .string()
    .min(1, "Imię jest wymagane")
    .max(30, "Maksymalnie 30 znaków"),
  email: z
    .string({ message: "Email jest wymagany" })
    .min(1, "Email jest wymagany")
    .max(50, "Email jest zbyt długi")
    .email("Nie poprawny email"),
  consent: z.boolean().refine((arg) => arg),
});

export type CtaFormSchema = z.infer<typeof ctaFormSchema>;
