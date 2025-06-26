"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { H2 } from "@/components/ui/typography";
import { CornerDownLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchPostForm() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  function handleSearchPost(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();
    router.push(`/blog/search?q=${search}`);
  }

  return (
    <form className="w-full">
      <H2 className="mb-2 !text-start !text-2xl">Wyszukaj post</H2>
      <div className="relative flex items-center">
        <Input
          placeholder="Wpisz "
          className="h-10 pr-24"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          className="absolute right-0 !h-10 rounded-l-none border border-l-0 bg-card px-3 text-xs"
          onClick={handleSearchPost}
          disabled={!search}
        >
          <CornerDownLeftIcon className="hidden h-4 w-4 sm:inline" /> Szukaj
        </Button>
      </div>
    </form>
  );
}
