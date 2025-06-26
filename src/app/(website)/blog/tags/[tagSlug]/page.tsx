import { posts } from "@/app/(website)/blog/data/posts";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { H1 } from "@/components/ui/typography";
import { notFound } from "next/navigation";
import { tags } from "../../data/tags";
import { PostCard } from "../../_components/post-card";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tagSlug: string }>;
}) {
  const { tagSlug } = await params;
  const tag = Object.values(tags).find((tag) => tag.slug === tagSlug);

  if (!tag) return notFound();
  return {
    title: tag.title,
    description: tag.description,
    openGraph: {
      title: tag.title,
      description: tag.description,
    },
    twitter: {
      title: tag.title,
      description: tag.description,
    },
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tagSlug: string }>;
}) {
  const { tagSlug } = await params;

  const filteredPosts = posts.filter((post) => post.tag.slug === tagSlug);

  if (posts.length === 0) return notFound();
  return (
    <div className="min-h-screen space-y-12 lg:py-14">
      <H1 className="mx-auto mt-12 max-w-sm text-3xl sm:text-center md:max-w-6xl lg:text-5xl">
        {filteredPosts[0]?.tag.title}
      </H1>
      <MaxWidthWrapper>
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
