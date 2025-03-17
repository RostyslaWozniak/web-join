import { H3, Text } from "@/components/ui/typography";
import React from "react";

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <H3>{title}</H3>
      {subtitle && <Text variant="muted">{subtitle}</Text>}
    </div>
  );
}
