import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Logo } from "@/components/icons";
import { Nav } from "./nav";
import { BurgerNav } from "@/features/burger-nav";

import { ArrowUpRightIcon } from "lucide-react";
import { AccessibleLink } from "../accesible-link";
import { Button } from "../ui/button";

export function Header({
  navigation,
  actionButton: ActionButton = <DefaultActionButton />,
}: {
  navigation: { href: string; label: string }[];
  actionButton?: React.ReactNode;
}) {
  return (
    <header className="sticky top-0 isolate z-20 h-14 max-h-14 w-screen bg-secondary-gradient shadow-sm shadow-card backdrop-blur md:sticky md:h-14">
      <div className="absolute inset-0 -z-10 bg-white/70" />
      <MaxWidthWrapper className="flex h-full items-center justify-between">
        <AccessibleLink
          href="/"
          aria-label="Przejdz do strony głównej"
          className="w-min sm:mx-0"
        >
          <Logo className="h-12 w-36 sm:h-14 sm:w-40" />
        </AccessibleLink>
        <nav className="hidden min-h-full flex-grow items-center md:flex">
          <Nav navigation={navigation} />
          {ActionButton}
        </nav>
        <div className="">
          <BurgerNav />
        </div>
      </MaxWidthWrapper>
    </header>
  );
}

function DefaultActionButton() {
  return (
    <AccessibleLink
      href="/kontakt"
      aria-label="przejdz do strony kontakt"
      className="grid min-h-11 min-w-11 place-items-center"
    >
      <Button size="default" variant="ghost">
        Darmowa konsultacja <ArrowUpRightIcon className="h-4 w-4" />
      </Button>
    </AccessibleLink>
  );
}
