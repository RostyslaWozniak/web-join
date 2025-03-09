import { ThemeProvider } from "./theme-provider";
import { ReactLenis } from "lenis/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </ReactLenis>
  );
}
