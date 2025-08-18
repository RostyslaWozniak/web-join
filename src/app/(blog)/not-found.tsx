import { type Metadata } from "next";
import { NotFoundSection } from "@/components/sections/not-found-section";
import { GradientButton } from "@/components/ui/gradient-button";
import { NotebookIcon } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  description: "Strona nie została znaleziona",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <NotFoundSection actionButton={<ActionButton />} />;
}

function ActionButton() {
  return (
    <GradientButton className="relative">
      <NotebookIcon className="mr-2" />
      Wróć do bloga <Link href="/blog" className="absolute inset-0" />
    </GradientButton>
  );
}
