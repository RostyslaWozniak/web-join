import { z } from "zod";

// Section 1: Dane przychodni
export const clinicDataSchema = z.object({
  clinicName: z.string().min(2, "Nazwa przychodni jest wymagana"),
  address: z.string().min(5, "Adres jest wymagany"),
  contactPerson: z.string().min(2, "Osoba kontaktowa jest wymagana"),
  clinicSize: z.string().min(1, "Wielkość przychodni jest wymagana"),
});

// Section 2: Strona internetowa
export const websiteSchema = z.object({
  hasWebsite: z.boolean(),
  websiteCost: z.string().optional(),
  websiteSatisfaction: z.array(z.number()).length(1),
  generatesLeads: z.boolean(),
  websiteIssues: z.array(z.string()),
});

// Section 3: Marketing online
export const marketingSchema = z.object({
  marketingChannels: z.array(z.string()),
  googleAdsBudget: z.string().optional(),
  facebookBudget: z.string().optional(),
  seoBudget: z.string().optional(),
});

// Section 4: System rezerwacji
export const bookingSystemSchema = z.object({
  bookingMethods: z.array(z.string()),
  phoneBookingPercent: z.array(z.number()).length(1),
  onlineBookingPercent: z.array(z.number()).length(1),
  walkInPercent: z.array(z.number()).length(1),
  currentSystem: z.string().optional(),
  systemSatisfaction: z.array(z.number()).length(1),
  hasNoShowProblem: z.boolean(),
  sendsReminders: z.boolean(),
});

// Section 5: Problemy i potrzeby
export const problemsNeedsSchema = z.object({
  mainProblems: z.string().optional(),
  painPoints: z.array(z.string()),
  wishlist: z.array(z.string()),
});

// Section 6: Budżet i decyzje
export const budgetDecisionsSchema = z.object({
  budgetRange: z.string().min(1, "Zakres budżetu jest wymagany"),
  decisionMaker: z.string().min(1, "Osoba decyzyjna jest wymagana"),
  techOpenness: z.array(z.number()).length(1),
});

// Section 7: Zainteresowanie współpracą
export const collaborationSchema = z.object({
  contactPreference: z.string().min(1, "Preferowany kontakt jest wymagany"),
  email: z
    .string()
    .email("Nieprawidłowy adres email")
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),
});

// Section 8: Obserwacje i follow-up
export const observationsSchema = z.object({
  notes: z.string().optional(),
  followUpActions: z.array(z.string()),
});

// Section 9: Ocena i analiza
export const evaluationSchema = z.object({
  priorityLevel: z.string().min(1, "Poziom priorytetu jest wymagany"),
  contractValue: z.string().optional(),
  decisionTimeframe: z.string().optional(),
  productInsights: z.string().optional(),
});

// Combined form schema with nested structure
export const formSchema = z.object({
  clinicData: clinicDataSchema,
  website: websiteSchema,
  marketing: marketingSchema,
  bookingSystem: bookingSystemSchema,
  problemsNeeds: problemsNeedsSchema,
  budgetDecisions: budgetDecisionsSchema,
  collaboration: collaborationSchema,
  observations: observationsSchema,
  evaluation: evaluationSchema,
});

// Type definitions
export type ClinicDataFormData = z.infer<typeof clinicDataSchema>;
export type WebsiteFormData = z.infer<typeof websiteSchema>;
export type MarketingFormData = z.infer<typeof marketingSchema>;
export type BookingSystemFormData = z.infer<typeof bookingSystemSchema>;
export type ProblemsNeedsFormData = z.infer<typeof problemsNeedsSchema>;
export type BudgetDecisionsFormData = z.infer<typeof budgetDecisionsSchema>;
export type CollaborationFormData = z.infer<typeof collaborationSchema>;
export type ObservationsFormData = z.infer<typeof observationsSchema>;
export type EvaluationFormData = z.infer<typeof evaluationSchema>;

// Complete form data type
export type FormData = z.infer<typeof formSchema>;
