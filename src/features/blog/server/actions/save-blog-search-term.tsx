"use server";

import { tryCatch } from "@/lib/utils/try-catch";
import { db } from "@/server/db";
import { z } from "zod";
import { posts } from "../../data/posts";
import { unslugify } from "@/lib/utils/slugify";
import { getFilteredPosts } from "../../lib/get-filtered-posts";

export async function saveBlogSearchTerm(search: string) {
  const {
    data: validatedString,
    success: validationSuccess,
    error: validationError,
  } = z.string().trim().min(1).toLowerCase().safeParse(search);
  if (!validationSuccess) {
    console.error(validationError.message);
    return validationError.message;
  }

  const result = getFilteredPosts(posts, unslugify(validatedString));

  const resultLenght = result.length;

  const { error } = await tryCatch(
    db.searchTerm.upsert({
      where: {
        term: validatedString,
      },
      update: {
        count: { increment: 1 },
        resultLenght,
      },
      create: {
        count: 1,
        term: validatedString,
        resultLenght,
      },
    }),
  );

  if (error) {
    console.error(error);
  }
}
