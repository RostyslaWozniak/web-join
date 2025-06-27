import { z } from "zod";

const serviceTypes = [
  "website",
  "e-commerce",
  "landing",
  "blog",
  "consultation",
  "book-app",
] as const;

const additionalFeatures = [
  "seo",
  "multilingual",
  "cms",
  "paymentIntegration",
  "fastLoading",
  "responsiveUx",
] as const;

export const contactFormSchema = z.object({
  email: z.union([z.string().email(), z.string().max(0)]),
  phone: z.union([z.string().regex(/^\+?[0-9]{7,15}$/), z.string().max(0)]),
  serviceType: z.enum(serviceTypes, { message: "Wybierz usługe" }),
  additionalFeatures: z.array(z.enum(additionalFeatures)),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export const initialContactFormSchema = z.object({
  email: z.string().optional(),
  phone: z.string().optional(),
  serviceType: z.enum(serviceTypes).optional(),
  additionalFeatures: z.array(z.enum(additionalFeatures)).optional(),
});

export type InitialContactFormSchema = z.infer<typeof initialContactFormSchema>;

// Contact method
export const contactMethodSchema = contactFormSchema
  .pick({
    email: true,
    phone: true,
  })
  .refine(
    (data) => {
      if (data.email) return true;
      if (data.phone) return true;
    },
    {
      message: "Podaj przynajmniej jeden kontakt: e-mail lub telefon",
      path: ["email"],
    },
  )
  .refine(
    (data) => {
      if (data.email) return true;
      if (data.phone) return true;
    },
    {
      message: "Podaj przynajmniej jeden kontakt: e-mail lub telefon",
      path: ["phone"],
    },
  );
export type ContactMethodSchema = z.infer<typeof contactMethodSchema>;

// Initial contact method
export const initialContactMethodSchema = initialContactFormSchema.pick({
  email: true,
  phone: true,
});
export type InitialContactMethodSchema = z.infer<
  typeof initialContactMethodSchema
>;

// Service selection
export const serviceSelectionSchema = contactFormSchema.pick({
  serviceType: true,
});
export type ServiceSelectionSchema = z.infer<typeof serviceSelectionSchema>;

// Additional features
export const additionalFeaturesSchema = contactFormSchema.pick({
  additionalFeatures: true,
});

export type AdditionalFeaturesSchema = z.infer<typeof additionalFeaturesSchema>;
