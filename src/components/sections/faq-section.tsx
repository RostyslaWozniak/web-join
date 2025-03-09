"use client";

import { MaxWidthWrapper } from "../max-width-wrapper";
import { Accordion } from "../accordion";
import { H2 } from "../ui/typography";

const faq = [
  {
    question: "Jak długo potrwa stworzenie mojej strony internetowej?",
    answer:
      "Czas realizacji projektu zależy od jego skomplikowania, ale zazwyczaj proces stworzenia strony zajmuje od 2 do 4 tygodni. Zawsze staram się być elastyczny i dostosować do Twoich potrzeb",
  },
  {
    question: "Czy moja strona będzie działać na urządzeniach mobilnych?",
    answer:
      "Tak, każda strona, którą tworzę, jest w pełni responsywna, co oznacza, że będzie działać bez zarzutu na urządzeniach mobilnych, tabletach i komputerach.",
  },
  {
    question: "Czy moja strona będzie zoptymalizowana pod kątem SEO?",
    answer:
      "Tak, od samego początku uwzględniam zasady SEO przy tworzeniu strony, aby była łatwa do znalezienia w wyszukiwarkach. W razie potrzeby mogę również zaproponować dodatkowe usługi SEO, aby poprawić jej pozycję. ",
  },
  {
    question:
      "Jakie informacje będę musiał dostarczyć, aby rozpocząć współpracę?",
    answer:
      "Aby rozpocząć, potrzebuję kilku podstawowych informacji: o Twojej firmie, branży, preferencjach dotyczących designu (np. kolorystyka, styl), treści (np. teksty, zdjęcia), oraz celów, które chcesz osiągnąć dzięki stronie.",
  },
  {
    question: "Czy muszę mieć już własny hosting i domenę?",
    answer:
      "Nie musisz się martwić o hosting i domenę. Mogę pomóc w ich zakupie i konfiguracji. Jeśli już masz te usługi, pomogę Ci je skonfigurować na Twojej stronie.",
  },
  {
    question: "Jakie są koszty stworzenia strony?",
    answer:
      "Cena strony zależy od zakresu projektu, funkcji, które chcesz mieć na stronie, oraz stopnia skomplikowania. Zawsze przedstawiam szczegółową wycenę, abyś dokładnie wiedział, na co się decydujesz.",
  },
];

export function FaqSection() {
  return (
    <section id="faq">
      <MaxWidthWrapper className="flex flex-col items-center gap-y-8 py-16 md:gap-y-14 md:py-20">
        <H2>
          FAQ – <br /> Najczęściej zadawane pytania
        </H2>
        <Accordion questions={faq} className="max-w-4xl" />
      </MaxWidthWrapper>
    </section>
  );
}
