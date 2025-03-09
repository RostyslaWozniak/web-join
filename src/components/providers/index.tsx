import { ThemeProvider } from "./theme-provider";
import { ReactLenis } from "lenis/react";
import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      <ThemeProvider attribute="class">
        {children}{" "}
        <Toaster
          toastOptions={{
            classNames: {
              error: "bg-destructive text-destructive-foreground",
              success: "bg-emerald-500 text-white",
              warning: "text-yellow-400",
              info: "bg-blue-400",
            },
          }}
        />
      </ThemeProvider>
    </ReactLenis>
  );
}
