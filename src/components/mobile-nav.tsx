import { cn } from "@/lib/utils";
import { PlayIcon, type LucideIcon } from "lucide-react";
import Link from "next/link";

export function MobileNav({
  navigation,
  actionButton = false,
}: {
  navigation: { href: string; label: string; icon?: LucideIcon }[];
  actionButton?: boolean;
}) {
  return (
    <nav className="bg-background/70 fixed bottom-2 left-2 right-2 z-50 mx-auto max-w-[400px] rounded-full bg-[#22D3EE30] text-foreground shadow-[0px_0px_20px_6px_#22D3EE20] backdrop-blur-lg md:hidden">
      <div
        className={cn("grid translate-y-2 grid-cols-4", {
          "grid-cols-5":
            (actionButton && navigation.length > 3) || navigation.length > 4,
        })}
      >
        {navigation.map(
          ({ label, href, icon: Icon }) =>
            Icon && (
              <Link href={href} key={href}>
                <MobileNavItem label={label} icon={Icon} />
              </Link>
            ),
        )}
        {actionButton && (
          <Link href="/join">
            <div className="flex flex-col items-center gap-y-0.5 pb-3">
              <div className="rounded-full bg-primary-gradient p-2 dark:bg-popover">
                <PlayIcon className="translate-x-[1px] text-white" />
              </div>
              <div className="text-xs">Dołącz</div>
            </div>
          </Link>
        )}
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
      <div className="text-center text-xs">{label}</div>
    </div>
  );
}
