import { posts } from "@/app/blog/data/posts";
import { CardWrapper } from "@/components/card-wrapper";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { MotionWrapper } from "@/components/motion-wrapper";
import { Badge } from "@/components/ui/badge";
import { H1 } from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function TagPage({
  params,
}: {
  params: Promise<{ tagSlug: string }>;
}) {
  const { tagSlug } = await params;

  const filteredPosts = posts.filter((post) => post.tag.slug === tagSlug);

  if (posts.length === 0) return notFound();
  return (
    <div className="min-h-screen space-y-12 py-28">
      <H1>{filteredPosts[0]?.tag.name}</H1>
      <MaxWidthWrapper>
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <MotionWrapper
              key={index}
              transition={{ delay: index * 0.2 }}
              className="relative h-full"
            >
              <CardWrapper className="group flex h-full flex-col overflow-hidden p-0 hover:scale-100">
                <div className="overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="aspect-video w-full rounded-t-lg object-cover duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <h3 className="text-secondary-blue font-montserrat text-xl font-medium">
                    {post.title}
                  </h3>
                  <p className="text-dark-gray font-open-sans line-clamp-2 text-sm">
                    {post.description}
                  </p>
                </div>
                <Badge className="absolute right-4 top-4 z-50 rounded-full bg-white">
                  <Link
                    href={`/tags/${post.tag.slug}`}
                    className="absolute inset-0"
                  />
                  {post.tag.name}
                </Badge>
                <Link href={`/blog/${post.id}`} className="absolute inset-0" />
              </CardWrapper>
            </MotionWrapper>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
