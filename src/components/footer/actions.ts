"use server";

import { wait } from "@/lib/utils";
import {
  subscribeFormSchema,
  type SubscribeFormSchema,
} from "@/lib/validation/subscribe-form-schema";

export async function subscribe(data: SubscribeFormSchema) {
  const isValidData = subscribeFormSchema.safeParse(data);
  await wait(3000);
  if (!isValidData.success) throw new Error("Invalid data");
  console.log(data);
}
