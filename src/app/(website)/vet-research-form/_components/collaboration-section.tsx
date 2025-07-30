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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FormData } from "@/lib/validation/vet-research-form";

interface CollaborationSectionProps {
  control: Control<FormData>;
}

export function CollaborationSection({ control }: CollaborationSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>5. Zainteresowanie współpracą</CardTitle>
        <CardDescription>
          Preferencje kontaktowe i źródła rekomendacji
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <FormField
          control={control}
          name="collaboration.contactPreference"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferowany sposób kontaktu *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Wybierz preferowany kontakt" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="border-muted bg-background">
                  <SelectItem value="telefon">Telefon</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="wizyta">Wizyta osobista</SelectItem>
                  <SelectItem value="video">Rozmowa wideo</SelectItem>
                  <SelectItem value="brak">Brak zainteresowania</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="collaboration.email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adres email do kontaktu</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="przyklad@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="collaboration.phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numer telefonu do kontaktu</FormLabel>
              <FormControl>
                <Input placeholder="+48 123 777 777" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
