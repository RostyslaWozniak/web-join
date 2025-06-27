"use client";

import { usePathname } from "next/navigation";

type MatchType = "exact" | "startsWith" | "endsWith" | "includes" | "regex";

type PathCondition = {
  path: string;
  matchType: MatchType;
};

type ConditionalPathRendererProps = {
  children: React.ReactNode;
  condition: PathCondition | PathCondition[];
  mode?: "hide" | "show"; // hide = hide when condition matches, show = show only when condition matches
  fallback?: React.ReactNode; // what to render when children are hidden
};

export function ConditionalPathRenderer({
  children,
  condition,
  mode = "hide",
  fallback = null,
}: ConditionalPathRendererProps) {
  const pathname = usePathname();

  const matchesCondition = (pathCondition: PathCondition): boolean => {
    const { path, matchType } = pathCondition;

    switch (matchType) {
      case "exact":
        return pathname === path;
      case "startsWith":
        return pathname.startsWith(path);
      case "endsWith":
        return pathname.endsWith(path);
      case "includes":
        return pathname.includes(path);
      case "regex":
        try {
          return new RegExp(path).test(pathname);
        } catch {
          console.warn(`Invalid regex pattern: ${path}`);
          return false;
        }
      default:
        return false;
    }
  };

  const conditions = Array.isArray(condition) ? condition : [condition];
  const shouldMatch = conditions.some(matchesCondition);

  // If mode is 'hide': render children when condition doesn't match
  // If mode is 'show': render children when condition matches
  const shouldRenderChildren = mode === "hide" ? !shouldMatch : shouldMatch;

  return shouldRenderChildren ? <>{children}</> : <>{fallback}</>;
}

// Convenience components for common use cases
export function HideOnPath(props: Omit<ConditionalPathRendererProps, "mode">) {
  return <ConditionalPathRenderer {...props} mode="hide" />;
}

export function ShowOnPath(props: Omit<ConditionalPathRendererProps, "mode">) {
  return <ConditionalPathRenderer {...props} mode="show" />;
}
