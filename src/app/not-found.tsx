import { type Metadata } from "next";
import { NotFoundSection } from "@/components/sections/not-found-section";

export const metadata: Metadata = {
  title: "404",
  description: "Strona nie została znaleziona",
};

export default function NotFound() {
  return <NotFoundSection />;
}
