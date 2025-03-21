import "@/styles/globals.css";

import { Space_Grotesk } from "next/font/google";
import { type Metadata } from "next";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { MobileNav } from "@/components/mobile-nav";
import { env } from "@/env";
import type { WebSite, WithContext } from "schema-dts";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title: {
    default:
      "Web Join - Nowoczesne strony internetowe i sklepy – Tworzenie stron",
    template:
      "%s | Web Join -  Nowoczesne strony internetowe i sklepy – Tworzenie stron",
  },
  description:
    "Tworzę szybkie, bezpieczne i nowoczesne strony internetowe oraz sklepy online. Optymalizacja SEO, UX i pełne wsparcie techniczne.",
  keywords: [],
  icons: [{ rel: "icon", url: "/icon.ico" }],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    url: "./",
    description:
      "Profesjonalne strony internetowe dla firm – szybkie, bezpieczne i zoptymalizowane pod SEO.",
    type: "website",
    images: {
      url: "/opengraph-image.jpg",
      width: 1200,
      height: 630,
      alt: "Nowoczesne strony internetowe i sklepy online - Web Join",
    },
  },
};

const jsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "./",
  name: "Web Join",
  image: "./opengraph-image.jpg",
  description: "Tworzę strony internetowe dla twojego biznesu",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      className={`${spaceGrotesk.className} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="overflow-x-hidden selection:bg-accent-cyan selection:text-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileNav />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
