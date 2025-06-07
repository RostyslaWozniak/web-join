// components/ClinicBookingEmail.tsx
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Text,
  Link,
} from "@react-email/components";

export default function ClinicBookingEmail() {
  return (
    <Html>
      <Head />
      <Preview>System rezerwacji wizyt dla przychodni – demo do wglądu</Preview>
      <Body
        style={{ backgroundColor: "#ffffff", fontFamily: "Arial, sans-serif" }}
      >
        <Container
          style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}
        >
          <Text
            style={{ fontSize: "16px", lineHeight: "1.5", color: "#333333" }}
          >
            Dzień dobry,
          </Text>

          <Text
            style={{ fontSize: "16px", lineHeight: "1.5", color: "#333333" }}
          >
            Nazywam się Rostyslav Vozniak i jestem web developerem. Tworzę
            system dla małych i średnich przychodni weterynaryjnych, który:
          </Text>

          <ul
            style={{
              fontSize: "16px",
              lineHeight: "1.5",
              color: "#333333",
              paddingLeft: "20px",
            }}
          >
            <li>Pozwala klientom wygodnie umawiać się online,</li>
            <li>Nie dopuszcza do kolizji wizyt,</li>
            <li>Wspiera rozwój strony kliniki w wyszukiwarkach (SEO),</li>
            <li>Może być rozbudowywany razem z Państwa potrzebami.</li>
          </ul>

          <Text
            style={{ fontSize: "16px", lineHeight: "1.5", color: "#333333" }}
          >
            Zostawiam link do wersji demo:
            <br />
            <Link
              href="https://vet-app-demo.vercel.app/"
              style={{ color: "#1a73e8" }}
            >
              Zobacz Demo
            </Link>
          </Text>

          <Text
            style={{ fontSize: "16px", lineHeight: "1.5", color: "#333333" }}
          >
            Jeśli uznacie Państwo, że warto porozmawiać, z chęcią pokażę więcej.
          </Text>

          <Text
            style={{ fontSize: "16px", lineHeight: "1.5", color: "#333333" }}
          >
            Pozdrawiam serdecznie,
            <br />
            Rostyslav Vozniak
            <br />
            <Link href="https://webjoin.pl/" style={{ color: "#1a73e8" }}>
              www.webjoin.pl
            </Link>
            <br />
            <Link href="tel:+48798582849" style={{ color: "#1a73e8" }}>
              +48 798 582 849
            </Link>
          </Text>

          <hr
            style={{
              marginTop: "30px",
              border: "none",
              borderTop: "1px solid #dddddd",
            }}
          />

          <Text
            style={{ fontSize: "13px", color: "#777777", lineHeight: "1.5" }}
          >
            Wiadomość została wysłana jednorazowo na publicznie dostępny adres
            e-mail w ramach uzasadnionego interesu zgodnie z art. 6 ust. 1 lit.
            f RODO.
            <br />
            Jeśli nie życzą sobie Państwo dalszych wiadomości, proszę o
            odpowiedź z tematem „NIE”, a usuniemy kontakt z naszej bazy.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
