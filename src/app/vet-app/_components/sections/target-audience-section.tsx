import { Card, CardContent } from "@/components/ui/card";
import { CheckCircleIcon } from "lucide-react";

export function TargetAudienceSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-12 text-3xl font-bold text-gray-900 lg:text-4xl">
            👨‍⚕️ Czy to rozwiązanie dla Twojej przychodni?
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-8">
                <CheckCircleIcon className="mx-auto mb-4 h-8 w-8 text-green-600" />
                <p className="text-lg text-gray-700">
                  Tak, jeśli masz dość telefonów z pytaniami o terminy
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-8">
                <CheckCircleIcon className="mx-auto mb-4 h-8 w-8 text-green-600" />
                <p className="text-lg text-gray-700">
                  Tak, jeśli chcesz wyglądać profesjonalnie online
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-8">
                <CheckCircleIcon className="mx-auto mb-4 h-8 w-8 text-green-600" />
                <p className="text-lg text-gray-700">
                  Tak, jeśli chcesz mieć więcej powracających klientów
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-8">
                <CheckCircleIcon className="mx-auto mb-4 h-8 w-8 text-green-600" />
                <p className="text-lg text-gray-700">
                  Tak, jeśli myślisz długoterminowo o rozwoju
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
