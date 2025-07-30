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

interface ClinicDataSectionProps {
  control: Control<FormData>;
}

export function ClinicDataSection({ control }: ClinicDataSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>1. Dane przychodni</CardTitle>
        <CardDescription>
          Podstawowe informacje o przychodni weterynaryjnej
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={control}
            name="clinicData.clinicName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nazwa przychodni *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="np. Przychodnia Weterynaryjna ABC"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="clinicData.contactPerson"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Osoba kontaktowa *</FormLabel>
                <FormControl>
                  <Input placeholder="Imię i nazwisko" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={control}
          name="clinicData.address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adres *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ulica, numer, kod pocztowy, miasto"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={control}
            name="clinicData.clinicSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wielkość przychodni *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Wybierz wielkość" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="border-muted bg-background">
                    <SelectItem value="mala">Mała (1-2 weterynarzy)</SelectItem>
                    <SelectItem value="srednia">
                      Średnia (3-5 weterynarzy)
                    </SelectItem>
                    <SelectItem value="duza">Duża (6+ weterynarzy)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
