// "use client";

// import type { Control } from "react-hook-form";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
// } from "@/components/ui/form";
// import { Textarea } from "@/components/ui/textarea";
// import type { FormData } from "@/lib/validation/vet-research-form";

// interface ObservationsSectionProps {
//   control: Control<FormData>;
// }

// export function ObservationsSection({ control }: ObservationsSectionProps) {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>8. Obserwacje i follow-up</CardTitle>
//         <CardDescription>
//           Ocena rozmowy i planowane działania następne
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="space-y-6">
//         <FormField
//           control={control}
//           name="observations.notes"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Dodatkowe notatki z rozmowy</FormLabel>
//               <FormControl>
//                 <Textarea
//                   placeholder="Ważne spostrzeżenia, cytaty, dodatkowe informacje..."
//                   className="min-h-[100px]"
//                   {...field}
//                 />
//               </FormControl>
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={control}
//           name="observations.followUpActions"
//           render={() => (
//             <FormItem>
//               <div className="mb-4">
//                 <FormLabel className="text-base font-medium">
//                   Planowane działania follow-up
//                 </FormLabel>
//               </div>
//               {[
//                 "Wysłanie oferty",
//                 "Umówienie prezentacji",
//                 "Przesłanie materiałów informacyjnych",
//                 "Kontakt za tydzień",
//                 "Kontakt za miesiąc",
//                 "Dodanie do newslettera",
//                 "Brak dalszych działań",
//               ].map((item) => (
//                 <FormField
//                   key={item}
//                   control={control}
//                   name="observations.followUpActions"
//                   render={({ field }) => {
//                     return (
//                       <FormItem
//                         key={item}
//                         className="flex flex-row items-start space-x-3 space-y-0"
//                       >
//                         <FormControl>
//                           <Checkbox
//                             checked={field.value?.includes(item)}
//                             onCheckedChange={(checked) => {
//                               return checked
//                                 ? field.onChange([...field.value, item])
//                                 : field.onChange(
//                                     field.value?.filter(
//                                       (value) => value !== item,
//                                     ),
//                                   );
//                             }}
//                           />
//                         </FormControl>
//                         <FormLabel className="font-normal">{item}</FormLabel>
//                       </FormItem>
//                     );
//                   }}
//                 />
//               ))}
//             </FormItem>
//           )}
//         />
//       </CardContent>
//     </Card>
//   );
// }
