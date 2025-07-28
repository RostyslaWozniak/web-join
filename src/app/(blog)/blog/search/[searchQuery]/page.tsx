import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { H1 } from "@/components/ui/typography";
import { posts } from "@/features/blog/data/posts";
import { PostCard } from "@/features/blog/components/post-card";
import { EmptyResult } from "@/components/empty-result";
import { FrownIcon } from "lucide-react";
import { SearchPostForm } from "@/features/blog/components/search-post-form";
import { Breadcrumb } from "@/components/breadcrumb";

export const dynamic = "force-static";

export default async function BlogSearchPage({
  params,
}: {
  params: Promise<{ searchQuery: string }>;
}) {
  const { searchQuery } = await params;

  const decodedSearch = decodeURIComponent(searchQuery);
  if (!decodedSearch) {
    console.log(decodedSearch);
    return null;
  }
  const filteredPosts = posts.filter(
    (post) =>
      post.title
        .toLocaleLowerCase()
        .includes(decodedSearch.toLocaleLowerCase()) ||
      post.description
        .toLocaleLowerCase()
        .includes(decodedSearch.toLocaleLowerCase()) ||
      post.markdown
        .toLocaleLowerCase()
        .includes(decodedSearch.toLocaleLowerCase()),
  );
  return (
    <div>
      <section>
        <H1 className="mx-auto mt-12 max-w-sm text-3xl sm:text-center md:max-w-6xl lg:mt-20 lg:text-5xl">
          Wyniki wyszukiwania: &quot;{decodedSearch}&quot; ({" "}
          {filteredPosts.length} )
        </H1>
        <div className="mx-auto max-w-7xl pt-8">
          <Breadcrumb />
        </div>
        <div className="mx-auto mt-12 max-w-lg px-4">
          <SearchPostForm q={decodedSearch} autoFocus />
        </div>
      </section>
      <section>
        <MaxWidthWrapper className="mx-auto flex flex-col items-center px-4 pb-12 pt-20 md:py-20 lg:px-4">
          {filteredPosts.length > 0 ? (
            <div className="mb-12 grid gap-8 md:grid-cols-3">
              {filteredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <EmptyResult
              title="Brak wyników wyszukiwania"
              description="Niestety nie znaleziono wyników wyszukiwania."
              icon={FrownIcon}
              className="w-full"
            />
          )}
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
