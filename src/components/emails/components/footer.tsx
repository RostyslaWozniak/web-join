import { Section, Text, Link } from "@react-email/components";

export const Footer = () => {
  return (
    <Section className="py-5 text-center text-[#455a63]">
      <Text>Masz pytania? Chętnie pomogę!</Text>
      <Text className="text-base">
        <Link href="https://www.webjoin.pl">www.webjoin.pl</Link> |{" "}
        <Link href="mailto:contact@webjoin.pl">contact@webjoin.pl</Link> |{" "}
        <Link href="tel:+48798582849">tel. +48 798 582 849</Link>
      </Text>
    </Section>
  );
};
