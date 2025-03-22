import Link from "next/link";
// import { Github, Linkedin } from "lucide-react";
import { SubscribeForm } from "./subscribe-form";
import { Facebook } from "lucide-react";

export const navigation = [
  { name: "Start", href: "/" },
  { name: "Usługi", href: "/#uslugi" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "FAQ", href: "/#faq" },
];

export function Footer() {
  return (
    <footer className="w-screen bg-card bg-card-gradient px-4 pb-24 pt-12 text-card-foreground md:pb-8 xl:px-6">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <SubscribeForm />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Menu</h2>
          <div className="flex items-center gap-4">
            {navigation.map(({ href, name }) => (
              <Link key={href} href={href} className="capitalize">
                {name}
              </Link>
            ))}
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
              <Facebook />
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
