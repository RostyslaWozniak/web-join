import { Section, Text } from "@react-email/components";

export const Header = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string | null;
}) => {
  return (
    <Section className="text-center">
      <Text className="my-2.5 text-2xl text-foreground">{title}</Text>
      {subtitle && (
        <Text className="text-base text-foreground">{subtitle}</Text>
      )}
    </Section>
  );
};
