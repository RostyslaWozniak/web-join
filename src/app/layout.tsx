import "@/styles/globals.css";

import { Space_Grotesk } from "next/font/google";
import { type Metadata } from "next";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web Join | Stwórzmy stronę internetową, która rozpędzi Twój biznes",
  description:
    "Ty rozwijasz biznes, a ja tworzę stronę, która go wspiera. Zadbam o wszystkie aspekty techniczne, żebyś mógł skupić się na tym, co ważne.",
  icons: [{ rel: "icon", url: "/icon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      className={`${spaceGrotesk.className} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="overflow-x-hidden selection:bg-primary-cyan selection:text-background">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "hsl(var(--background) / 50%)",
                color: "hsl(var(--foreground))",
                backdropFilter: "blur(4px)",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
