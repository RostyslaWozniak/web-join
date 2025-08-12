import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Tailwind,
  Section,
} from "@react-email/components";
import { Footer } from "./components/footer";

export default function CtaFormResponseEmail({
  clientName = "Jan Kowalski",
  service = "wolna strona internetowa",
  sender = "Rostyslav Vozniak",
}: {
  clientName: string;
  service: string | null;
  sender: string;
}) {
  return (
    <Html lang="pl">
      <Head />
      <Body className="bg-[#f9fafb] font-sans text-foreground">
        <Tailwind>
          <Container className="mx-auto my-10 max-w-xl overflow-hidden rounded-2xl">
            <Section className="mt-6 px-4">
              <Text className="mt-2 text-base">Cześć {clientName},</Text>
              <Text className="mt-2 text-base">
                Dziękuję za wysłanie zapytania
                {service && ` w sprawie "${service}"`}. Chętnie pomogę Ci
                znaleźć rozwiązanie — proponuję, żebyśmy umówili się na{" "}
                <b>bezpłatną 30-minutową rozmowę online</b>.
              </Text>
              <Text className="-mx-2 mt-2 rounded-lg bg-blue-50 p-4 text-lg font-bold text-blue-800">
                Daj proszę znać w odpowiedzi na tego maila jaka data i godzina
                będą dla Ciebie wygodne.
              </Text>
              <Text className="text-base">
                Po ustaleniu terminu prześlę Ci link do spotkania na Google
                Meets, <br />
                na którym:
              </Text>
              <ul>
                <li>porozmawiamy o Twoim projekcie i obecnych wyzwaniach,</li>
                <li>pokażę Ci możliwe kierunki działań,</li>
                <li>ustalimy, jakie mogą być kolejne kroki.</li>
              </ul>
            </Section>
            <Section className="px-4">
              <Text className="text-base">
                Do zobaczenia na spotkaniu!
                <br />
                {sender}
              </Text>
            </Section>
            <Footer />
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
}
