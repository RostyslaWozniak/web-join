import Link from "next/link";
import { navigation } from "@/components/header/navigation";
import { Github, Linkedin } from "lucide-react";
import { SubscribeForm } from "./subscribe-form";

export function Footer() {
  return (
    <footer className="w-screen bg-card bg-card-gradient px-4 py-12 text-card-foreground xl:px-6">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <SubscribeForm />

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
          <h2 className="text-lg font-semibold">Linki</h2>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/RostyslaWozniak" aria-label="github">
              <Github />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rostyslav-vozniak/"
              aria-label="linkedin"
            >
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1400px] items-center justify-between border-t border-muted-foreground pt-6 text-center text-sm text-foreground/90">
        <span>
          {" "}
          &copy; {new Date().getFullYear()}. Wszystkie prawa zastrzeżone
        </span>
        <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
      </div>
    </footer>
  );
}
