import {
  FileQuestion,
  HomeIcon,
  ListCheck,
  Play,
  Settings2,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

export function MobileNav() {
  return (
    <nav className="sticky bottom-0 z-50 w-screen bg-background/70 p-3 backdrop-blur-lg md:hidden">
      <div className="flex items-center justify-around">
        <Link href="/">
          <MobileNavItem label="Start" icon={HomeIcon} />
        </Link>
        <Link href="/#uslugi">
          <MobileNavItem label="Usługi" icon={Settings2} />
        </Link>
        <Link href="/#portfolio">
          <MobileNavItem label="Portfolio" icon={ListCheck} />
        </Link>
        <Link href="/#faq">
          <MobileNavItem label="FAQ" icon={FileQuestion} />
        </Link>
        <Link href="/join">
          <MobileNavItem label="Join" icon={Play} />
        </Link>
      </div>
    </nav>
  );
}

function MobileNavItem({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-y-1">
      <div className="-cyan w-min rounded-full border-2 border-primary-cyan p-2">
        <Icon className="stroke-primary-cyan text-primary-cyan" />
      </div>
      <div className="text-sm">{label}</div>
    </div>
  );
}
