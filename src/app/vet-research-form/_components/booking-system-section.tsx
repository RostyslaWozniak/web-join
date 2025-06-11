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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import type { FormData } from "@/lib/validation/vet-research-form";

interface BookingSystemSectionProps {
  control: Control<FormData>;
}

export function BookingSystemSection({ control }: BookingSystemSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>4. System rezerwacji</CardTitle>
        <CardDescription>
          Sposoby umówienia wizyt i zarządzanie kalendarzem
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <FormField
          control={control}
          name="bookingSystem.bookingMethods"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base font-medium">
                  Sposoby umówienia wizyty
                </FormLabel>
              </div>
              {[
                "Telefon",
                "Rezerwacja online",
                "Aplikacja mobilna",
                "Wizyta bez umówienia",
                "Email",
                "Facebook/Instagram",
              ].map((item) => (
                <FormField
                  key={item}
                  control={control}
                  name="bookingSystem.bookingMethods"
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

        <div className="space-y-4">
          <FormField
            control={control}
            name="bookingSystem.phoneBookingPercent"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Procent rezerwacji telefonicznych: {field.value[0]}%
                </FormLabel>
                <FormControl>
                  <Slider
                    min={0}
                    max={100}
                    step={5}
                    value={field.value}
                    onValueChange={field.onChange}
                    className="w-full"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="bookingSystem.onlineBookingPercent"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Procent rezerwacji online: {field.value[0]}%
                </FormLabel>
                <FormControl>
                  <Slider
                    min={0}
                    max={100}
                    step={5}
                    value={field.value}
                    onValueChange={field.onChange}
                    className="w-full"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="bookingSystem.walkInPercent"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Procent wizyt bez umówienia: {field.value[0]}%
                </FormLabel>
                <FormControl>
                  <Slider
                    min={0}
                    max={100}
                    step={5}
                    value={field.value}
                    onValueChange={field.onChange}
                    className="w-full"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={control}
          name="bookingSystem.currentSystem"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Aktualnie używany system</FormLabel>
              <FormControl>
                <Input
                  placeholder="np. VetManager, własny system, Excel"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="bookingSystem.systemSatisfaction"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zadowolenie z obecnego systemu (1-5)</FormLabel>
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={control}
            name="bookingSystem.hasNoShowProblem"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">
                    {'Problem z "no-show"?'}
                  </FormLabel>
                  <FormDescription>
                    Czy klienci nie przychodzą na umówione wizyty?
                  </FormDescription>
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
            name="bookingSystem.sendsReminders"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">
                    Wysyłanie przypomnień
                  </FormLabel>
                  <FormDescription>
                    Czy wysyłacie przypomnienia o wizytach?
                  </FormDescription>
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
        </div>
      </CardContent>
    </Card>
  );
}
