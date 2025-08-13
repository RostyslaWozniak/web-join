import { CardItem } from "@/components/card-item";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { MotionWrapper } from "@/components/motion-wrapper";
import { SectionWrapper } from "@/components/section-wrapper";
import { problemsData } from "@/features/problems/data";

export default function ProblemsPage() {
  return (
    <>
      <SectionWrapper>
        <MaxWidthWrapper>
          <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {problemsData.map(
              ({ color, description, slug, title, icon }, index) => (
                <MotionWrapper
                  key={slug}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  <CardItem
                    key={slug}
                    icon={icon}
                    title={title}
                    description={description}
                    iconClassName={color}
                    href={`/problemy/${slug}`}
                  />
                </MotionWrapper>
              ),
            )}
          </div>
        </MaxWidthWrapper>
      </SectionWrapper>
    </>
  );
}
