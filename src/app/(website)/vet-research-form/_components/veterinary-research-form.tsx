"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { formSchema, type FormData } from "@/lib/validation/vet-research-form";
import { ClinicDataSection } from "./clinic-data-section";
import { WebsiteSection } from "./website-section";
import { MarketingSection } from "./marketing-section";
import { BookingSystemSection } from "./booking-system-section";
import { ProblemsNeedsSection } from "./problems-needs-section";
import { BudgetDecisionsSection } from "./budget-decisions-section";
import { CollaborationSection } from "./collaboration-section";
import { ObservationsSection } from "./observations-section";
import { EvaluationSection } from "./evaluation-section";
import { useTransition } from "react";
import { sendVetSearchForm } from "../actions";
import { Loader } from "lucide-react";
import { toast } from "sonner";

export default function VeterinaryResearchForm() {
  const [isSending, startTransition] = useTransition();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clinicData: {
        clinicName: "",
        address: "",
        contactPerson: "",
        clinicSize: "",
      },
      website: {
        hasWebsite: false,
        websiteCost: "",
        websiteSatisfaction: [3],
        generatesLeads: false,
        websiteIssues: [],
      },
      marketing: {
        marketingChannels: [],
        googleAdsBudget: "",
        facebookBudget: "",
        seoBudget: "",
      },
      bookingSystem: {
        bookingMethods: [],
        phoneBookingPercent: [60],
        onlineBookingPercent: [30],
        walkInPercent: [10],
        currentSystem: "",
        systemSatisfaction: [3],
        hasNoShowProblem: false,
        sendsReminders: false,
      },
      problemsNeeds: {
        mainProblems: "",
        painPoints: [],
        wishlist: [],
      },
      budgetDecisions: {
        budgetRange: "",
        decisionMaker: "",
        techOpenness: [3],
      },
      collaboration: {
        contactPreference: "",
        email: "",
        phone: "",
      },
      observations: {
        notes: "",
        followUpActions: [],
      },
      evaluation: {
        priorityLevel: "",
        contractValue: "",
        decisionTimeframe: "",
        productInsights: "",
      },
    },
  });

  function onSubmit(values: FormData) {
    startTransition(async () => {
      const error = await sendVetSearchForm(values);
      if (error) {
        toast.error("Coś poszło nie tak. Spróbuj wysłać ponownie.");
        return;
      }
      startTransition(() => {
        form.reset();
        toast.success("Formularz został wysłany.");
      });
    });
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-center text-3xl font-bold">
          Badanie rynku - Przychodnię weterynaryjne
        </h1>
        <p className="text-center text-muted-foreground">
          Formularz wywiadu z właścicielami przychodni weterynaryjnych
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <ClinicDataSection control={form.control} />
          <WebsiteSection control={form.control} />
          <MarketingSection control={form.control} />
          <BookingSystemSection control={form.control} />
          <ProblemsNeedsSection control={form.control} />
          <BudgetDecisionsSection control={form.control} />
          <CollaborationSection control={form.control} />
          <ObservationsSection control={form.control} />
          <EvaluationSection control={form.control} />

          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              disabled={isSending}
              size="lg"
              className="w-full bg-primary-gradient px-8 text-lg text-background md:w-auto"
            >
              {isSending && (
                <Loader className="animate-spin stroke-2" stroke="white" />
              )}
              Wyślij formularz badawczy
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
