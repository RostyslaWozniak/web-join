import { CookieBanner } from "@/features/cookie-banner";
import "@/styles/globals.css";
import { type Viewport } from "next";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#25D4EC",
  viewportFit: "cover",
  colorScheme: "light",
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
        <CookieBanner />
      </body>
    </html>
  );
}
