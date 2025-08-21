"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      position="top-right"
      toastOptions={{
        unstyled: true,
        classNames: {
          default:
            " p-4 pr-8 rounded-lg flex items-center gap-2 md:min-w-[400px]",
          error: "bg-destructive text-destructive-foreground",
          success: "bg-emerald-500 text-white",
          warning: "text-yellow-400",
          info: "bg-blue-400 text-white",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
