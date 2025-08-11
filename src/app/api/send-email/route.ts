// import OfferEmail from "@/components/emails/offer-email";
// import VetAppOfferEmail from "@/components/emails/vet-app-offer-email";
// import ClinicBookingEmail from "@/components/emails/clinic-booking-email";
import MeetingInvitation from "@/components/emails/meeting-invitation";
import { env } from "@/env";
import { resend } from "@/lib/services/resend";
import { tryCatch } from "@/lib/utils/try-catch";
import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// const message = `
// Dzień dobry,

// nazywam się Rostyslav Vozniak i jestem web developerem.

// Tworzę prosty system dla przychodni weterynaryjnych, który:

// – pozwala klientom wygodnie umawiać się online,
// – nie dopuszcza do kolizji wizyt,
// – wspiera rozwój strony w wyszukiwarkach (SEO),
// – i może być rozbudowywany w miarę potrzeb kliniki.

// Jeśli chcieliby Państwo zobaczyć, jak to wygląda w praktyce – zapraszam na krótką, bezpłatną prezentację online przez Google Meet (ok. 15 minut).
// Proszę o informację, kiedy byłby dogodny termin – dopasuję się.

// Wersja demo dostępna jest także pod linkiem:
// 👉 https://vet-app-demo.vercel.app

// Pozdrawiam serdecznie,
// Rostyslav Vozniak
// 🌐 www.webjoin.pl/vet-app
// 📞 +48 798 582 849

// ---

// Wiadomość wysłana jednorazowo na publiczny adres e-mail w ramach uzasadnionego interesu (art. 6 ust. 1 lit. f RODO).
// Jeśli nie życzą sobie Państwo dalszych wiadomości, proszę o odpowiedź z tematem „NIE”.
// `;

const bodySchema = z.object({
  emails: z.array(z.string().email()),
});

export async function POST(req: NextRequest) {
  const body: unknown = await req.json();

  const secret = req.headers.get("secret");

  if (!secret || secret !== env.SEND_EMAILS_SECRET) {
    return NextResponse.json({ status: 401, message: "Unauthorized" });
  }

  const isValidBody = bodySchema.safeParse(body);

  if (!isValidBody.success) {
    return NextResponse.json({ status: 400, message: "Invalid body" });
  }

  const emailsSet = [...new Set(isValidBody.data.emails)]; // Ensure unique emails

  const { data: response, error } = await tryCatch(
    resend.batch.send(
      emailsSet.map((email) => ({
        from: `rostyslav-vozniak@${process.env.RESEND_DOMAIN}`,
        to: email,
        subject:
          "Prosty system zapisów online dla przychodni weterynaryjnych – zaproszenie na prezentację",
        react: MeetingInvitation({
          invitationLink: "https://meet.google.com/foz-qidb-cpj",
        }),
      })),
    ),
  );

  if (error) {
    return NextResponse.json({
      status: 500,
      message: "Cannot send emails, try again later",
    });
  }

  return NextResponse.json({ status: 200, response });
}
