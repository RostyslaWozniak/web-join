import "@/styles/globals.css";

import { Space_Grotesk } from "next/font/google";
import { type Metadata } from "next";
import { Nav } from "@/components/nav";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web Join | Stwórzmy stronę internetową, która rozpędzi Twój biznes",
  description:
    "Ty rozwijasz biznes, a ja tworzę stronę, która go wspiera. Zadbam o wszystkie aspekty techniczne, żebyś mógł skupić się na tym, co ważne.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${spaceGrotesk.className} dark`}>
      <body className="overflow-x-hidden selection:bg-primary-cyan selection:text-background">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
