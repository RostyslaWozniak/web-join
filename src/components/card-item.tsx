import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon, type LucideIcon } from "lucide-react";
import { H3, type H4 } from "@/components/ui/typography";
import { AccessibleLink } from "@/components/accesible-link";

type CardItemProps = {
  title?: string;
  className?: string;
  iconClassName?: string;
  descriptionClassName?: string;
  description?: string | JSX.Element;
  icon?: LucideIcon;
  href?: string;
  align?: "start" | "center" | "end";
  heading?: typeof H3 | typeof H4;
};

export function CardItem({
  title,
  icon: Icon,
  description,
  descriptionClassName,

  href,
  className,
  iconClassName,
  align = "start",
  heading: Heading = H3,
}: CardItemProps) {
  return (
    <Card
      className={cn(
        "group relative h-full overflow-hidden border-0 bg-white/80 shadow-md backdrop-blur-sm transition-all duration-300 md:shadow-lg md:hover:shadow-xl",
        className,
      )}
    >
      <CardContent
        className={cn("flex h-full flex-col p-6 pb-8", {
          "items-start": align === "start",
          "items-center": align === "center",
          "items-end": align === "end",
        })}
      >
        {Icon && (
          <div
            className={cn(
              "mb-4 flex h-12 min-h-12 w-12 min-w-12 items-center justify-center rounded-lg p-3",
              iconClassName,
            )}
          >
            <Icon className="h-full w-full" />
          </div>
        )}

        {title && (
          <Heading
            className={cn("mb-1 h-full flex-grow text-start", {
              "group-hover:underline": href,
              "text-start": align === "start",
              "text-center": align === "center",
              "text-end": align === "end",
            })}
          >
            {title}
          </Heading>
        )}

        {description && (
          <p
            className={cn(
              "flex-grow text-sm leading-relaxed text-gray-600",
              {
                "line-clamp-2 min-h-12": href,
                "text-start": align === "start",
                "text-center": align === "center",
                "text-end": align === "end",
              },
              descriptionClassName,
            )}
          >
            {description}
          </p>
        )}
      </CardContent>
      {href && (
        <>
          <AccessibleLink
            href={href}
            className="absolute inset-0 min-w-full"
            aria-label={`Przejdż do strony ${title}`}
          />
          <ArrowUpRightIcon className="absolute right-4 top-4 z-10 duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 md:opacity-0 md:group-hover:opacity-100" />
        </>
      )}
    </Card>
  );
}
