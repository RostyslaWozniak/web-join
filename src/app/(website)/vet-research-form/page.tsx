import { type Metadata } from "next";
import VeterinaryResearchForm from "./_components/veterinary-research-form";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

const ALLOWED_IPS = ["88.156.143.29"];

export const dynamic = "forse-dynamic";

function getClientIP(headersList: Headers): string {
  const forwarded = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");
  const cfConnectingIp = headersList.get("cf-connecting-ip");

  console.log({ realIp, cfConnectingIp });

  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }

  return realIp ?? cfConnectingIp ?? "unknown";
}

export const metadata: Metadata = {
  title: "Formularz spotkania z właścicielami przychodni weterynaryjnych",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function Page() {
  const headersList = await headers();
  const clientIP = getClientIP(headersList);

  if (!ALLOWED_IPS.includes(clientIP)) {
    notFound();
  }
  return (
    <div>
      <VeterinaryResearchForm />
    </div>
  );
}
