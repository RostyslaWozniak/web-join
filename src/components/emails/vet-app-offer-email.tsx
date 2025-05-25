import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Link,
  Tailwind,
} from "@react-email/components";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { CTAButton } from "./components/cta-button";

export default function VetAppOfferEmail() {
  return (
    <Html>
      <Head />
      <Body className="bg-[#f9fafb] font-sans text-[#1f2937]">
        <Tailwind>
          <Container className="mx-auto my-10 max-w-xl overflow-hidden rounded-2xl bg-white shadow-md">
            <Header
              title="System rezerwacji online dla weterynarzy 🚀"
              subtitle="Szybkie, bezpieczne i zoptymalizowane pod SEO. Sprawdź ofertę!"
            />

            <Section className="mt-6 px-8">
              <Text className="mt-2 text-base text-[#4b5563]">
                Cześć, mam na imię <strong>Rostyslav Vozniak</strong> i
                specjalizuję się w tworzeniu nowoczesnych systemów dla lokalnych
                firm. Opracowałem rozwiązanie stworzone z myślą o przychodniach
                weterynaryjnych.
              </Text>
              <Text className="mb-2 text-base font-medium text-[#111827]">
                Co zawiera system VetApp:
              </Text>
              <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-[#374151]">
                <li>Kalendarz dostępności lekarzy</li>
                <li>Wybór usług i precyzyjne terminy co 15 minut</li>
                <li>
                  Panel administracyjny z intuicyjnym zarządzaniem i
                  statystykami
                </li>
                <li>
                  Panel klienta z historią wizyt i zarządzaniem zwierzętami
                </li>
              </ul>
            </Section>

            <Section className="mt-6 px-8">
              <Text className="text-base text-[#4b5563]">
                Wraz z systemem tworzę nowoczesną stronę internetową
                zoptymalizowaną pod SEO, aby przychodnia mogła przyciągać więcej
                klientów z wyszukiwarki.
              </Text>
            </Section>

            <Section className="mt-6 px-8 text-center">
              <Text className="mb-1 text-sm text-gray-500">
                📌 Zobacz demo:
              </Text>
              <Link
                href="https://vet-app-demo.vercel.app"
                className="text-base font-medium text-[#06b6d4] underline"
              >
                vet-app-demo.vercel.app
              </Link>
            </Section>

            <Section className="mt-6 px-8">
              <Text className="text-base text-[#1f2937]">
                Chętnie pokażę, jak to działa w praktyce. Czy możemy umówić się
                na 15-minutową prezentację online w tym lub przyszłym tygodniu?
              </Text>
            </Section>

            <Section className="mt-6 px-8 text-center">
              <CTAButton href="mailto:contact@webjoin.pl">
                Umów prezentację
              </CTAButton>
            </Section>

            <Footer />
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
}
