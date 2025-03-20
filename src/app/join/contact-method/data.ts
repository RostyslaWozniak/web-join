import { Mail, Phone } from "lucide-react";

export const contactMethods = [
  {
    id: 1,
    label: "Telefon",
    value: "phone",
    icon: Phone,
  },
  {
    id: 2,
    label: "Email",
    value: "email",
    icon: Mail,
  },
] as const;
