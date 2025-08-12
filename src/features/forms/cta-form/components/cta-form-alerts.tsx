import { Alert } from "@/components/alert";
import { CircleCheckBigIcon, ClockIcon, TriangleAlertIcon } from "lucide-react";

export function CtaFormAlerts({
  error,
  success,
}: {
  error: string | null;
  success: string | null;
}) {
  return (
    <>
      {error && (
        <div className="col-span-3 mx-auto w-full">
          <Alert
            variant="destructive"
            className="mb-4 space-y-2"
            icon={TriangleAlertIcon}
          >
            <p className="font-bold">Błąd!</p>
            <p className="max-w-2xl">{error}</p>
          </Alert>
        </div>
      )}
      {success && (
        <div className="col-span-3 mx-auto w-full">
          <Alert
            variant="success"
            className="mb-4 space-y-2"
            icon={CircleCheckBigIcon}
          >
            <p className="font-bold">Sprawdź maila!</p>
            <p className="max-w-2xl">{success}</p>
          </Alert>
        </div>
      )}
      {!success && !error && (
        <div className="col-span-3 mx-auto w-full">
          <Alert variant="default" className="mb-4 space-y-2" icon={ClockIcon}>
            <p className="font-bold">Co dzieje się dalej?</p>
            <p className="text-xs md:text-sm">
              Po wysłaniu formularza odezwę się do Ciebie mailowo, żebyśmy mogli
              wspólnie ustalić wygodny termin 30-minutowej, bezpłatnej rozmowy
              online. Porozmawiamy wtedy o Twoim projekcie i kolejnych krokach.
              Do zobaczenia!
            </p>
          </Alert>
        </div>
      )}
    </>
  );
}
