import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/features/blog/data/posts";
import { PostCard } from "@/features/blog/components/post-card";
import { GradientButton } from "../ui/gradient-button";
import { AccessibleLink } from "../accesible-link";
import { MotionWrapper } from "../motion-wrapper";
import { SectionHeader } from "../section-header";

export function BlogPreviewSection() {
  return (
    <>
      <div className="mb-12 text-center">
        <Badge className="mb-4 rounded-full bg-card-gradient px-4 py-2 text-sm font-medium text-foreground">
          📝 Z bloga
        </Badge>
        <SectionHeader
          title="Wskazówki dla lokalnych firm"
          subtitle="Dowiedz się, jak zdobywać więcej klientów, budować markę online i
          rozwijać firmę w cyfrowym świecie."
        />
      </div>

      <div className="mb-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts
            .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            .slice(0, 3)
            .map((post, index) => (
              <MotionWrapper
                key={post.slug}
                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                <PostCard post={post} />
              </MotionWrapper>
            ))}
        </div>
      </div>

      <div className="text-center">
        <AccessibleLink href="/blog" aria-label="Przejdź do blogu">
          <GradientButton>
            Zobacz więcej <ArrowUpRight className="ml-2 h-4 w-4" />
          </GradientButton>
        </AccessibleLink>

        <p className="mt-4 text-sm text-gray-700">
          Nowe artykuły co tydzień • Praktyczne porady • Bezpłatne zasoby
        </p>
      </div>
    </>
  );
}
