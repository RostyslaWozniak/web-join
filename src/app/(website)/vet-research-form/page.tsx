import { type Metadata } from "next";
import VeterinaryResearchForm from "./_components/veterinary-research-form";

export const metadata: Metadata = {
  title: "Formularz spotkania z właścicielami przychodni weterynaryjnych",
};

export default function Page() {
  return (
    <div>
      <VeterinaryResearchForm />
    </div>
  );
}
