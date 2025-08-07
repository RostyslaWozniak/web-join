import { Markdown } from "@/components/markdown-renderer";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { problemsData } from "@/data/problems";
import { Metadata } from "next";

import { notFound } from "next/navigation";
import { cache } from "react";

const getCurrentPageData = cache((slug: string) => {
  return problemsData.find((p) => p.slug === slug);
});

export const generateStaticParams = () => {
  return problemsData.map((p) => ({ slug: p.slug }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const problem = getCurrentPageData(slug);
  return {
    title: problem?.title,
    description: problem?.content,
  };
};

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const problem = getCurrentPageData(slug);

  if (!problem) return notFound();
  return (
    <div className="py-12 sm:py-20">
      <MaxWidthWrapper className="max-w-7xl">
        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          <div>
            <Markdown>{problem.markdown}</Markdown>
          </div>
          <div className="order-first aspect-[3/2] overflow-hidden rounded-lg shadow-xl md:order-2">
            <img
              src={problem.image.url}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
