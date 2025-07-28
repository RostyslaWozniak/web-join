"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CornerDownLeftIcon, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

type SearchPostFormProps = {
  q?: string;
  autoFocus?: boolean;
};

export function SearchPostForm({ q, autoFocus }: SearchPostFormProps) {
  const [search, setSearch] = useState(q ?? "");

  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  function handleSearchPost(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();

    const trimSearch = search.trim();
    if (!trimSearch.length) return;

    startTransition(() => {
      router.push(`/blog/search/${trimSearch}`);
    });
  }

  return (
    <form className="relative w-full">
      <div className="relative flex items-center">
        <Input
          autoFocus={autoFocus}
          placeholder="Wyszukaj post"
          className="h-10 border-0 bg-white pr-24 text-base shadow-md sm:h-10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          className="absolute right-0 h-10 rounded-l-none border-l-0 bg-card px-3 text-xs sm:h-10 sm:text-sm"
          onClick={handleSearchPost}
          disabled={
            !search || isPending || search === q || search.trim() === ""
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
