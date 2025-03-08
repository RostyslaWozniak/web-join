import Image from "next/image";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { H2, Text } from "../ui/typography";
import { Badge } from "../ui/badge";
import { PlayCircle } from "lucide-react";
import Link from "next/link";
import { ElevenStudioLogo } from "../logos/eleven-studio-logo";

const projects = [
  {
    title: "Eleven Flower Studio",
    href: "https://eleven-studio.pl",
    image1: "/images/portfolio/eleven-studio-1.jpg",
    image2: "/images/portfolio/eleven-studio-2.jpg",
    logo: ElevenStudioLogo,
    category: "e-commerse",
  },
  {
    title: "Eleven Flower Studio",
    href: "https://eleven-studio.pl",
    image1: "/images/portfolio/eleven-studio-1.jpg",
    image2: "/images/portfolio/eleven-studio-2.jpg",
    logo: ElevenStudioLogo,
    category: "e-commerse",
  },
  {
    title: "Eleven Flower Studio",
    href: "https://eleven-studio.pl",
    image1: "/images/portfolio/eleven-studio-1.jpg",
    image2: "/images/portfolio/eleven-studio-2.jpg",
    logo: ElevenStudioLogo,
    category: "e-commerse",
  },
];

export function PortfolioSection() {
  return (
    <section>
      <MaxWidthWrapper className="flex flex-col items-center gap-y-8 py-16 md:gap-y-14 md:py-20">
        <div className="flex flex-col items-center gap-y-4">
          <H2>Portfolio</H2>
          <Text size="subtitle">
            Każdy projekt to unikalne rozwiązanie stworzone z myślą o celach
            mojego klienta.
          </Text>
        </div>
        <div className="grid w-full grid-cols-3 gap-6">
          {projects.map(
            ({ title, href, image1, image2, logo: Logo, category }, index) => (
              <div key={index} className="group relative min-h-[450px]">
                <Badge className="rounded-full bg-card-gradient text-white transition-transform duration-500 group-hover:-translate-y-12 group-hover:translate-x-14 group-hover:scale-125">
                  {category}
                </Badge>
                <div className="absolute top-12 overflow-hidden rounded-md shadow-[-4px_2px_10px_1px_#00000080] duration-500 group-hover:z-50 group-hover:-translate-x-14 group-hover:-translate-y-12 group-hover:scale-105">
                  <Image
                    src={image2}
                    width={267}
                    height={377}
                    alt="Eleven Flower Studio"
                  />
                </div>
                <div className="absolute right-0 top-0 overflow-hidden rounded-md shadow-[-4px_2px_10px_1px_#00000080] duration-500 group-hover:z-50 group-hover:translate-x-14 group-hover:scale-105">
                  <Image
                    src={image1}
                    width={267}
                    height={377}
                    alt="Eleven Flower Studio"
                  />
                </div>
                <div className="group absolute bottom-0 left-12 right-12 flex h-28 items-center justify-between gap-8 rounded-2xl bg-card-gradient p-4">
                  <div className="space-y-2">
                    <h3 className="text-xl">{title}</h3>
                    <div className="flex items-center gap-4">
                      <PlayCircle size={40} strokeWidth={1.5} />
                      <Text size="lg" className="group-hover:underline">
                        Więcej
                      </Text>
                      <Link
                        href={href}
                        target="_blank"
                        aria-label="przejdz do strony Eleven Flower Studio"
                      >
                        <span className="absolute inset-0" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <Logo />
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
