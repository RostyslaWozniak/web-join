import Link from "next/link";
import { SubscribeForm } from "./subscribe-form";
import { FacebookIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

export const navigation = [
  { name: "Start", href: "/" },
  { name: "Usługi", href: "/#uslugi" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "FAQ", href: "/#faq" },
];

export function Footer() {
  return (
    <footer className="w-screen border-t px-4 pb-24 pt-12 text-card-foreground md:pb-8 xl:px-6">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <SubscribeForm />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Linki</h2>
          <div className="flex items-start gap-x-4">
            {navigation.map(({ href, name }) => (
              <Link
                key={href}
                href={href}
                className="capitalize hover:underline"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-semibold">Kontakt</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-4 w-4" />
              <span>+48 123 456 789</span>
            </div>
            <div className="flex items-center space-x-2">
              <MailIcon className="h-4 w-4" />
              <span>kontakt@webjoin.pl</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-4 w-4" />
              <span>Warszawa, Polska</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Social media</h2>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.facebook.com/webjoinpl"
              target="_blank"
              aria-label="facebook"
            >
              <FacebookIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-foreground/90 mx-auto mt-12 flex max-w-[1400px] flex-col-reverse items-center justify-between gap-y-3 border-t border-muted-foreground pt-6 text-center text-sm md:flex-row">
        <span>
          &copy; {new Date().getFullYear()}. Wszystkie prawa zastrzeżone
        </span>
        <Link href="/polityka-prywatnosci" className="hover:underline">
          Polityka prywatności
        </Link>
      </div>
    </footer>
  );
}
