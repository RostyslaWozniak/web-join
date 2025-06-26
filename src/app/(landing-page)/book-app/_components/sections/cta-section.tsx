import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section id="contact" className="bg-accent-emerald py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
            🚀 Gotowy, by usprawnić swoją przychodnię?
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Zacznij od krótkiej prezentacji. Bez zobowiązań, bez ukrytych
            kosztów. Pokażę Ci, jak możesz oszczędzać czas i zyskać więcej
            klientów.
          </p>
          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-white px-8 py-3 text-lg text-emerald-600 hover:bg-gray-100"
            >
              🔹 Umów się na demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white px-8 py-3 text-lg text-white hover:bg-white hover:text-emerald-600"
            >
              🔹 Napisz wiadomość – odpowiem w 24h
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
