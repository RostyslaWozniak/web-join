import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { H1 } from "@/components/ui/typography";
import { type Post, posts } from "@/features/blog/data/posts";
import { PostCard } from "@/features/blog/components/post-card";
import { EmptyResult } from "@/components/empty-result";
import { FrownIcon } from "lucide-react";
import { SearchPostForm } from "@/features/blog/components/search-post-form";
import { Breadcrumb } from "@/components/breadcrumb";
import { db } from "@/server/db";
import { unslugify } from "@/lib/utils/slugify";
import { cache } from "react";
import { type Metadata } from "next";
import { env } from "@/env";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ searchQuery: string }>;
}): Promise<Metadata> => {
  const { searchQuery } = await params;

  const unslugedString = unslugify(searchQuery);

  const filteredPosts = getFilteredPosts(posts, unslugedString);

  const title =
    filteredPosts.length === 0
      ? `Nie znaleziono postów z wynnikiem "${unslugedString}" w blogu`
      : filteredPosts.length === 1
        ? `Znaleziono ${filteredPosts.length} post  z wynnikiem "${unslugedString}" w blogu`
        : filteredPosts.length < 5
          ? `Znaleziono ${filteredPosts.length} posty  z wynnikiem "${unslugedString}" w blogu`
          : `Znaleziono ${filteredPosts.length} postów  z wynnikiem "${unslugedString}" w blogu`;

  return {
    title,
    description: title,
    openGraph: {
      title,
      description: title,
      url: `${env.NEXT_PUBLIC_BASE_URL}/blog/search/${searchQuery}`,
      images: ["./opengraph-image.jpg"],
    },
  };
};

export const generateStaticParams = async () => {
  const searchTerms = await db.searchTerm.findMany({
    select: {
      term: true,
    },
    orderBy: {
      count: "desc",
    },
    take: 10,
  });
  return searchTerms.map((t) => ({ searchQuery: t.term }));
};

export default async function BlogSearchPage({
  params,
}: {
  params: Promise<{ searchQuery: string }>;
}) {
  const { searchQuery } = await params;

  const unslugedString = unslugify(searchQuery);

  const filteredPosts = getFilteredPosts(posts, unslugedString);

  const title =
    filteredPosts.length === 0
      ? `Nie znaleziono postów z wynnikiem "${unslugedString}" w blogu`
      : filteredPosts.length === 1
        ? `Znaleziono ${filteredPosts.length} post  z wynnikiem "${unslugedString}" w blogu`
        : filteredPosts.length < 5
          ? `Znaleziono ${filteredPosts.length} posty  z wynnikiem "${unslugedString}" w blogu`
          : `Znaleziono ${filteredPosts.length} postów  z wynnikiem "${unslugedString}" w blogu`;

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

function _getFilteredPosts(
  posts: Post[], // Assuming Post type has title, description, markdown
  searchQuery: string,
): Post[] {
  const normalizedSearchQuery = searchQuery.toLocaleLowerCase().trim();
  const keywords = normalizedSearchQuery.split(/\s+/).filter(Boolean);

  if (keywords.length === 0) {
    return posts;
  }

  return posts.filter((post) => {
    const postTitle = post.title.toLocaleLowerCase();
    const postDescription = post.description.toLocaleLowerCase();
    const postMarkdown = post.markdown.toLocaleLowerCase();

    const allKeywordsMatch = keywords.every((keyword) => {
      return (
        postTitle.includes(keyword) ||
        postDescription.includes(keyword) ||
        postMarkdown.includes(keyword)
      );
    });

    return allKeywordsMatch;
  });
}

const getFilteredPosts = cache(_getFilteredPosts);
