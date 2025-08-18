import { type Post } from "../data/posts";
import { CardWrapper } from "@/components/card-wrapper";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { haveDaysPassedSince } from "@/lib/utils/date";

export function PostCard({ post }: { post: Post }) {
  const isNew = haveDaysPassedSince(post.createdAt, 3);
  return (
    <CardWrapper className="group relative isolate flex h-full flex-col overflow-hidden p-0 hover:scale-100">
      <div className="relative overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={300}
          height={200}
          className="aspect-video w-full rounded-t-lg object-cover duration-300 group-hover:scale-105"
        />
        {!post.published && (
          <Badge
            variant="destructive"
            className="absolute left-4 top-4 z-10 rounded-full"
          >
            not published
          </Badge>
        )}
        {post.published && isNew && (
          <Badge
            variant="default"
            className="absolute left-4 top-4 z-10 rounded-full bg-emerald-400"
          >
            new
          </Badge>
        )}
      </div>
      <div className="space-y-3 p-4 sm:p-6">
        <h2 className="text-secondary-blue font-montserrat text-xl font-medium">
          {post.title}
        </h2>
        <p className="text-dark-gray font-open-sans line-clamp-2 text-sm">
          {post.description}
        </p>
      </div>
      <Badge className="absolute right-4 top-4 z-10 rounded-full bg-white">
        <Link
          href={`/blog/tags/${post.tag.slug}`}
          className="absolute inset-0 min-h-[44px] min-w-[44px]"
          aria-label={`Zobacz wszystkie posty pod tagiem ${post.tag.name}`}
        />
        {post.tag.name}
      </Badge>
      <Link
        href={`/blog/${post.slug}`}
        className="absolute inset-0 min-h-[44px] min-w-[44px]"
        aria-label={`Zobacz cały post: ${post.title}`}
      />
    </CardWrapper>
  );
}
