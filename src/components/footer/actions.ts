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

  try {
    const emailExists = await db.subscribers.findUnique({ where: { email } });

    if (!emailExists) {
      await db.subscribers.create({
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
    await db.subscribers.update({
      where: {
        email,
      },
      data: {
        agreement: true,
      },
    });
    return { message: "Dziekuje za subskrypcje", code: 200 };
  } catch (err) {
    console.log(err);
    return {
      message: "Coś poszło nie tak. Spróbuj wysłać ponownie.",
      code: 500,
    };
  }
}
