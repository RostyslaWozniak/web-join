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
import { bookAppNav } from "./data/navigation";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title: {
    default: "Zarządzaj wizytami w swojej firmie | Web Join",
    template: "%s | Web Join -  Zarządzaj wizytami w swojej firmie",
  },
  description:
    "BookApp to nowoczesna strona internetowa z wbudowanym systemem rezerwacji, stworzona specjalnie dla lokalnych firm usługowych.",
  keywords: [],
  icons: [{ rel: "icon", url: "/icon.ico" }],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    url: "./",
    description:
      "System rezerwacji online i nowoczesna strona internetowa, stworzone specjalnie dla lokalnych firm. Więcej czasu dla Twojego personelu, mniej telefonów i dynamiczny wzrost liczby wizyt.",
    type: "website",
    images: {
      url: "/images/vet-app/vet-app-hero-img.png",
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
      <body className="flex min-h-screen flex-col overflow-x-hidden selection:bg-accent-cyan selection:text-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <Header navigation={bookAppNav} />
          <main className="flex-grow">{children}</main>
          <Footer />
          <MobileNav />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
