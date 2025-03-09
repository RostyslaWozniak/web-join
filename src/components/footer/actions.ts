"use server";

import {
  subscribeFormSchema,
  type SubscribeFormSchema,
} from "@/lib/validation/subscribe-form-schema";
import { db } from "@/server/db";

export async function subscribe(
  data: SubscribeFormSchema,
): Promise<{ message: string; code: number }> {
  const isValidData = subscribeFormSchema.safeParse(data);

  if (!isValidData.success)
    return { message: "Nie prawidłowy email", code: 400 };
  const { email } = isValidData.data;

  const emailExists = await db.contactForm.findUnique({ where: { email } });

  if (!emailExists) {
    await db.contactForm.create({
      data: {
        agreement: true,
        email,
      },
    });
    return { message: "Dziekuje za subskrypcje", code: 201 };
  }

  if (emailExists.agreement) {
    return { message: "Już jesteś subskrybentem", code: 400 };
  }
  await db.contactForm.update({
    where: {
      email,
    },
    data: {
      agreement: true,
    },
  });
  return { message: "Dziekuje za subskrypcje", code: 200 };
}
