"use client";

import { type Control, useWatch } from "react-hook-form";
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
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import type { FormData } from "@/lib/validation/vet-research-form";

interface WebsiteSectionProps {
  control: Control<FormData>;
}

export function WebsiteSection({ control }: WebsiteSectionProps) {
  const hasWebsite = useWatch({ control, name: "website.hasWebsite" });

  return (
    <Card>
      <CardHeader>
        <CardTitle>2. Strona internetowa</CardTitle>
        <CardDescription>
          Informacje o obecności online i stronie internetowej
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <FormField
          control={control}
          name="website.hasWebsite"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">
                  Czy przychodnia ma stronę internetową?
                </FormLabel>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {hasWebsite && (
          <>
            <FormField
              control={control}
              name="website.websiteCost"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Koszt strony internetowej (PLN)</FormLabel>
                  <FormControl>
                    <Input placeholder="np. 5000" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="website.websiteSatisfaction"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Zadowolenie ze strony (1-5)</FormLabel>
                  <FormControl>
                    <div className="px-3">
                      <Slider
                        min={1}
                        max={5}
                        step={1}
                        value={field.value}
                        onValueChange={field.onChange}
                        className="w-full"
                      />
                      <div className="mt-1 flex justify-between text-sm text-muted-foreground">
                        <span>1 - Bardzo niezadowolony</span>
                        <span>5 - Bardzo zadowolony</span>
                      </div>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="website.generatesLeads"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Czy strona generuje nowych klientów?
                    </FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="website.websiteIssues"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base font-medium">
                      Problemy ze stroną internetową
                    </FormLabel>
                  </div>
                  {[
                    "Przestarzały wygląd",
                    "Brak responsywności",
                    "Wolne ładowanie",
                    "Trudna nawigacja",
                    "Brak informacji kontaktowych",
                    "Brak systemu rezerwacji",
                  ].map((item) => (
                    <FormField
                      key={item}
                      control={control}
                      name="website.websiteIssues"
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
                            <FormLabel className="font-normal">
                              {item}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </FormItem>
              )}
            />
          </>
        )}
      </CardContent>
    </Card>
  );
}
