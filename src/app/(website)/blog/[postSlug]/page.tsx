import { notFound } from "next/navigation";
import { posts } from "../data/posts";
import Image from "next/image";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { H1 } from "@/components/ui/typography";
import Markdown from "react-markdown";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { BlogSidebar } from "../_components/blog-sidebar";
import { Avatar } from "@/components/avatar";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ postSlug: string }>;
}) {
  const { postSlug } = await params;
  const post = posts.find((post) => post.slug === postSlug);
  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      title: post?.title,
      description: post?.description,
    },
    twitter: {
      title: post?.title,
      description: post?.description,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ postSlug: string }>;
}) {
  const { postSlug } = await params;

  const post = posts.find((post) => post.slug === postSlug);

  if (!post) return notFound();

  return (
    <div>
      <div className="relative mx-auto h-[400px] max-w-7xl lg:h-[500px]">
        <Image
          src={post.image}
          alt="post image"
          width={1000}
          height={400}
          className="-z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-700/70 to-gray-700" />
        <H1 className="absolute bottom-2 w-full max-w-[800px] px-4 !text-start text-2xl tracking-normal text-white lg:left-8 lg:text-4xl">
          {post.title}
        </H1>
      </div>
      <MaxWidthWrapper className="flex max-w-7xl flex-col items-start gap-12 lg:flex-row">
        <div className="max-w-4xl">
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
            <div className="flex items-center gap-x-2 text-foreground">
              <Avatar
                photo={post.author.image}
                name={post.author.name}
                className="!h-8 !w-8"
              />{" "}
              {post.author.name}
            </div>
            <div className="flex items-start text-foreground">
              <CalendarIcon className="mr-2 h-5 w-5" />{" "}
              {post.createdAt?.toLocaleDateString()}
            </div>
            <div className="flex items-start text-foreground">
              <ClockIcon className="mr-2 h-5 w-5" /> {post.time} min czytania
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <Badge className="scale-125 rounded-full bg-primary-gradient text-gray-800">
              <Link
                href={`/blog/tags/${post.tag.slug}`}
                className="absolute inset-0"
              />

              {post.tag.name}
            </Badge>
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
                    // eslint-disable-next-line @next/next/no-img-element
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
        </div>
        <div className="w-full space-y-4 lg:sticky lg:top-28 lg:mt-20">
          <BlogSidebar currentPostSlug={post.slug} />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
