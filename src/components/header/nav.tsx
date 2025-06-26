// import { useEffect, useState } from "react";
import { NavItem } from "./nav-item";
import { type NavigationType } from "./navigation";
// import throttle from "lodash.throttle";
// import { usePathname } from "next/navigation";

type NavProps = {
  navigation: Record<string, string>[];
};

export function Nav({ navigation }: NavProps) {
  // const [activeSection, setActiveSection] = useState("");
  // useEffect(() => {
  //   const handleScroll = throttle(() => {
  //     const sectionElements = navigation.map((section) =>
  //       document.getElementById(section.href.replace("/", "").replace("#", "")),
  //     );

  //     let currentSectionId = "";
  //     for (const section of sectionElements) {
  //       if (!section) return;
  //       const rect = section.getBoundingClientRect();
  //       if (
  //         rect.top <= window.innerHeight / 2 &&
  //         rect.bottom >= window.innerHeight / 2
  //       ) {
  //         currentSectionId = section.id;
  //         break;
  //       }
  //     }

  //     setActiveSection(currentSectionId);
  //   }, 500);

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [activeSection, navigation]);

  return (
    <ul className="flex flex-grow justify-center gap-4">
      {navigation.map(({ name, href }) => (
        <NavItem key={href} href={`${href}`} isActiveLink={false}>
          {name}
        </NavItem>
      ))}
    </ul>
  );
}
