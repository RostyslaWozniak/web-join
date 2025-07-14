import { H2, H3 } from "@/components/ui/typography";
import { tags } from "../data/tags";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { posts } from "../data/posts";
import Image from "next/image";
import { SearchPostForm } from "./search-post-form";

export function BlogSidebar({
  currentPostSlug,
}: {
  currentPostSlug: string | undefined;
}) {
  return (
    <div className="max-w-[500px] space-y-6 lg:space-y-8">
      <SearchPostSection />
      <TagsSection />
      <OtherPostsSection currentPostSlug={currentPostSlug} />
    </div>
  );
}

function SearchPostSection() {
  return (
    <section>
      <H2 className="mb-2 !text-start !text-2xl">Wyszukaj post</H2>
      <SearchPostForm />
    </section>
  );
}

function TagsSection() {
  return (
    <section className="space-y-2">
      <H2 className="!text-start !text-2xl">Tagi</H2>
      <div className="flex flex-wrap gap-2">
        {Object.values(tags).map(({ name, slug }) => (
          <Link key={slug} href={`/blog/tags/${slug}`}>
            <Badge className="rounded-full bg-primary-gradient text-gray-800">
              {name}
            </Badge>
          </Link>
        ))}
      </div>
    </section>
  );
}

function OtherPostsSection({
  currentPostSlug,
}: {
  currentPostSlug: string | undefined;
}) {
  return (
    <section>
      <div className="flex items-center justify-between">
        <H2 className="!text-start !text-2xl">Inne posty</H2>
        <Link href="/blog" className="text-sm/8 text-cyan-600">
          Zobacz więcej
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {posts
          .filter((post) =>
            currentPostSlug ? post.slug !== currentPostSlug : true,
          )
          .slice(0, 2)
          .map((post) => (
            <div key={post.slug} className="my-4">
              <Link href={`/blog/${post.slug}`} className="text-foreground">
                <Image
                  src={post.image}
                  alt="post image"
                  width={200}
                  height={100}
                  className="aspect-video w-full object-cover duration-300 group-hover:scale-105"
                />
                <H3 className="line-clamp-2 !text-lg lg:text-sm">
                  {post.title}
                </H3>
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}
