import { useEffect, useState } from "react";

const DEFAULT_MOBILE_BREAKPOINT = 768;

export function useIsMobile(width = DEFAULT_MOBILE_BREAKPOINT) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${width - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < width);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < width);
    return () => mql.removeEventListener("change", onChange);
  }, [width]);

  return isMobile;
}
