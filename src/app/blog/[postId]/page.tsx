import { notFound } from "next/navigation";
import { posts } from "../data/posts";
import Image from "next/image";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { H1 } from "@/components/ui/typography";
import Markdown from "react-markdown";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const post = posts.find((post) => post.id === postId);
  return {
    title: post?.title,
    description: post?.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;

  const post = posts.find((post) => post.id === postId);

  if (!post) return notFound();

  return (
    <div>
      <div className="relative mx-auto h-[500px] max-w-7xl">
        <Image
          src={post.image}
          alt="post image"
          width={1000}
          height={400}
          className="-z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground" />
        <H1 className="absolute bottom-2 left-1/2 w-full max-w-[900px] -translate-x-1/2 px-4 !text-start !text-4xl text-white">
          {post.title}
        </H1>
      </div>
      <MaxWidthWrapper className="max-w-4xl">
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-start text-foreground">
            <CalendarIcon className="mr-2 h-5 w-5" />{" "}
            {post.createdAt?.toLocaleDateString()}
          </div>
          <Badge className="scale-125 rounded-full bg-primary-gradient text-white">
            <Link
              href={`/tags/${post.tag.slug}`}
              className="absolute inset-0"
            />
            {post.tag.name}
          </Badge>
          <div className="flex items-start text-foreground">
            <ClockIcon className="mr-2 h-5 w-5" /> {post.time} min czytania
          </div>
        </div>
        <div className="my-8 space-y-12">
          <div>
            <Markdown
              components={{
                h1: ({ children }) => (
                  <h1 className="mt-6 text-3xl font-bold text-foreground">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="mt-4 text-3xl font-semibold text-foreground">
                    {children}
                  </h2>
                ),
                li: ({ children }) => (
                  <li className="ml-6 list-disc">{children}</li>
                ),
                p: ({ children }) => <p className="text-lg">{children}</p>,
                img: ({ src }) => (
                  <img
                    src={src}
                    className="mx-auto object-cover"
                    alt="post image"
                  />
                ),
              }}
            >
              {post.markdown}
            </Markdown>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
