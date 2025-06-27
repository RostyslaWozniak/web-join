import "@/styles/globals.css";

import { Space_Grotesk } from "next/font/google";
import { type Metadata } from "next";
import { env } from "@/env";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${spaceGrotesk.className} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col overflow-x-hidden selection:bg-accent-cyan selection:text-background">
        {children}
      </body>
    </html>
  );
}
