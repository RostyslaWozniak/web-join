export function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 lg:text-4xl">
            👋 Kim jestem i dlaczego stworzyłem VetApp?
          </h2>
          <div className="rounded-lg bg-gray-50 p-8">
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Mam na imię Rostyslav Vozniak i jestem web developerem. Tworzę
              nowoczesne aplikacje i strony internetowe, głównie w Next.js.
              VetApp powstał z myślą o realnych problemach lokalnych przychodni
              – zamiast uniwersalnego narzędzia, zaprojektowałem coś
              dedykowanego, elastycznego i gotowego do rozwoju.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Szukam kilku klientów do długofalowej współpracy, których system
              mogę rozwijać przez lata.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
