// "use client";

// import type { Control } from "react-hook-form";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Slider } from "@/components/ui/slider";
// import type { FormData } from "@/lib/validation/vet-research-form";

// interface BudgetDecisionsSectionProps {
//   control: Control<FormData>;
// }

// export function BudgetDecisionsSection({
//   control,
// }: BudgetDecisionsSectionProps) {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>6. Budżet i decyzje</CardTitle>
//         <CardDescription>
//           Możliwości finansowe i proces podejmowania decyzji
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="space-y-6">
//         <FormField
//           control={control}
//           name="budgetDecisions.budgetRange"
//           render={({ field }) => (
//             <FormItem className="space-y-3">
//               <FormLabel>Miesięczny budżet na rozwiązania IT *</FormLabel>
//               <FormControl>
//                 <RadioGroup
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                   className="flex flex-col space-y-2"
//                 >
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="0-200" id="budget1" />
//                     <Label htmlFor="budget1">0-200 PLN</Label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="200-500" id="budget2" />
//                     <Label htmlFor="budget2">200-500 PLN</Label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="500-1000" id="budget3" />
//                     <Label htmlFor="budget3">500-1000 PLN</Label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="1000-2000" id="budget4" />
//                     <Label htmlFor="budget4">1000-2000 PLN</Label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="2000+" id="budget5" />
//                     <Label htmlFor="budget5">Powyżej 2000 PLN</Label>
//                   </div>
//                 </RadioGroup>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={control}
//           name="budgetDecisions.decisionMaker"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Kto podejmuje decyzje o zakupach IT? *</FormLabel>
//               <Select onValueChange={field.onChange} defaultValue={field.value}>
//                 <FormControl>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Wybierz osobę decyzyjną" />
//                   </SelectTrigger>
//                 </FormControl>
//                 <SelectContent>
//                   <SelectItem value="wlasciciel">
//                     Właściciel przychodni
//                   </SelectItem>
//                   <SelectItem value="kierownik">Kierownik/Manager</SelectItem>
//                   <SelectItem value="zespol">Decyzja zespołowa</SelectItem>
//                   <SelectItem value="zewnetrzny">
//                     Zewnętrzny konsultant
//                   </SelectItem>
//                 </SelectContent>
//               </Select>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={control}
//           name="budgetDecisions.techOpenness"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Otwartość na nowe technologie (1-5)</FormLabel>
//               <FormControl>
//                 <div className="px-3">
//                   <Slider
//                     min={1}
//                     max={5}
//                     step={1}
//                     value={field.value}
//                     onValueChange={field.onChange}
//                     className="w-full"
//                   />
//                   <div className="mt-1 flex justify-between text-sm text-muted-foreground">
//                     <span>1 - Bardzo konserwatywny</span>
//                     <span>5 - Bardzo otwarty</span>
//                   </div>
//                 </div>
//               </FormControl>
//             </FormItem>
//           )}
//         />
//       </CardContent>
//     </Card>
//   );
// }
