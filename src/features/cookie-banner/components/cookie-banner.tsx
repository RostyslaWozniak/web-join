"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Cookie,
  Settings,
  Shield,
  BarChart3,
  ArrowLeftIcon,
} from "lucide-react";
import {
  useCookieConsent,
  type CookiePreferences,
} from "../hooks/use-cookie-consent";

export function CookieBanner() {
  const { isLoading, acceptAll, rejectAll, updatePreferences, preferences } =
    useCookieConsent();
  const [showCustomize, setShowCustomize] = useState(false);
  const [customPreferences, setCustomPreferences] = useState<CookiePreferences>(
    {
      necessary: true,
      analytics: false,
      marketing: false,
    },
  );

  useEffect(() => {
    if (preferences) {
      setCustomPreferences(preferences);
    }
  }, [preferences]);

  // Don't render if still loading or user has already consented
  if (isLoading || preferences) {
    return null;
  }

  const handleCustomizeToggle = (
    category: keyof CookiePreferences,
    value: boolean,
  ) => {
    setCustomPreferences((prev) => ({
      ...prev,
      [category]: category === "necessary" ? true : value, // Necessary cookies can't be disabled
    }));
  };

  const handleSaveCustom = () => {
    updatePreferences(customPreferences);
    setShowCustomize(false);
  };

  if (showCustomize) {
    return (
      <div className="fixed inset-0 z-50 flex w-full items-end justify-center bg-black/40 p-2 backdrop-blur-sm sm:items-center">
        <Card className="mx-auto max-h-[calc(100vh-16px)] max-w-2xl overflow-y-auto">
          <CardHeader>
            <div className="flex items-start gap-2">
              <Settings className="h-5 w-5" />
              <CardTitle>
                Dostosuj preferencje dotyczące plików cookie
              </CardTitle>
            </div>
            <CardDescription>
              Wybierz, które pliki cookie chcesz zaakceptować. Możesz zmienić te
              ustawienia w dowolnym momencie.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            {/* Necessary Cookies */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-1 items-start gap-3">
                <Shield className="mt-0.5 h-5 min-h-5 w-5 min-w-5 text-green-600" />
                <div className="space-y-1">
                  <Label className="text-base font-medium">
                    Wymagane pliki cookie
                  </Label>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    Te pliki cookie są niezbędne do prawidłowego funkcjonowania
                    witryny. Nie można ich wyłączyć.
                  </p>
                </div>
              </div>
              <Switch
                checked={true}
                disabled={true}
                aria-label="Required cookies (always enabled)"
              />
            </div>

            <Separator />

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-1 items-start gap-3">
                <BarChart3 className="mt-0.5 h-5 min-h-5 w-5 min-w-5 text-blue-600" />
                <div className="space-y-1">
                  <Label className="text-base font-medium">
                    Pliki cookie analityczne
                  </Label>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    Pomóż nam zrozumieć, w jaki sposób odwiedzający wchodzą w
                    interakcję z naszą witryną, poprzez zbieranie anonimowych
                    informacji.
                  </p>
                </div>
              </div>
              <Switch
                checked={customPreferences.analytics}
                onCheckedChange={(checked) =>
                  handleCustomizeToggle("analytics", checked)
                }
                aria-label="Analytics cookies"
              />
            </div>

            {/* Marketing Cookies */}

            {/* <Separator /> */}
            {/* <div className="flex items-start justify-between gap-4">
              <div className="flex flex-1 items-start gap-3">
                <Target className="mt-0.5 h-5 min-h-5 w-5 min-w-5 text-purple-600" />
                <div className="space-y-1">
                  <Label className="text-base font-medium">
                    Pliki cookie marketingowe
                  </Label>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    Służy do dostarczania spersonalizowanych reklam i mierzenia
                    skuteczności kampanii reklamowych.
                  </p>
                </div>
              </div>
              <Switch
                checked={customPreferences.marketing}
                onCheckedChange={(checked) =>
                  handleCustomizeToggle("marketing", checked)
                }
                aria-label="Marketing cookies"
              />
            </div> */}
          </CardContent>
          <CardFooter className="flex flex-col gap-2 sm:flex-row">
            <Button
              variant="outline"
              onClick={() => setShowCustomize(false)}
              className="w-full sm:w-auto"
            >
              <ArrowLeftIcon />
              Powrót
            </Button>
            <Button
              onClick={handleSaveCustom}
              className="w-full border border-transparent text-white sm:w-auto"
            >
              Zapisz preferencje
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  // if (hasConsented) {
  //   return (
  //     <Button
  //       size="icon"
  //       variant="ghost"
  //       className="fixed bottom-24 left-2 z-50 h-10 w-10 rounded-full text-accent-cyan backdrop-blur-md sm:left-auto sm:right-2 sm:top-20 sm:h-12 sm:w-12"
  //       onClick={() => setShowCustomize(true)}
  //     >
  //       <CookieIcon className="min-h-8 min-w-8 sm:min-h-10 sm:min-w-10" />
  //     </Button>
  //   );
  // }

  return (
    <div className="fixed inset-0 z-50 flex w-full items-end justify-center bg-black/40 p-2 backdrop-blur-sm sm:items-center">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Cookie className="h-5 w-5" />
            <CardTitle className="text-lg">Używamy plików cookie</CardTitle>
          </div>
          <CardDescription className="text-sm">
            Używamy plików cookie, aby ulepszyć Twoje wrażenia z przeglądania,
            dostarczać spersonalizowane treści i analizować nasz ruch. Klikając
            „Akceptuj wszystko”, wyrażasz zgodę na używanie przez nas plików
            cookie. Możesz dostosować swoje preferencje lub dowiedzieć się
            więcej w naszej polityce prywatności.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col gap-2 pt-0 sm:flex-row">
          <Button
            variant="outline"
            onClick={rejectAll}
            className="order-2 w-full sm:order-1 sm:w-auto"
          >
            Odrzuć wszystko
          </Button>
          <Button
            variant="outline"
            onClick={() => setShowCustomize(true)}
            className="order-3 w-full sm:order-2 sm:w-auto"
          >
            Dostosuj
          </Button>
          <Button
            onClick={acceptAll}
            className="order-1 w-full border border-transparent text-white sm:order-3 sm:w-auto"
          >
            Akceptuj wszystko
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
