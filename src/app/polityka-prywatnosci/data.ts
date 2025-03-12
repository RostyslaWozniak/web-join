import { Contact } from "@/lib/contact-data";

export const privacyPolicyContent = `# Polityka Prywatności

**Data ostatniej aktualizacji: 12.03.2025**

## 1. Administrator danych
Administratorem danych osobowych jest ${Contact.businessName}, z siedzibą pod adresem ${Contact.address}, e-mail: ${Contact.contactEmail}.

## 2. Zakres zbieranych danych
Za pośrednictwem naszej strony internetowej zbieramy następujące dane osobowe:
- **Formularz newslettera**: adres e-mail.
- **Formularz kontaktowy**: imię, adres e-mail, numer telefonu.

## 3. Cel i podstawa prawna przetwarzania danych
Dane przetwarzamy w celu:
- **Wysyłki newslettera** – na podstawie zgody użytkownika (art. 6 ust. 1 lit. a RODO).
- **Obsługi zapytań przesłanych przez formularz kontaktowy** – na podstawie uzasadnionego interesu administratora (art. 6 ust. 1 lit. f RODO), polegającego na udzieleniu odpowiedzi na zapytanie.

## 4. Przechowywanie danych
Dane będą przechowywane:
- W przypadku newslettera – do czasu wycofania zgody przez użytkownika.
- W przypadku formularza kontaktowego – przez okres niezbędny do obsługi zapytania i ewentualnej dalszej korespondencji.

## 5. Udostępnianie danych
Nie udostępniamy danych osobowych podmiotom trzecim, chyba że wynika to z obowiązującego prawa.

## 6. Prawa użytkownika
Każdy użytkownik ma prawo do:
- dostępu do swoich danych,
- sprostowania danych,
- usunięcia danych,
- ograniczenia przetwarzania,
- wycofania zgody (w przypadku newslettera),
- wniesienia sprzeciwu wobec przetwarzania,
- przenoszenia danych.

W celu realizacji praw należy skontaktować się pod adresem: ${Contact.contactEmail}.

## 7. Bezpieczeństwo danych
- Strona działa w oparciu o protokół HTTPS.
- Dane przechowywane są na zabezpieczonych serwerach.
- Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony danych.

## 8. Pliki cookies
Na naszej stronie używamy plików cookies w celu zapewnienia prawidłowego działania witryny. Pliki cookies nie są wykorzystywane do celów marketingowych.

## 9. Kontakt i skargi
W sprawach dotyczących danych osobowych można skontaktować się pod adresem: ${Contact.contactEmail}.
Użytkownik ma prawo złożyć skargę do organu nadzorczego, np. Urzędu Ochrony Danych Osobowych.`;
