import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { H1 } from "@/components/ui/typography";
import { posts } from "@/features/blog/data/posts";
import { PostCard } from "@/features/blog/components/post-card";
import { EmptyResult } from "@/components/empty-result";
import { FrownIcon } from "lucide-react";
import { SearchPostForm } from "@/features/blog/components/search-post-form";
import { Breadcrumb } from "@/components/breadcrumb";
import { unslugify } from "@/lib/utils/slugify";
import { type Metadata } from "next";
import { env } from "@/env";
import { getFilteredPosts } from "@/features/blog/lib/get-filtered-posts";
import { cache } from "react";

const getTitle = cache((postsLength: number, searchString: string): string => {
  const title =
    postsLength === 0
      ? `Nie znaleziono postów z wynnikiem - "${searchString}"`
      : postsLength === 1
        ? `Znaleziono ${postsLength} post  z wynnikiem - "${searchString}"`
        : postsLength < 5
          ? `Znaleziono ${postsLength} posty  z wynnikiem - "${searchString}"`
          : `Znaleziono ${postsLength} postów  z wynnikiem - "${searchString}"`;
  return title;
});

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ searchQuery: string }>;
}): Promise<Metadata> => {
  const { searchQuery } = await params;

  const unslugedString = unslugify(searchQuery);

  const filteredPosts = getFilteredPosts(posts, unslugedString);

  const title = getTitle(filteredPosts.length, unslugedString);

  return {
    title,
    description: title,
    openGraph: {
      title,
      description: title,
      url: `${env.NEXT_PUBLIC_BASE_URL}/blog/search/${searchQuery}`,
      images: ["./opengraph-image.jpg"],
    },
    robots: {
      index: false,
      follow: true,
    },
  };
};

export const generateStaticParams = async () => {
  return [];
};

export default async function BlogSearchPage({
  params,
}: {
  params: Promise<{ searchQuery: string }>;
}) {
  const { searchQuery } = await params;

  const unslugedString = unslugify(searchQuery);

  const filteredPosts = getFilteredPosts(posts, unslugedString);

  const title = getTitle(filteredPosts.length, unslugedString);

  return (
    <div>
      <section>
        <H1 className="mx-auto mt-12 max-w-sm text-3xl sm:text-center md:max-w-4xl lg:mt-20 lg:text-5xl">
          {title}
        </H1>
        <div className="mx-auto max-w-7xl pt-8">
          <Breadcrumb />
        </div>
        <div className="mx-auto mt-12 max-w-lg px-4">
          <SearchPostForm q={unslugedString} autoFocus />
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
