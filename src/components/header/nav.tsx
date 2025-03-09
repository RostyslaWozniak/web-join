"use client";

import { useEffect, useState } from "react";
import { NavItem } from "./nav-item";
import { type NavigationType } from "./navigation";
import throttle from "lodash.throttle";

type NavProps = {
  navigation: NavigationType;
};

export function Nav({ navigation }: NavProps) {
  const [activeSection, setActiveSection] = useState("start");
  useEffect(() => {
    const handleScroll = throttle(() => {
      const sectionElements = navigation.map((section) =>
        document.getElementById(section.href),
      );

      let currentSectionId = "";
      for (const section of sectionElements) {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSectionId = section.id;
          break;
        }
      }

      setActiveSection(currentSectionId);
    }, 500);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, navigation]);

  return (
    <ul className="flex flex-grow justify-center gap-4">
      {navigation.map(({ name, href }) => (
        <NavItem
          key={href}
          href={`/#${href}`}
          isActiveLink={activeSection === href}
        >
          {name}
        </NavItem>
      ))}
    </ul>
  );
}
