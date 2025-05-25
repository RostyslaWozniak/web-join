import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { CTAButton } from "./components/cta-button";

export default function OfferEmail() {
  return (
    <Html>
      <Head>
        <title>My email title</title>
        <style>
          {`@media (max-width: 900px) {
            #container {
             padding: 5px;
            }
          }
          
          @media (min-width: 901px) {
            #container {
             padding: 20px;
            }
          }
          `}
        </style>
      </Head>
      <Body className="m-0 bg-white p-0 text-[#455a63]">
        <Tailwind>
          <Container className="border-0 bg-white">
            <Section className="text-center">
              <Container
                className="mx-auto my-5 max-w-[600px] rounded-lg bg-white shadow-lg"
                id="container"
              >
                <Header
                  title="Nowoczesne strony internetowe 🚀"
                  subtitle="Szybkie, bezpieczne i zoptymalizowane pod SEO. Sprawdź ofertę!"
                />
                <ServicesSection />
                <Footer />
              </Container>
            </Section>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
}

const ServicesSection = () => {
  return (
    <>
      <Section>
        <ServiceCard
          title="🌐 Strony internetowe"
          description="Dostosowane do Twojego biznesu – nowoczesne i responsywne."
          items={[
            {
              title: "Strona wizytówka",
              description:
                "prosta strona z najważniejszymi informacjami o Twojej firmie",
              price: "500 zł",
            },
            {
              title: "Landing Page",
              description:
                "pojedyncza strona do promocji produktu lub usługi, zoptymalizowana pod konwersję",
              price: "599 zł",
              oldPrice: "800 zł",
            },
            {
              title: "Strona firmowa",
              description:
                'pełna strona z kilkoma podstronami: "O nas", "Usługi", "Kontakt"',
              price: "999zł",
              oldPrice: "1200 zł",
            },
          ]}
        />
        <ServiceCard
          title="🛒 Sklepy internetowe"
          description="Profesjonalne sklepy z integracją płatności."
          items={[
            {
              title: "Podstawowy sklep",
              description: "do 10 produktów, z systemem zamówień",
              price: "2499 zł",
              oldPrice: "3000 zł",
            },
            {
              title: "Rozbudowany sklep",
              description: "większy katalog produktów, filtrowanie, analityka",
              price: "5000 zł",
            },
          ]}
        />
        <ServiceCard
          title="📝 Blogi i strony contentowe"
          description="Z łatwym zarządzaniem treścią."
          items={[
            {
              title: "Prosty blog",
              description: "możliwość dodawania artykułów, optymalizacja SEO.",
              price: "1200 zł",
            },
            {
              title: "Zaawansowany blog",
              description: "kategorie, tagi, lepsza nawigacja",
              price: "2000 zł",
            },
          ]}
        />
        <ServiceCard
          title="⚙️ Dodatkowe usługi"
          description="Zadbam o SEO, płatności i wsparcie techniczne."
          items={[
            {
              title: "SEO i optymalizacja",
              description: "popraw ranking w Google",
              price: "300 zł",
            },
            {
              title: "Integracja z płatnościami",
              description: "dodanie bramki płatności do strony lub sklepu",
              price: "400 zł",
            },
            {
              title: "Wsparcie techniczne",
              description: "aktualizacje i monitoring",
              price: "100 zł/miesiąc",
            },
          ]}
        />
        <CTAButton href="https://webjoin.pl/join">Zapytaj o ofertę</CTAButton>
      </Section>
    </>
  );
};

const ServiceCard = ({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
    price: string;
    oldPrice?: string;
  }[];
}) => {
  return (
    <Section className="my-5 rounded-lg bg-[#e9fbfa] p-2.5 text-start">
      <Text className="mb-1 text-2xl text-[#455a63]">{title}</Text>
      <Text className="text-lg text-[#666]">{description}</Text>
      <ul className="grid list-disc gap-3 pl-5 text-[#455a63]">
        {items.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong> – {item.description}{" "}
            {item.oldPrice && (
              <>
                (od{" "}
                <span className="text-red-500 line-through">
                  {item.oldPrice}
                </span>{" "}
                <strong>{item.price}</strong>)
              </>
            )}
            {!item.oldPrice && `(od ${item.price})`}
          </li>
        ))}
      </ul>
    </Section>
  );
};
