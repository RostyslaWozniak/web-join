import "@/styles/globals.css";

import { type Metadata } from "next";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { env } from "@/env";
import type { WebSite, WithContext } from "schema-dts";

import { MobileNav } from "@/components/mobile-nav";
import {
  CalendarIcon,
  GemIcon,
  HandshakeIcon,
  MonitorCogIcon,
  ShieldQuestionIcon,
} from "lucide-react";
import { AccessibleLink } from "@/components/accesible-link";
import { GradientButton } from "@/components/ui/gradient-button";
const servicePath = "weterynarze";

const nav = [
  {
    label: "Dla czego?",
    href: `/book-app/${servicePath}#dla-czego`,
    icon: ShieldQuestionIcon,
  },
  {
    label: "Co zyskujesz",
    href: `/book-app/${servicePath}#co-zyskujesz`,
    icon: HandshakeIcon,
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
  title: "System rezerwacji online dla przychodni weterynaryjnych - BookApp",
  description:
    "BookApp to nowoczesna strona internetowa z systemem rezerwacji wizyt online dla przychodni weterynaryjnych.",
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
    title: "System rezerwacji online dla przychodni weterynaryjnych - BookApp",
    description:
      "BookApp to nowoczesna strona internetowa z systemem rezerwacji wizyt online dla przychodni weterynaryjnych.",
    siteName: "Web Join",
    locale: "pl-PL",
    countryName: "Poland",
    type: "website",
    images: {
      url: "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vGv9hFviLmG6Bl5ZSRD14bKQUPw0uxyIj2VEM",
      width: 1200,
      height: 630,
      alt: "System rezerwacji online i nowoczesna strona internetowa dla weterynarzy",
    },
  },
};

const jsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "./",
  name: "Strona i system rezerwacji online dla przychodni weterynaryjnych - BookApp",
  image:
    "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vGv9hFviLmG6Bl5ZSRD14bKQUPw0uxyIj2VEM",
  description:
    "BookApp to nowoczesna strona internetowa z systemem rezerwacji wizyt dla przychodni weterynaryjnych. Ułatw klientom umawianie wizyt online 24/7 i zwiększ widoczność w Google.",
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
        <Header navigation={nav} actionButton={<CtaHeaderButton />} />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileNav navigation={nav} />
        <Toaster />
      </Providers>
    </>
  );
}

function CtaHeaderButton() {
  return (
    <AccessibleLink
      href="/book-app/weterynarze#form"
      aria-label="Umów darmową prezentację"
    >
      <GradientButton outline size="sm" className="min-h-10">
        <CalendarIcon className="mr-2 h-5 w-5 text-accent-cyan" />
        Umów darmową prezentację
      </GradientButton>
    </AccessibleLink>
  );
}
