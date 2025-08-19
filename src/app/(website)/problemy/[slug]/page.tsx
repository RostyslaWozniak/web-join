import { Markdown } from "@/components/markdown-renderer";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { SectionWrapper } from "@/components/section-wrapper";
import { BlogPreviewSection } from "@/components/sections";
import { problemsData } from "@/features/problems/data";
import { CtaForm } from "@/features/forms/cta-form";
import { type Metadata } from "next";

import { notFound } from "next/navigation";
import { cache } from "react";
import { SectionHeader } from "@/components/section-header";

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
    openGraph: {
      images: [problem.image.url],
    },
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
          <div className="grid gap-x-12 gap-y-8 lg:grid-cols-2">
            <div>
              <Markdown>{problem.markdown}</Markdown>
            </div>
            <div className="order-first hidden aspect-[3/2] overflow-hidden lg:order-2 lg:block"></div>
          </div>
        </MaxWidthWrapper>
      </SectionWrapper>
      <SectionWrapper className="relative">
        <MaxWidthWrapper size="sm" className="relative z-10">
          <SectionHeader
            className="sm:px-8"
            title={problem.cta.title}
            subtitle={problem.cta.description}
          />
          <div>
            <CtaForm typeOfProject={problem.email.service} />
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
