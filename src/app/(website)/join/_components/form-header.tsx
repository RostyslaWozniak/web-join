import { Text } from "@/components/ui/typography";
import React from "react";

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-1">
      <h2 className="text-2xl font-semibold md:text-4xl">{title}</h2>
      {subtitle && (
        <Text variant="muted" size="sm">
          {subtitle}
        </Text>
      )}
    </div>
  );
}
