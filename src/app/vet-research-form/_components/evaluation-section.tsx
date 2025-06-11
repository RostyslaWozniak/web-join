"use client";

import type { Control } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import type { FormData } from "@/lib/validation/vet-research-form";

interface EvaluationSectionProps {
  control: Control<FormData>;
}

export function EvaluationSection({ control }: EvaluationSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>9. Ocena i analiza</CardTitle>
        <CardDescription>
          Końcowa ocena potencjału klienta i możliwości współpracy
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <FormField
          control={control}
          name="evaluation.priorityLevel"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Poziom priorytetu klienta *</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="wysoki" id="priority1" />
                    <Label htmlFor="priority1">
                      Wysoki - gotowy do współpracy
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sredni" id="priority2" />
                    <Label htmlFor="priority2">
                      Średni - potencjalnie zainteresowany
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="niski" id="priority3" />
                    <Label htmlFor="priority3">
                      Niski - długoterminowy prospect
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="brak" id="priority4" />
                    <Label htmlFor="priority4">Brak zainteresowania</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={control}
            name="evaluation.contractValue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Szacowana wartość kontraktu (PLN)</FormLabel>
                <FormControl>
                  <Input placeholder="np. 5000" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="evaluation.decisionTimeframe"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Przewidywany czas decyzji</FormLabel>
                <FormControl>
                  <Input placeholder="np. 2-3 miesiące" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={control}
          name="evaluation.productInsights"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wnioski produktowe i rekomendacje</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Jakie funkcje produktu mogą być najbardziej atrakcyjne dla tego klienta? Jakie modyfikacje warto rozważyć?"
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
