import { TabletSmartphoneIcon } from "lucide-react";
import { type ProblemItem } from ".";

export const lackOfResponsiveness: ProblemItem = {
  title: "Strona nie działa dobrze na telefonie",
  description:
    "Ponad 70% ruchu pochodzi z telefonów. Brak responsywności obniża konwersję i ranking Google. Zoptymalizuj stronę pod mobile.",
  icon: TabletSmartphoneIcon,
  color: "bg-cyan-100 text-gray-600 border-gray-600",
  slug: "brak-responsywnosci",
  image: {
    url: "https://brandimprint.in/assets/uploads/2020/02/seo-techniques.png",
    alt: "strona nie działa na telefonie",
  },
  cta: {
    title: "Zyskaj klientów mobilnych",
    description:
      "Dostosuję Twoją stronę do telefonów, by zwiększyć sprzedaż i poprawić pozycję w Google.",
    button: "Popraw responsywność",
  },
  email: {
    service: "braku responsywności strony internetowej",
  },
  markdown: `# Strona nie działa dobrze na telefonie

Większość klientów przegląda Twoją stronę na telefonie. Jeśli nie działa poprawnie – tracisz ich na starcie.

## Skutki braku responsywności:
- Zniechęcenie klientów do dalszego kontaktu
- Niska ocena UX (user experience)
- Gorsze pozycje w Google

## Rozwiązanie:
Tworzę strony **Mobile First** – szybkie, czytelne i zoptymalizowane pod każdy ekran. Nowoczesny design i wygoda użytkowania gwarantowane.`,
};
