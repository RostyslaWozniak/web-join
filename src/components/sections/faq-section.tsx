"use client";

import { Accordion } from "../accordion";
import { SectionHeader } from "../section-header";

const faqs = [
  {
    question:
      "Czym różni się strona stworzona przez Web Join od strony na WordPressie?",
    answer: `Strony, które tworzę, są:

- ✅ **Szybsze** – WordPress często używa ciężkich wtyczek i wolnych serwerów. Do budowy stron internetowych używam technologii tj. **Next.js + Tailwind**, co sprawia, że strony ładują się błyskawicznie.
- ✅ **Bezpieczniejsze** – WordPress jest podatny na ataki przez stare wtyczki i luki w zabezpieczeniach. Moje strony działają na nowoczesnych technologiach i nie wymagają ciągłych aktualizacji.
- ✅ **Lepsze pod SEO** – Strony WordPress są często przeładowane kodem. Moje strony są **optymalizowane pod wyszukiwarki**, co pomaga Ci szybciej zdobywać klientów.
- ✅ **Bez ograniczeń** – WordPress narzuca ograniczenia techniczne i wymaga dodatkowych wtyczek. Moje strony są zoptymalizowane pod Twoje potrzeby.

**Jeśli chcesz stronę, która nie będzie sprawiać problemów i spowolnień, postaw na nowoczesne rozwiązania.**
`,
  },
  {
    question: "Dlaczego szybkość strony ma znaczenie?",
    answer: `📌 **Szybkość wpływa na:**

- 🚀 **Zadowolenie użytkowników** – Nikt nie lubi wolnych stron. Każda sekunda ładowania to utrata klientów.
- 📈 **Pozycję w Google** – Google nagradza szybkie strony, więc Twoja firma będzie wyżej w wynikach wyszukiwania.
- 💰 **Konwersję i sprzedaż** – Szybsze strony generują więcej zakupów i zapytań od klientów.`,
  },
  {
    question: "Czy moja strona będzie bezpieczna?",
    answer: `Tak! Oto dlaczego:

- 🔒 **Brak podatności na ataki** – WordPress jest często atakowany przez boty i wirusy. Moje strony **nie używają wtyczek zewnętrznych**, które mogą mieć luki w zabezpieczeniach.
- 🛡️ **Nowoczesne technologie** – Strony działają na **Next.js, React i PostgreSQL**, co zapewnia najwyższy poziom bezpieczeństwa.
- 🔄 **Brak konieczności częstych aktualizacji** – WordPress wymaga regularnych aktualizacji, które mogą „popsuć” stronę. Moje rozwiązania są stabilne i nie wymagają ciągłego monitorowania.

 **Jeśli zależy Ci na bezpieczeństwie – lepiej wybrać stronę bez WordPressa!**`,
  },

  {
    question: "Czy moja strona będzie dobrze wyglądać na telefonie?",
    answer: `Tak! Każda strona, którą tworzę jest w pełni **responsywna**. Oznacza to, że będzie świetnie wyglądać na:

- 📱 **Telefonach**
- 💻 **Laptopach**
- 🖥️ **Komputerach**
- 📊 **Tabletach**

**Nie musisz się martwić – wszystko będzie dopracowane pod każde urządzenie!**`,
  },
  {
    question: "Jak wygląda proces tworzenia strony?",
    answer: `- **Kontakt** – Kliknij "Darmowa konsultacja" w prawym górnym rogu, wypełnij i wyślij formularz aby otrzymać darmową konsultację.

- **Konsultacja** – to 30 min darmowej rozmowy online. Ustalamy, czego potrzebujesz i jaki masz budżet.

- **Projektowanie** – Tworzę wygląd strony w programie graficznym **Figma (UI/UX)**.

- **Kodowanie** – Przenoszę projekt na działającą stronę (**Next.js, Tailwind**).

- **Publikacja** – Umieszczam stronę na serwerze i dbam, by działała idealnie.`,
  },
  {
    question: "Ile kosztuje strona?",
    answer: `💰 **Ceny startowe:** 

-  **Strona wizytówka** – prosta strona z najważniejszymi informacjami o Twojej firmie **od 1200 zł**
-  **Landing Page** – pojedyncza strona do promocji produktu lub usługi, zoptymalizowana pod konwersję **od 1500 zł**
-  **Strona firmowa** – pełna strona z kilkoma podstronami: "O nas", "Usługi", "Kontakt"  **od 2000 zł**
-  **Sklep internetowy** – **od 3000 zł**

📌 Cena zależy od funkcjonalności – mogę dopasować stronę do Twoich potrzeb i budżetu.`,
  },

  {
    question: "Co jeśli będę potrzebował zmian po publikacji strony?",
    answer: `Oferuję wsparcie techniczne – mogę wprowadzać zmiany na stronie, aktualizować treści lub dodać nowe funkcjonalności.

  📌 Możesz wybrać opcję:

  - **Jednorazowe poprawki**
  - **Abonament miesięczny na opiekę techniczną**

  👉 **Nie zostawię Cię samego ze stroną – zawsze możesz liczyć na moje wsparcie!**`,
  },
];

export function FaqSection() {
  return (
    <>
      <SectionHeader
        title={
          <>
            FAQ – <br /> Najczęściej zadawane pytania
          </>
        }
      />
      <Accordion questions={faqs} />
    </>
  );
}
