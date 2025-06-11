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
import { Input } from "@/components/ui/input";
import type { FormData } from "@/lib/validation/vet-research-form";

interface MarketingSectionProps {
  control: Control<FormData>;
}

export function MarketingSection({ control }: MarketingSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>3. Marketing online</CardTitle>
        <CardDescription>
          Aktywność marketingowa w internecie i budżety
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <FormField
          control={control}
          name="marketing.marketingChannels"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base font-medium">
                  Wykorzystywane kanały marketingowe
                </FormLabel>
              </div>
              {[
                "Google Ads",
                "Facebook Ads",
                "SEO",
                "Instagram",
                "Email marketing",
                "Ulotki/reklama tradycyjna",
              ].map((item) => (
                <FormField
                  key={item}
                  control={control}
                  name="marketing.marketingChannels"
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <FormField
            control={control}
            name="marketing.googleAdsBudget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budżet Google Ads (PLN/miesiąc)</FormLabel>
                <FormControl>
                  <Input placeholder="np. 1000" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="marketing.facebookBudget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budżet Facebook Ads (PLN/miesiąc)</FormLabel>
                <FormControl>
                  <Input placeholder="np. 500" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="marketing.seoBudget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budżet SEO (PLN/miesiąc)</FormLabel>
                <FormControl>
                  <Input placeholder="np. 800" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
