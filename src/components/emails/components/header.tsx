import { Section, Text } from "@react-email/components";

export const Header = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string | undefined;
}) => {
  return (
    <Section className="text-center">
      <Text className="my-2.5 text-2xl text-[#455a63]">{title}</Text>
      {subtitle && <Text className="text-base text-[#455a63]">{subtitle}</Text>}
    </Section>
  );
};
