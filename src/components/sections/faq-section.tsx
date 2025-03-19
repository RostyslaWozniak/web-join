"use client";

import { MaxWidthWrapper } from "../max-width-wrapper";
import { Accordion } from "../accordion";
import { H2 } from "../ui/typography";

const faqs = [
  {
    question:
      "Czym różni się strona stworzona przez Web Join od strony na WordPressie?",
    answer: `Strony, które tworzę, są:

- ✅ **Szybsze** – WordPress często używa ciężkich wtyczek i wolnych serwerów. Moje strony na **Next.js + Tailwind** ładują się błyskawicznie.
- ✅ **Bezpieczniejsze** – WordPress jest podatny na ataki przez stare wtyczki i luki w zabezpieczeniach. Moje strony działają na nowoczesnych technologiach i nie wymagają ciągłych aktualizacji.
- ✅ **Lepsze pod SEO** – Strony WordPress są często przeładowane kodem. Moje strony są **optymalizowane pod wyszukiwarki**, co pomaga Ci szybciej zdobywać klientów.
- ✅ **Bez ograniczeń** – WordPress narzuca ograniczenia techniczne i wymaga dodatkowych wtyczek. Moje strony są **szyte na miarę** pod Twoje potrzeby.

👉 **Jeśli chcesz stronę, która nie będzie sprawiać problemów i spowolnień, postaw na nowoczesne rozwiązania.**
`,
  },
  {
    question: "Dlaczego szybkość strony ma znaczenie?",
    answer: `📌 **Bo wpływa na:**

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

✅ **Jeśli zależy Ci na bezpieczeństwie – lepiej wybrać stronę bez WordPressa!**`,
  },
  {
    question: "Czy mogę samodzielnie edytować stronę?",
    answer: `Tak! Jeśli tego potrzebujesz, mogę dodać panel CMS (np. **Strapi** lub **Sanity**), który pozwoli Ci łatwo zmieniać treści, dodawać zdjęcia i wpisy na bloga – bez znajomości kodowania.

👉 **Jeśli chcesz stronę, którą będziesz mógł edytować, po prostu zaznacz to w formularzu kontaktowym!**`,
  },
  {
    question: "Ile kosztuje strona?",
    answer: `💰 **Ceny startowe:** 

-  **Landing Page** – od 500 zł
-  **Strona firmowa** – od 1000 zł
-  **Sklep internetowy** – od 3000 zł

📌 Cena zależy od funkcjonalności – mogę dopasować stronę do Twojego budżetu. **Po prostu opisz swoje potrzeby w formularzu!**`,
  },
  {
    question: "Czy moja strona będzie dobrze wyglądać na telefonie?",
    answer: `Tak! Każda strona, którą tworzę, jest w pełni **responsywna**. Oznacza to, że będzie świetnie wyglądać na:

- 📱 **Telefonach**
- 💻 **Laptopach**
- 🖥️ **Komputerach**
- 📊 **Tabletach**

👉 **Nie musisz się martwić – wszystko będzie dopracowane pod każde urządzenie!**`,
  },
  {
    question: "Jak wygląda proces tworzenia strony?",
    answer: `📌 **1. Kontakt** – Wypełniasz formularz na stronie (lub piszesz do mnie bezpośrednio).

📌 **2. Konsultacja** – Ustalamy, czego potrzebujesz i jaki masz budżet.

📌 **3. Projektowanie** – Tworzę wygląd strony w **Figma (UI/UX)**.

📌 **4. Kodowanie** – Przenoszę projekt na działającą stronę (**Next.js, Tailwind**).

📌 **5. Publikacja** – Umieszczam stronę na serwerze i dbam, by działała idealnie.

👉 **Wszystko zajmuje od 5 do 14 dni – szybciej niż na WordPressie!**`,
  },
  {
    question: "Co jeśli będę potrzebował zmian po publikacji strony?",
    answer: `Oferuję wsparcie techniczne – mogę wprowadzać zmiany na stronie, aktualizować treści lub dodać nowe funkcjonalności.

📌 Możesz wybrać opcję:

- 🔹 **Jednorazowe poprawki**
- 🔹 **Abonament miesięczny na opiekę techniczną**

👉 **Nie zostawię Cię samego ze stroną – zawsze możesz liczyć na moje wsparcie!**`,
  },
  {
    question: "Czy mogę mieć stronę w kilku językach?",
    answer: `Tak! Jeśli prowadzisz firmę, która obsługuje klientów z różnych krajów, mogę dodać obsługę wielu języków.

✅ **Możliwość przełączania języka** (PL / EN / DE itd.)

✅ **SEO dostosowane do różnych wersji językowych**

✅ **Automatyczne przekierowanie na język użytkownika**

📌 **Strona wielojęzyczna to świetny sposób na dotarcie do większej liczby klientów!**`,
  },
  {
    question: "Jak mogę zamówić stronę?",
    answer: `📌 **Wystarczy, że klikniesz JOIN** i wypełnisz krótki formularz – skontaktuję się z Tobą w **24h**!

🔥 **Masz inne pytania? Napisz do mnie, chętnie pomogę!**`,
  },
];

export function FaqSection() {
  return (
    <section id="faq">
      <MaxWidthWrapper className="flex flex-col items-center gap-y-8 py-16 md:gap-y-14 md:py-20">
        <H2>
          FAQ – <br /> Najczęściej zadawane pytania
        </H2>
        <Accordion questions={faqs} className="max-w-4xl" />
      </MaxWidthWrapper>
    </section>
  );
}
