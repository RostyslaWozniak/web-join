import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Logo } from "@/components/icons";
// import { ThemeToggle } from "@/components/ui/theme-toogle";
import { GradientButton } from "@/components/ui/gradient-button";
import { navigation } from "./navigation";
import { Nav } from "./nav";

export function Header() {
  return (
    <header className="top-0 z-20 h-12 max-h-16 w-screen bg-secondary-gradient shadow-sm shadow-primary-cyan/20 backdrop-blur md:sticky md:h-16">
      <MaxWidthWrapper className="flex h-full items-center justify-between">
        <Logo className="-translate-x-2 scale-90 md:scale-110" />
        <nav className="hidden min-h-full flex-grow items-center md:flex">
          <Nav navigation={navigation} />

          <GradientButton showIcon outline>
            Join
          </GradientButton>
        </nav>
        {/* <div className="min-w-14 pl-4 pt-1">
          <ThemeToggle />
        </div> */}
      </MaxWidthWrapper>
    </header>
  );
}
