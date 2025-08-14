import { z } from "zod";

export const contactFormSchema = z.object({
  username: z
    .string()
    .min(1, "Imię jest wymagane")
    .max(30, "Maksymalnie 30 znaków"),
  phoneNumber: z.preprocess(
    (input) => {
      if (typeof input !== "string") return input;

      // Remove everything except digits
      const digits = input.replace(/\D/g, "");

      // Check if the number starts with 48 or not, and format accordingly
      if (digits.startsWith("48") && digits.length === 11) {
        // Already has country code
        return `+48 ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`;
      } else if (digits.length === 9) {
        // No country code, add +48
        return `+48 ${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
      }

      return input; // Let the validation fail for anything else
    },
    z
      .string()
      .regex(/^\+48 \d{3} \d{3} \d{3}$/, "Numer telefonu jest niepoprawny."),
  ),
  email: z
    .string()
    .email("Nie poprawny email")
    .min(1, "Email jest wymagany")
    .max(50, "Maksymalnie 50 znaków"),
  message: z.string().max(1000, "Maksymalnie 1000 znaków").optional(),
  consent: z.boolean().refine((arg) => arg),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
