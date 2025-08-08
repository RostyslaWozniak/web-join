import { AccessibleLink } from "../accesible-link";

type NavItemProps = {
  href: string;
  children: React.ReactNode;
  isActiveLink: boolean;
};

export function NavItem({ href, children, isActiveLink }: NavItemProps) {
  return (
    <li className="relative h-full hover:bg-primary-gradient hover:bg-clip-text hover:text-transparent hover:duration-300">
      <AccessibleLink
        href={href}
        aria-label={`prezejdz do strony ${href}`}
        className="text-nowrap p-4"
      >
        {children} <span className="absolute inset-0"></span>
      </AccessibleLink>
      {isActiveLink && (
        <span className="absolute -bottom-0.5 left-0 h-1 w-full rounded-full bg-primary-gradient"></span>
      )}
    </li>
  );
}
