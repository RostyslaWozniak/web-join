import { H2 } from "@/components/ui/typography";

export function AboutSection() {
  return (
    <>
      <H2 className="mx-auto mb-6 max-w-3xl md:mb-12">
        👋 Kim jestem i dlaczego stworzyłem BookApp?
      </H2>
      <div className="rounded-lg border border-gray-300 bg-white/80 p-4 text-center shadow-xl backdrop-blur-sm md:p-8">
        <p className="mb-6 text-lg leading-relaxed text-foreground">
          Mam na imię Rostyslav Vozniak i jestem web developerem. Tworzę
          nowoczesne aplikacje i strony internetowe, głównie w Next.js. BookApp
          powstał z myślą o realnych problemach lokalnych firm – zamiast
          uniwersalnego narzędzia, zaprojektowałem coś dedykowanego,
          elastycznego i gotowego do rozwoju.
        </p>
        <p className="text-lg font-bold leading-relaxed text-foreground">
          Szukam kilku klientów do długofalowej współpracy, których system mogę
          rozwijać przez lata.
        </p>
      </div>
    </>
  );
}
