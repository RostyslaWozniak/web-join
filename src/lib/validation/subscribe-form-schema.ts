import { z } from "zod";

export const subscribeFormSchema = z.object({
  email: z
    .string()
    .email("Wpisz poprawny adres e-mail (np. nazwisko@domena.com)."),
});

export type SubscribeFormSchema = z.infer<typeof subscribeFormSchema>;
