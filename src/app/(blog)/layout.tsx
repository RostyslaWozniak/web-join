import "@/styles/globals.css";

import { type Metadata } from "next";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { MobileNav } from "@/components/mobile-nav";
import { env } from "@/env";
import type { Blog, WithContext } from "schema-dts";
import { homePageNav } from "@/components/header/home-page-nav";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title: {
    default: "Blog o stronach internetowych dla lokalnych firm | Web Join",
    template: "%s - Blog | Web Join",
  },
  description:
    "Porady, inspiracje i wskazówki dotyczące tworzenia nowoczesnych stron internetowych i sklepów online dla lokalnych firm.",
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
  openGraph: {
    url: `${env.NEXT_PUBLIC_BASE_URL}/blog`,
    title: "Blog o stronach internetowych dla lokalnych firm | Web Join",
    description:
      "Porady, inspiracje i wskazówki dotyczące tworzenia nowoczesnych stron internetowych i sklepów online dla lokalnych firm.",
    siteName: "Web Join",
    locale: "pl-PL",
    countryName: "Poland",
    type: "article",
    images: {
      url: `${env.NEXT_PUBLIC_BASE_URL}/opengraph-image.jpg`,
      width: 1200,
      height: 630,
      alt: "Blog o stronach internetowych dla lokalnych firm | Web Join",
    },
  },
};

const jsonLd: WithContext<Blog> = {
  "@context": "https://schema.org",
  "@type": "Blog",
  url: `${env.NEXT_PUBLIC_BASE_URL}/blog`,
  name: "Web Join Blog",
  description: "Blog o stronach internetowych dla lokalnych firm | Web Join",
  image: `${env.NEXT_PUBLIC_BASE_URL}/opengraph-image.jpg`,
  publisher: {
    "@type": "Organization",
    name: "Web Join",
    logo: {
      "@type": "ImageObject",
      url: `${env.NEXT_PUBLIC_BASE_URL}/icon.ico`,
    },
  },
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Providers>
        <Header navigation={homePageNav} />

        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileNav navigation={homePageNav} />
        <Toaster />
      </Providers>
    </>
  );
}
