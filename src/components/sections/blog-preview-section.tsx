import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { H2 } from "../ui/typography";
import { posts } from "@/features/blog/data/posts";
import { PostCard } from "@/features/blog/components/post-card";
import { GradientButton } from "../ui/gradient-button";
import { AccessibleLink } from "../accesible-link";

export default function BlogPreviewSection() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Badge className="mb-4 rounded-full bg-card-gradient px-4 py-2 text-sm font-medium text-foreground">
            📝 Z bloga
          </Badge>

          <H2 className="mb-4">Wskazówki dla lokalnych firm</H2>

          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Dowiedz się, jak zdobywać więcej klientów, budować markę online i
            rozwijać firmę w cyfrowym świecie.
          </p>
        </div>

        <div className="mb-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts
              .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
              .slice(0, 3)
              .map((post) => (
                <PostCard key={post.slug} post={post} />
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
      </div>
    </section>
  );
}
