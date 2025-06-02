import { wait } from "@/lib/utils";
import { redirect } from "next/navigation";

export default async function JoinPage() {
  await wait(3000);
  redirect("/join/service-selection");
}
