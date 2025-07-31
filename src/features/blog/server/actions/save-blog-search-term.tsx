"use server";

import { tryCatch } from "@/lib/utils/try-catch";
import { db } from "@/server/db";
import { z } from "zod";

export async function saveBlogSearchTerm(search: string) {
  const {
    data: validatedString,
    success: validationSuccess,
    error: validationError,
  } = z.string().trim().min(1).toLowerCase().safeParse(search);
  if (!validationSuccess) {
    console.log(validationError.message);
    return validationError.message;
  }

  const { error } = await tryCatch(
    db.searchTerm.upsert({
      where: {
        term: validatedString,
      },
      update: {
        count: { increment: 1 },
      },
      create: {
        count: 1,
        term: validatedString,
      },
    }),
  );

  if (error) {
    console.log(error);
  }
}
