/* eslint-disable @next/next/no-img-element */
import { Markdown } from "@/components/markdown-renderer";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { SectionWrapper } from "@/components/section-wrapper";
import BlogPreviewSection from "@/components/sections/blog-preview-section";
import { H2 } from "@/components/ui/typography";
import { problemsData } from "@/data/problems";
import { CtaForm } from "@/features/forms/cta-form";
import { type Metadata } from "next";

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
  if (!problem) return notFound();
  return {
    title: problem.title,
    description: problem.description,
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
    <>
      <SectionWrapper>
        <MaxWidthWrapper className="max-w-7xl">
          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            <div>
              <Markdown>{problem.markdown}</Markdown>
            </div>
            <div className="order-first aspect-[3/2] overflow-hidden rounded-lg shadow-xl md:order-2">
              <img
                src={problem.image.url}
                alt={problem.image.url}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </SectionWrapper>
      <SectionWrapper className="relative">
        <MaxWidthWrapper className="relative z-10">
          <div className="text-center">
            <H2 className="mb-4 text-3xl font-bold text-cyan-900 lg:text-4xl">
              {problem.cta.title}
            </H2>
            <p className="mx-auto mb-8 max-w-2xl text-xl">
              {problem.cta.description}
            </p>
          </div>
          <div className="mx-auto max-w-5xl">
            <CtaForm />
          </div>
        </MaxWidthWrapper>
        <div className="absolute inset-0 bg-card-gradient opacity-50"></div>
      </SectionWrapper>
      <SectionWrapper>
        <MaxWidthWrapper>
          <BlogPreviewSection />
        </MaxWidthWrapper>
      </SectionWrapper>
    </>
  );
}
