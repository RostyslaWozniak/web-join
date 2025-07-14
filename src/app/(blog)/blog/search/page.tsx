import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { H1 } from "@/components/ui/typography";
import { posts } from "../../../../features/blog/data/posts";
import { PostCard } from "@/features/blog/components/post-card";
import { EmptyResult } from "@/components/empty-result";
import { FrownIcon } from "lucide-react";
import { SearchPostForm } from "@/features/blog/components/search-post-form";

export default async function BlogSearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;

  const filteredPosts = q
    ? posts.filter(
        (post) =>
          post.title.toLocaleLowerCase().includes(q.toLocaleLowerCase()) ||
          post.description
            .toLocaleLowerCase()
            .includes(q.toLocaleLowerCase()) ||
          post.markdown.toLocaleLowerCase().includes(q.toLocaleLowerCase()),
      )
    : posts;
  return (
    <div>
      <section>
        <H1 className="mx-auto mt-12 max-w-sm text-3xl sm:text-center md:max-w-6xl lg:mt-20 lg:text-5xl">
          Wyniki wyszukiwania: &quot;{q}&quot; ( {filteredPosts.length} )
        </H1>
        <div className="mx-auto mt-12 max-w-lg px-4">
          <SearchPostForm q={q} autoFocus />
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
