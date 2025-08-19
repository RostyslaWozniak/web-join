import { AnimatedText } from "@/components/animations/animated-text";
import { GridBackground } from "@/components/grid-background";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { H1 } from "@/components/ui/typography";
import { posts } from "@/features/blog/data/posts";
import { PostCard } from "@/features/blog/components/post-card";
import { SearchPostForm } from "@/features/blog/components/search-post-form";
import { Breadcrumb } from "@/components/breadcrumb";
import { env } from "@/env";

export default async function BlogPage() {
  return (
    <div>
      <section>
        <GridBackground maskGradient className="py-12 md:py-20">
          <MaxWidthWrapper className="relative z-10 flex flex-col items-center">
            <H1 className="max-w-sm sm:text-center md:max-w-6xl">
              <AnimatedText
                className="md:justify-center"
                text="Blog o stronach internetowych dla lokalnych firm"
                accentWords={["stronach", "lokalnych", "firm"]}
              />
            </H1>
          </MaxWidthWrapper>
        </GridBackground>
      </section>
      <section>
        <div className="mx-auto max-w-7xl pt-6">
          <Breadcrumb />
        </div>
        <div className="mx-auto mt-12 max-w-lg px-4">
          <SearchPostForm autoFocus />
        </div>
        <MaxWidthWrapper className="mx-auto flex items-center px-4 pb-12 pt-10 md:py-20 lg:px-0">
          <div className="mb-12 grid gap-8 md:grid-cols-3">
            {posts
              .filter((post) =>
                env.NODE_ENV === "production" ? post.published : true,
              )
              .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
              .map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
