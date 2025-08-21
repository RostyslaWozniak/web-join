import { SubscribeForm } from "./subscribe-form";
import { FacebookIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { AccessibleLink } from "../accesible-link";
import { contactData } from "@/data/contact-data";
import Link from "next/link";

export const navigation = [
  { name: "Strona główna", href: "/", ariaLabel: "strony głównej" },
  { name: "Usługi", href: "/#uslugi", ariaLabel: "usług" },
  { name: "Portfolio", href: "/#portfolio", ariaLabel: "portfolio" },
  { name: "FAQ", href: "/#faq", ariaLabel: "najczęsciej zadawanych pytań" },
  { name: "Blog", href: "/blog", ariaLabel: "bloga" },
  {
    name: "Problemy lokalnych firm",
    href: "/problemy",
    ariaLabel: "strony z problemami lokalnych firm",
  },
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
          <div className="flex flex-col items-start text-start">
            {navigation.map(({ href, name, ariaLabel }) => (
              <Link
                key={href}
                href={href}
                aria-label={`Przejdź do ${ariaLabel}`}
                className="w-min text-nowrap px-2 capitalize hover:underline sm:mx-0"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Kontakt</h2>
          <div>
            <AccessibleLink
              href={`tel:${contactData.phone}`}
              aria-label="Zadzwoń"
              className="flex items-center space-x-2 hover:underline sm:w-full"
              target="_blank"
            >
              <PhoneIcon className="h-4 w-4" />
              <span>{contactData.phone}</span>
            </AccessibleLink>
            <AccessibleLink
              href={`mailto:${contactData.emails.contact}`}
              aria-label="Zadzwoń"
              target="_blank"
              className="flex items-center space-x-2 hover:underline sm:w-full"
            >
              <MailIcon className="h-4 w-4" />
              <span>{contactData.emails.contact}</span>
            </AccessibleLink>
            <AccessibleLink
              href={contactData.address.googleUrl}
              aria-label="Zadzwoń"
              target="_blank"
              className="flex items-center space-x-2 hover:underline sm:w-full"
            >
              <MapPinIcon className="h-4 w-4" />
              <span>
                {contactData.address.city}, {contactData.address.country}
              </span>
            </AccessibleLink>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Social media</h2>
          <div className="flex">
            <AccessibleLink
              href={contactData.socials.facebook}
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
