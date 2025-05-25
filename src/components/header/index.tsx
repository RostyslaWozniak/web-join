import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Logo } from "@/components/icons";
import { GradientButton } from "@/components/ui/gradient-button";
import { navigation } from "./navigation";
import { Nav } from "./nav";
import Link from "next/link";

export function Header() {
  return (
    <header className="top-0 z-20 h-14 max-h-14 w-screen bg-secondary-gradient shadow-sm shadow-card backdrop-blur md:sticky md:h-14">
      <MaxWidthWrapper className="flex h-full items-center justify-between">
        <Link href="/" aria-label="home">
          <Logo className="-translate-x-2 scale-90 md:scale-100" />
        </Link>
        <nav className="hidden min-h-full flex-grow items-center md:flex">
          <Nav navigation={navigation} />
          <Link href="/join">
            <GradientButton size="default" showIcon outline>
              Dołącz
            </GradientButton>
          </Link>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
}
