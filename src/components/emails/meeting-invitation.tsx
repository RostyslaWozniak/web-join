import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Tailwind,
  Link,
} from "@react-email/components";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export default function MeetingInvitation({
  invitationLink,
}: {
  invitationLink: string;
}) {
  return (
    <Html>
      <Head />
      <Body className="bg-[#f9fafb] font-sans text-[#1f2937]">
        <Tailwind>
          <Container className="mx-auto my-10 max-w-xl overflow-hidden rounded-2xl bg-white shadow-md">
            <Header
              title="System rezerwacji online dla weterynarzy"
              subtitle="Szybkie, bezpieczne i zoptymalizowane pod SEO."
            />

            <Section className="mt-6 px-8">
              <Text className="mt-2 text-base text-[#4b5563]">
                Dzień dobry,
              </Text>
              <Text className="mt-2 text-base text-[#4b5563]">
                Zgodnie z naszą rozmową, przesyłam link do spotkania online,
                podczas którego chętnie zaprezentuję działanie aplikacji oraz
                odpowiem na wszelkie pytania:
              </Text>
            </Section>
            <Section className="px-8 text-start">
              <Text className="mb-2 text-base font-medium text-[#111827]">
                Spotkanie odbędzie się dzisiaj o 12:00 (30.07.2025).
              </Text>
              <Link
                href={invitationLink}
                className="text-base font-medium underline"
              >
                Link do spotkania
              </Link>
            </Section>

            <Section className="px-8">
              <Text className="text-base text-[#4b5563]">
                Aplikacja została stworzona z myślą o maksymalnej wygodzie
                zarówno dla właścicieli przychodni, jak i ich klientów – z
                funkcjami takimi jak umawianie wizyt, powiadomienia, historia
                leczenia oraz zarządzanie profilami zwierząt.
              </Text>
              <Text className="text-base text-[#4b5563]">
                Do zobaczenia na spotkaniu!
              </Text>
            </Section>

            <Footer />
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
}
