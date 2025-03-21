import {
  BriefcaseBusiness,
  HomeIcon,
  Play,
  Settings2,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

export function MobileNav() {
  return (
    <nav className="bg-background/70 fixed bottom-2 left-2 right-2 z-50 mx-auto max-w-[400px] rounded-full bg-[#22D3EE30] text-foreground shadow-[0px_0px_20px_6px_#22D3EE20] backdrop-blur-lg md:hidden">
      <div className="grid translate-y-2 grid-cols-5">
        <Link href="/">
          <MobileNavItem label="Start" icon={HomeIcon} />
        </Link>
        <Link href="/#uslugi">
          <MobileNavItem label="Usługi" icon={Settings2} />
        </Link>
        <Link href="/#portfolio">
          <MobileNavItem label="Portfolio" icon={BriefcaseBusiness} />
        </Link>
        <Link href="/#faq">
          <div className="flex flex-col items-center gap-y-0.5 pb-3">
            <div className="aspect-square rounded-full bg-card p-1 text-center text-2xl dark:bg-popover">
              ?
            </div>
            <div className="text-xs">FAQ</div>
          </div>
        </Link>
        <Link href="/join">
          <div className="flex flex-col items-center gap-y-0.5 pb-3">
            <div className="rounded-full bg-primary-gradient p-2 dark:bg-popover">
              <Play className="translate-x-[1px] text-white" />
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
    <div className="flex flex-col items-center gap-y-0.5 pb-3">
      <div className="rounded-full bg-card p-2 dark:bg-popover">
        <Icon className="" />
      </div>
      <span className="sr-only">{`link to ${label}`}</span>
      <div className="text-xs">{label}</div>
    </div>
  );
}
