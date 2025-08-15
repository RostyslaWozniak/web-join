"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CornerDownLeftIcon, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { saveBlogSearchTerm } from "../server/actions/save-blog-search-term";
import { slugify } from "@/lib/utils/slugify";

type SearchPostFormProps = {
  q?: string;
  autoFocus?: boolean;
};

export function SearchPostForm({ q, autoFocus }: SearchPostFormProps) {
  const [search, setSearch] = useState(q?.toLocaleLowerCase() ?? "");

  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  function handleSearchPost(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();

    const slug = slugify(search);
    if (slug.length === 0) return;

    startTransition(async () => {
      router.push(`/blog/search/${slug}`);
    });
    void saveBlogSearchTerm(slug);
  }

  return (
    <form className="relative w-full">
      <div className="relative flex items-center">
        <Input
          autoFocus={autoFocus}
          placeholder="Wyszukaj post"
          className="h-10 border-0 bg-white pr-24 text-base shadow-md sm:h-10"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        />
        <Button
          className="absolute right-0 h-10 min-h-10 w-auto rounded-l-none border-l-0 bg-card px-3 text-xs text-gray-900 sm:h-10 sm:text-sm"
          onClick={handleSearchPost}
          disabled={
            !search ||
            isPending ||
            search === q?.toLocaleLowerCase() ||
            search.trim() === ""
          }
        >
          {isPending ? (
            <Loader className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <CornerDownLeftIcon className="hidden h-4 w-4 sm:inline" />
          )}{" "}
          Szukaj
        </Button>
      </div>
    </form>
  );
}
