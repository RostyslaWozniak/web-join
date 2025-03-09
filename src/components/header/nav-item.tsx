import Link from "next/link";

type NavItemProps = {
  href: string;
  children: React.ReactNode;
  isActiveLink: boolean;
};

export function NavItem({ href, children, isActiveLink }: NavItemProps) {
  return (
    <li className="relative h-full p-4 hover:bg-primary-gradient hover:bg-clip-text hover:text-transparent hover:duration-300">
      <Link href={href}>
        {children} <span className="absolute inset-0"></span>
      </Link>
      {isActiveLink && (
        <span className="absolute -bottom-0.5 left-0 h-1 w-full rounded-full bg-primary-gradient"></span>
      )}
    </li>
  );
}
