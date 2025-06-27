import { NavItem } from "./nav-item";

type NavProps = {
  navigation: { href: string; label: string }[];
};

export function Nav({ navigation }: NavProps) {
  return (
    <ul className="flex flex-grow justify-center gap-4">
      {navigation.map(({ label, href }) => (
        <NavItem key={href} href={`${href}`} isActiveLink={false}>
          {label}
        </NavItem>
      ))}
    </ul>
  );
}
