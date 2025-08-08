import { SubscribeForm } from "./subscribe-form";
import { FacebookIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { AccessibleLink } from "../accesible-link";

export const navigation = [
  { name: "Strona główna", href: "/", ariaLabel: "strony głównej" },
  { name: "Usługi", href: "/#uslugi", ariaLabel: "usług" },
  { name: "Portfolio", href: "/#portfolio", ariaLabel: "portfolio" },
  { name: "FAQ", href: "/#faq", ariaLabel: "najczęsciej zadawanych pytań" },
];

export function Footer() {
  return (
    <footer className="w-screen border-t px-4 pb-24 pt-12 text-card-foreground md:pb-8 xl:px-6">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <SubscribeForm />
        </div>

        <div>
          <h2 className="text-lg font-semibold">Linki</h2>
          <div className="flex flex-col items-start gap-x-3 text-start">
            {navigation.map(({ href, name, ariaLabel }) => (
              <AccessibleLink
                key={href}
                href={href}
                aria-label={`Przejdź do ${ariaLabel}`}
                className="w-min px-2 capitalize hover:underline sm:mx-0"
              >
                {name}
              </AccessibleLink>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Kontakt</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 px-2">
              <PhoneIcon className="h-4 w-4" />
              <span>+48 123 456 789</span>
            </div>
            <div className="flex items-center space-x-2 px-2">
              <MailIcon className="h-4 w-4" />
              <span>kontakt@webjoin.pl</span>
            </div>
            <div className="flex items-center space-x-2 px-2">
              <MapPinIcon className="h-4 w-4" />
              <span>Warszawa, Polska</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Social media</h2>
          <div className="flex">
            <AccessibleLink
              href="https://www.facebook.com/webjoinpl"
              target="_blank"
              aria-label="Przejdź do facebooka"
              className="w-min capitalize hover:underline sm:mx-0"
            >
              <FacebookIcon />
            </AccessibleLink>
          </div>
        </div>
      </div>
      <div className="text-foreground/90 mx-auto mt-12 flex max-w-[1400px] flex-col-reverse items-center justify-between gap-y-3 border-t border-muted-foreground pt-6 text-center text-sm md:flex-row">
        <span>
          &copy; {new Date().getFullYear()}. Wszystkie prawa zastrzeżone
        </span>
        <AccessibleLink
          href="/polityka-prywatnosci"
          className="hover:underline sm:mx-0"
          aria-label="Przejdź do polityki prywatności"
        >
          Polityka prywatności
        </AccessibleLink>
      </div>
    </footer>
  );
}
