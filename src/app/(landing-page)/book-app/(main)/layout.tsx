import "@/styles/globals.css";

import { type Metadata } from "next";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { env } from "@/env";
import type { WebSite, WithContext } from "schema-dts";
import { bookAppNav } from "../data/book-app-nav";
import { MobileNav } from "@/components/mobile-nav";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title:
    "System rezerwacji online dla lokalnych firm usługowych - BookApp | Web Join",
  description:
    "BookApp to nowoczesna strona internetowa z wbudowanym systemem rezerwacji, stworzona specjalnie dla lokalnych firm usługowych.",
  keywords: [],
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
      "System rezerwacji online dla lokalnych firm usługowych - BookApp | Web Join",
    description:
      "BookApp to nowoczesna strona internetowa z wbudowanym systemem rezerwacji, stworzona specjalnie dla lokalnych firm usługowych.",
    siteName: "Web Join",
    locale: "pl-PL",
    countryName: "Poland",
    type: "website",
    images: {
      url: "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vcrmwkf42Ceq1RWILG3fczmyvMhgQnO4VHDwx",
      width: 1200,
      height: 630,
      alt: "System rezerwacji online i nowoczesna strona internetowa",
    },
  },
};

const jsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "./",
  name: "System rezerwacji online dla lokalnych firm usługowych - BookApp",
  image:
    "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vcrmwkf42Ceq1RWILG3fczmyvMhgQnO4VHDwx",
  description:
    "BookApp to nowoczesna strona internetowa z wbudowanym systemem rezerwacji, stworzona specjalnie dla lokalnych firm usługowych.",
  publisher: {
    "@type": "Organization",
    name: "Web Join",
    url: `${env.NEXT_PUBLIC_BASE_URL}`,
  },
};

export default function LandingPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Providers>
        <Header navigation={bookAppNav} />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileNav navigation={bookAppNav} />
        <Toaster />
      </Providers>
    </>
  );
}
