import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Logo } from "@/components/icons";
import { GradientButton } from "@/components/ui/gradient-button";
import { Nav } from "./nav";
import Link from "next/link";
import { BurgerNav } from "@/features/burger-nav";

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
        <Link href="/" aria-label="home">
          <Logo className="h-12 w-36 sm:h-14 sm:w-40" />
        </Link>
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
    <Link href="/join">
      <GradientButton size="default" textSize="text-base" showIcon outline>
        Dołącz
      </GradientButton>
    </Link>
  );
}
