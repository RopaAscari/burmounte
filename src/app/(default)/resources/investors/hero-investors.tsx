import Clients from "@/components/clients";

export default function HeroInvestors() {
  return (
    <section className="relative">
      {/* Dark background */}
      <div className="absolute inset-0 bg-black pointer-events-none -z-10" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-10">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-playfair-display text-slate-100 mb-8">Investors</h1>
            {/* Search form */}
            <Clients />
          </div>
        </div>
      </div>
    </section>
  );
}
