import { Button } from "../ui/button";
import { PlayCircle, Sun } from "lucide-react";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { Logo } from "../ui/logo";
import { NavItem } from "./nav-item";

export function Nav() {
  return (
    <header className="shadow-primary-cyan/20 bg-card-gradient top-0 z-20 h-12 max-h-16 w-screen shadow-sm backdrop-blur md:sticky md:h-16">
      <MaxWidthWrapper className="flex h-full items-center justify-between">
        <Logo className="-translate-x-2 scale-90 md:scale-110" />
        <nav className="hidden min-h-full flex-grow items-center md:flex">
          <ul className="flex flex-grow justify-center gap-4">
            <NavItem href="/">Start</NavItem>
            <NavItem href="/uslugi">Usługi</NavItem>
            <NavItem href="/portfolio">Portfolio</NavItem>
            <NavItem href="/kontakt">Kontakt</NavItem>
          </ul>
          <Button className="md:bg-primary-gradient relative hover:opacity-80">
            <div className="absolute inset-0.5 rounded-full bg-background" />
            <PlayCircle className="stroke-primary-cyan relative min-h-8 min-w-8 stroke-[1.5px] duration-300 group-hover:-translate-x-0.5 group-hover:scale-110" />
            <span className="bg-primary-gradient relative bg-clip-text text-2xl text-transparent">
              Join
            </span>
          </Button>
        </nav>
        <div className="cursor-pointer pl-4">
          <Sun className="stroke-primary-cyan relative min-h-6 min-w-6 stroke-[1.5px] duration-300 group-hover:-translate-x-0.5 group-hover:scale-110 md:min-h-8 md:min-w-8" />
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
