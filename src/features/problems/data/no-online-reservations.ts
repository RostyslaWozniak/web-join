import { CalendarIcon } from "lucide-react";
import { type ProblemItem } from ".";

export const noOnlineReservations: ProblemItem = {
  title: "Brakuje automatyzacji / rezerwacji?",
  description:
    "Brak systemu rezerwacji online utrudnia klientom zapisanie się. Zautomatyzuj proces i zwiększ liczbę wizyt 24/7.",
  icon: CalendarIcon,
  color: "bg-cyan-100 text-gray-600 border-gray-600",
  slug: "brak-rezerwacji-online",
  image: {
    url: "https://images.pexels.com/photos/6383268/pexels-photo-6383268.jpeg",
    alt: "brak systemu rezerwacji",
  },
  cta: {
    title: "Przyjmuj rezerwacje całą dobę",
    description:
      "Zautomatyzuję Twój proces zapisów, by klienci mogli umawiać się w dowolnym momencie.",
    button: "Dodaj rezerwacje online",
  },
  email: {
    service: "braku rezerwacji online",
  },
  markdown: `# Brak rezerwacji online

Klienci chcą umawiać wizyty **24/7**, bez telefonów i maili.

## Dlaczego warto?
- Większa wygoda dla klientów
- Mniej pracy ręcznej
- Lepsza konwersja

## Rozwiązanie
Wdrażam systemy rezerwacji online, które **działają automatycznie** i integrują się z Twoim kalendarzem.`,
};
