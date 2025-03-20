import {
  HomeIcon,
  PanelsTopLeft,
  Play,
  Settings2,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

export function MobileNav() {
  return (
    <nav className="bg-background/70 sticky bottom-0 z-50 w-screen backdrop-blur-lg md:hidden">
      <div className="grid grid-cols-5">
        <Link href="/">
          <MobileNavItem label="Start" icon={HomeIcon} />
        </Link>
        <Link href="/#uslugi">
          <MobileNavItem label="Usługi" icon={Settings2} />
        </Link>
        <Link href="/#portfolio">
          <MobileNavItem label="Portfolio" icon={PanelsTopLeft} />
        </Link>
        <Link href="/#faq">
          <div className="flex flex-col items-center gap-y-1 py-3">
            <div className="aspect-square w-min rounded-full border-2 p-1 text-center text-2xl">
              ?
            </div>
            <div className="text-xs">FAQ</div>
          </div>
        </Link>
        <Link href="/join">
          <div className="flex flex-col items-center gap-y-1 py-3">
            <div className="w-min rounded-full border-2 p-2">
              <Play className="stroke-primary-cyan text-primary-cyan translate-x-[1px]" />
            </div>
            <div className="text-xs">Join</div>
          </div>
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
    <div className="flex flex-col items-center gap-y-1 py-3">
      <div className="w-min rounded-full border-2 p-2">
        <Icon className="stroke-primary-cyan text-primary-cyan" />
      </div>
      <span className="sr-only">{`link to ${label}`}</span>
      <div className="text-xs">{label}</div>
    </div>
  );
}
