import { notFound } from "next/navigation";
import { posts } from "../../../../features/blog/data/posts";
import Image from "next/image";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { H1 } from "@/components/ui/typography";

import { CalendarIcon, ClockIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { BlogSidebar } from "../../../../features/blog/components/blog-sidebar";
import { Avatar } from "@/components/avatar";
import { cache } from "react";
import { generatePostJsonLd } from "../../../../features/blog/lib/generate-post-json-ld";
import { type Metadata } from "next";
import { env } from "@/env";
import { Markdown } from "@/components/markdown-renderer";
import { estimateReadingTime } from "@/features/blog/lib/estimate-reading-time";
import { Breadcrumb } from "@/components/breadcrumb";
import { SectionWrapper } from "@/components/section-wrapper";
import { CtaForm } from "@/features/forms/cta-form";
import { SectionHeader } from "@/components/section-header";

export const dynamic = "force-static";

const getPost = cache((postSlug: string) =>
  posts.find((post) =>
    env.NODE_ENV === "production"
      ? post.slug === postSlug && post.published
      : post.slug === postSlug,
  ),
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ postSlug: string }>;
}): Promise<Metadata> {
  const { postSlug } = await params;
  const post = getPost(postSlug);

  if (!post) return notFound();
  return {
    title: post.metadata.title,
    description: post.metadata.description,
    authors: [{ name: post.author.name, url: post.author.image }],
    openGraph: {
      url: `${env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      siteName: "Web Join",
      locale: "pl-PL",
      countryName: "Poland",
      type: "article",
      images: {
        url: post.image,
        width: 1200,
        height: 630,
        alt: "Nowoczesne strony internetowe i sklepy online - Web Join",
      },
    },
    twitter: {
      title: post.title,
      description: post.description,

      images: {
        url: post.image,
        width: 1200,
        height: 630,
        alt: "Nowoczesne strony internetowe i sklepy online - Web Join",
      },
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ postSlug: string }>;
}) {
  const { postSlug } = await params;

  const post = getPost(postSlug);

  if (!post) return notFound();

  const jsonLd = generatePostJsonLd(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
      <div className="mx-auto max-w-7xl py-6">
        <Breadcrumb />
      </div>
      <SectionWrapper className="pt-0 md:pt-0">
        <MaxWidthWrapper className="flex max-w-7xl flex-col items-start gap-12 lg:flex-row">
          <div className="w-full max-w-4xl">
            <div className="flex-grow">
              <Badge className="relative rounded-full bg-primary-gradient text-gray-800">
                <Link
                  href={`/blog/tags/${post.tag.slug}`}
                  className="absolute inset-0"
                />

                {post.tag.name}
              </Badge>
            </div>
            <div className="mt-8 flex flex-col items-start justify-start gap-4 text-sm md:flex-row md:items-center lg:gap-8">
              <div className="flex items-center gap-x-2 text-foreground">
                <Avatar
                  photo={post.author.image}
                  name={post.author.name}
                  className="!h-8 !w-8"
                />{" "}
                {post.author.name}
              </div>
              <div className="flex items-start text-foreground">
                <CalendarIcon className="ml-1.5 mr-3.5 h-5 w-5 md:ml-0 md:mr-2" />{" "}
                {post.createdAt?.toLocaleDateString()}
              </div>
              <div className="flex items-start text-foreground">
                <ClockIcon className="ml-1.5 mr-3.5 h-5 w-5 md:ml-0 md:mr-2" />{" "}
                {estimateReadingTime(post.markdown)}
              </div>
            </div>

            <div className="my-8">
              <Markdown>{post.markdown}</Markdown>
            </div>
          </div>

          <div className="hidden space-y-4 lg:sticky lg:top-28 lg:mt-20 lg:block lg:w-[500px]">
            <BlogSidebar currentPostSlug={post.slug} />
          </div>
        </MaxWidthWrapper>
      </SectionWrapper>
      <SectionWrapper className="bg-card-gradient">
        <MaxWidthWrapper size="sm">
          <SectionHeader
            className="mx-auto max-w-4xl"
            title={post.cta.title}
            subtitle={post.cta.subtitle}
          />
          <CtaForm />
        </MaxWidthWrapper>
      </SectionWrapper>
      <SectionWrapper className="lg:hidden">
        <MaxWidthWrapper size="xs">
          <BlogSidebar currentPostSlug={post.slug} />
        </MaxWidthWrapper>
      </SectionWrapper>
    </>
  );
}
