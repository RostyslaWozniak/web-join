import Image from "next/image";
import { H2, Text } from "../ui/typography";
import { Badge } from "../ui/badge";
import { PlayCircle } from "lucide-react";
import {
  SwojeScianyLogo,
  ElevenStudioLogo,
  SeasonChaiIcon,
} from "@/components/icons";
import { MotionWrapper } from "../motion-wrapper";
import { AccessibleLink } from "../accesible-link";

const projects = [
  {
    title: "Swoje Ściany",
    href: "https://www.swoje-sciany.pl/",
    image1:
      "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vyqaQgCnHcw0fJdlM8hvzP2TEymuCLpqOaSkW",
    image2:
      "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vcoYXej42Ceq1RWILG3fczmyvMhgQnO4VHDwx",
    logo: SwojeScianyLogo,
    category: "website",
  },
  {
    title: "Eleven Flower Studio",
    href: "https://www.eleven-studio.pl",
    image1:
      "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5v2SyRXVdXAGgflnWhTOrC3m0sScIpKe6JYE8Q",
    image2:
      "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vPjT1AwutDy2sepuvni7lBTdHCRMwJ1GkNgq3",
    logo: ElevenStudioLogo,
    category: "e-commerse",
  },
  {
    title: "Season Chai",
    href: "https://season-chai.vercel.app",
    image1:
      "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5v74WQEIs9SIL2eXMUvbiKtwpYPNEkuxRWcFy0",
    image2:
      "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vJ1dv4DZEjYiLoH5Qad4IylPzDsmkgNUu1tSZ",
    logo: SeasonChaiIcon,
    category: "e-commerse",
  },
];

export function PortfolioSection() {
  return (
    <>
      <div className="mb-6 flex flex-col items-center gap-y-4 px-2.5 md:mb-12">
        <H2>Portfolio</H2>
        <Text size="subtitle" className="max-w-2xl !text-center">
          Każdy projekt to unikalne rozwiązanie stworzone z myślą o celach
          mojego klienta.
        </Text>
      </div>
      <div className="isolate grid w-full place-items-center gap-x-6 gap-y-12 lg:w-auto lg:grid-cols-2 lg:gap-x-12 xl:grid-cols-3">
        {projects.map(
          ({ title, href, image1, image2, logo: Logo, category }, index) => (
            <MotionWrapper
              key={index}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="group relative min-h-[450px] w-[min(400px,100%)] sm:min-w-[400px]"
            >
              <Badge className="rounded-full bg-primary-gradient text-white transition-transform dark:bg-card-gradient">
                {category}
              </Badge>

              <Image
                className="absolute top-12 w-[250px] overflow-hidden rounded-md shadow-[-4px_2px_10px_1px_#00000030] duration-500 group-hover:scale-[1.04] dark:shadow-[-4px_2px_10px_1px_#00000080]"
                src={image2}
                priority
                width={250}
                height={400}
                alt="Eleven Flower Studio"
              />

              <Image
                className="absolute right-0 top-0 w-[270px] overflow-hidden rounded-md shadow-[-4px_2px_10px_1px_#00000030] duration-500 group-hover:scale-105 dark:shadow-[-4px_2px_10px_1px_#00000080]"
                priority
                src={image1}
                width={250}
                height={400}
                alt="Eleven Flower Studio"
              />
              <div className="group absolute bottom-0 left-8 right-8 z-50 flex h-28 items-center justify-between gap-3 rounded-2xl bg-card-gradient p-4 shadow-lg md:left-12 md:right-12">
                <div className="space-y-2">
                  <h3 className="text-nowrap text-xl">{title}</h3>
                  <div className="flex items-center gap-4">
                    <PlayCircle size={40} strokeWidth={1.5} />
                    <Text size="lg" className="group-hover:underline">
                      Demo
                    </Text>
                    <AccessibleLink
                      href={href}
                      target="_blank"
                      aria-label={`Przejdź do strony ${title}`}
                      className="absolute inset-0 min-w-full"
                    />
                  </div>
                </div>
                <div className="-z-10 scale-75">
                  <Logo />
                </div>
              </div>
            </MotionWrapper>
          ),
        )}
      </div>
    </>
  );
}
