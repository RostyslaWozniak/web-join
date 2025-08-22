import "@/styles/globals.css";

import { type Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { env } from "@/env";
import type { WebSite, WithContext } from "schema-dts";

import { MobileNav } from "@/components/mobile-nav";
import {
  CalendarIcon,
  GemIcon,
  MonitorCogIcon,
  NotebookIcon,
  ShieldQuestionIcon,
  StarIcon,
} from "lucide-react";
import { AccessibleLink } from "@/components/accesible-link";
import { GradientButton } from "@/components/ui/gradient-button";
const servicePath = "dentysci";

const nav = [
  {
    label: "Dla czego?",
    href: `/book-app/${servicePath}#dla-czego`,
    icon: ShieldQuestionIcon,
  },
  {
    label: "Jakie funkcje",
    href: `/book-app/${servicePath}#funkcje`,
    icon: StarIcon,
  },
  {
    label: "Jak to działa",
    href: `/book-app/${servicePath}#jak-to-dziala`,
    icon: MonitorCogIcon,
  },
  {
    label: "Cena",
    href: `/book-app/${servicePath}#ceny`,
    icon: GemIcon,
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title:
    "System rezerwacji online dla dentystów | BookApp dla Gabinetów Stomatologicznych",
  description:
    "BookApp to nowoczesna strona internetowa z zaawansowanym systemem rezerwacji wizyt online, stworzona specjalnie dla przychodni dentystycznych.",
  icons: [{ rel: "icon", url: "/icon.ico" }],
  alternates: {
    languages: {
      pl: "./",
    },
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: {
    name: "Rostyslav Vozniak",
    url: "https://www.rostyslavvozniak.com/",
  },
  openGraph: {
    url: "./",
    title:
      "BookApp: Aplikacja do rezerwacji wizyt online dla dentystów i klinik stomatologicznych",
    description:
      "Zautomatyzuj umawianie wizyt w Twojej przychodni dentystycznej. BookApp to szybka strona i inteligentny kalendarz online, idealny dla każdego gabinetu stomatologicznego.",
    siteName: "Web Join",
    locale: "pl-PL",
    countryName: "Poland",
    type: "website",
    images: {
      url: "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vGv9hFviLmG6Bl5ZSRD14bKQUPw0uxyIj2VEM",
      width: 1200,
      height: 630,
      alt: "System rezerwacji wizyt online i nowoczesna strona internetowa dla dentystów",
    },
  },
};

const jsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "./",
  name: "System i aplikacja rezerwacji wizyt online dla przychodni dentystycznych - BookApp",
  image:
    "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vGv9hFviLmG6Bl5ZSRD14bKQUPw0uxyIj2VEM",
  description:
    "BookApp to nowoczesne oprogramowanie do rezerwacji wizyt, stworzone dla gabinetów i klinik stomatologicznych. Ułatw pacjentom umawianie wizyt online 24/7, zautomatyzuj powiadomienia i zwiększ widoczność w Google.",
  publisher: {
    "@type": "Organization",
    name: "Web Join",
    url: `${env.NEXT_PUBLIC_BASE_URL}`,
  },
};

export default function DentistLandingPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header
        navigation={[
          ...nav,
          { label: "Blog", href: "/blog", icon: NotebookIcon },
        ]}
        actionButton={<CtaHeaderButton />}
      />
      <main className="flex-grow">{children}</main>
      <Footer />
      <MobileNav navigation={nav} />
      <Toaster />
    </>
  );
}

function CtaHeaderButton() {
  return (
    <AccessibleLink
      href={`/book-app/${servicePath}#form`}
      aria-label="Umów darmową prezentację"
    >
      <GradientButton outline size="sm" className="min-h-10">
        <CalendarIcon className="mr-2 h-5 w-5 text-accent-cyan" />
        Umów darmową prezentację
      </GradientButton>
    </AccessibleLink>
  );
}
