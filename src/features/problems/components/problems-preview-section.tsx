import { H2 } from "@/components/ui/typography";
import { problemsData } from "../data";
import { MotionWrapper } from "@/components/motion-wrapper";
// import { AccessibleLink } from "@/components/accesible-link";
// import { GradientButton } from "@/components/ui/gradient-button";
// import { ArrowUpRightIcon } from "lucide-react";
import { CardItem } from "@/components/card-item";

export function ProblemsPreviewSection() {
  return (
    <>
      <div className="mb-6 text-center md:mb-12">
        <H2 className="mb-3">
          Masz już stronę?
          <br /> A może tracisz przez nią klientów?
        </H2>
        <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
          Sprawdź, czy Twoja obecna strona nie sabotuje Twojego biznesu
        </p>
      </div>
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
                icon={icon}
                title={title}
                description={description}
                iconClassName={color}
                href={`/problemy/${slug}`}
              />
            </MotionWrapper>
          ))}
      </div>
      {/* <div className="mx-auto max-w-4xl">
        <AccessibleLink
          href="/problemy"
          aria-label="Zobacz więcej problemów z którymi stykają się firmy usługowe"
        >
          <GradientButton outline>
            Zobacz więcej
            <ArrowUpRightIcon className="ml-1 h-4 w-4 text-accent-emerald" />
          </GradientButton>
        </AccessibleLink>
      </div> */}
    </>
  );
}
