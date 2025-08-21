import { problemsData } from "../data";
import { MotionWrapper } from "@/components/motion-wrapper";
import { CardItem } from "@/components/card-item";
import { SectionHeader } from "@/components/section-header";

export function ProblemsPreviewSection() {
  return (
    <>
      <SectionHeader
        className="mx-auto max-w-4xl"
        title={
          <>
            Masz już stronę?
            <br /> A może tracisz przez nią klientów?
          </>
        }
        subtitle="Sprawdź, czy Twoja obecna strona nie sabotuje Twojego biznesu"
      />
      <div className="mb-6 grid gap-6 md:mb-12 md:grid-cols-2 lg:grid-cols-3">
        {problemsData
          .slice(0, 3)
          .map(({ color, description, slug, title, icon }, index) => (
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
          ))}
      </div>
    </>
  );
}
