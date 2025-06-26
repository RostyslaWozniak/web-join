"use client";

import type { Control } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import type { FormData } from "@/lib/validation/vet-research-form";

interface ProblemsNeedsSectionProps {
  control: Control<FormData>;
}

export function ProblemsNeedsSection({ control }: ProblemsNeedsSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>5. Problemy i potrzeby</CardTitle>
        <CardDescription>
          Główne wyzwania i oczekiwania względem nowych rozwiązań
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <FormField
          control={control}
          name="problemsNeeds.mainProblems"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Główne problemy w prowadzeniu przychodni</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Opisz najważniejsze wyzwania, z którymi się borykasz..."
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="problemsNeeds.painPoints"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base font-medium">
                  Najczęstsze problemy
                </FormLabel>
              </div>
              {[
                "Zarządzanie kalendarzem",
                "Komunikacja z klientami",
                "Prowadzenie dokumentacji",
                "Rozliczenia i faktury",
                "Brak czasu na marketing",
                "Trudności z pozyskaniem nowych klientów",
                "Zarządzanie zapasami leków",
                "Organizacja pracy zespołu",
              ].map((item) => (
                <FormField
                  key={item}
                  control={control}
                  name="problemsNeeds.painPoints"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item,
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">{item}</FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="problemsNeeds.wishlist"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base font-medium">
                  Lista życzeń - funkcje, które by się przydały
                </FormLabel>
              </div>
              {[
                "Automatyczne przypomnienia SMS/email",
                "System płatności online",
                "Aplikacja mobilna dla klientów",
                "Integracja z systemami księgowymi",
                "Zarządzanie historią medyczną",
                "System lojalnościowy",
                "Analityka i raporty",
                "Telemedycyna/konsultacje online",
              ].map((item) => (
                <FormField
                  key={item}
                  control={control}
                  name="problemsNeeds.wishlist"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item,
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">{item}</FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
