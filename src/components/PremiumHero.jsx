const PremiumHero = () => (
  <section className="relative h-screen flex items-center bg-slate-900 overflow-hidden">
    {/* Background Image with subtle zoom animation */}
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-full h-full object-cover opacity-50 transform scale-105 animate-slow-zoom"
        alt="Luxury Architecture"
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="max-w-3xl">
        <span className="inline-block text-brand-gold tracking-[0.3em] uppercase text-sm mb-4 font-medium">
          Est. 2003 — California
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8">
          Crafting <span className="italic">Spaces</span> that inspire <br />{" "}
          the human spirit.
        </h1>
        <div className="flex items-center gap-10">
          <a
            href="/contact"
            className="group relative px-8 py-4 overflow-hidden bg-brand-gold text-white transition-all duration-300"
          >
            <span className="relative z-10 font-semibold tracking-wide">
              Start Your Legacy
            </span>
            <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          <a
            href="/portfolio"
            className="text-white border-b border-white/30 pb-2 hover:border-white transition-all tracking-widest uppercase text-xs font-bold"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </div>

    {/* Elegant Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
    </div>
  </section>
);

export default PremiumHero;
