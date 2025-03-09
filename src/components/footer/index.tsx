import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { navigation } from "@/components/header/navigation";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-screen bg-card bg-card-gradient px-4 py-12 text-card-foreground xl:px-6">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-[500px] space-y-4">
          <h2 className="text-lg font-semibold">Zapisz się do newslettera</h2>

          <form className="flex flex-col items-center gap-2 sm:flex-row">
            <Input
              type="email"
              placeholder="Wpisz swój email"
              className="h-full py-2.5 text-base placeholder:text-foreground/90"
            />
            <Button
              variant="secondary"
              className="group h-10 w-full px-8 py-0 text-base text-foreground sm:w-min"
            >
              Zapisz się
            </Button>
          </form>
          <Text variant="muted" size="sm">
            Zapisując się, zgadzasz się na otrzymywanie aktualizacji i
            akceptujesz naszą Politykę prywatności.
          </Text>
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
          <h2 className="text-lg font-semibold">Linki</h2>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/RostyslaWozniak">
              <Github />
            </Link>
            <Link href="https://www.linkedin.com/in/rostyslav-vozniak/">
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
