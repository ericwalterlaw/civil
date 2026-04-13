import React from "react";
import PremiumHero from "../components/PremiumHero";
import { Home, Building2, Hammer, Ruler } from "lucide-react";

const Homepage = () => {
  const services = [
    {
      icon: <Home strokeWidth={1} size={40} />,
      title: "Private Residences",
      description:
        "Bespoke architectural homes tailored to refined lifestyles.",
    },
    {
      icon: <Building2 strokeWidth={1} size={40} />,
      title: "Commercial Icons",
      description:
        "Structural landmarks designed for performance and prestige.",
    },
    {
      icon: <Hammer strokeWidth={1} size={40} />,
      title: "Restorations",
      description: "Elevating existing structures with modern luxury finishes.",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "20+", label: "Years Experience" },
    { number: "100+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <PremiumHero />

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to completion, we deliver exceptional construction
              solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-12 border-l border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-brand-gold mb-8 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl mb-4 text-brand-dark tracking-tight">
                  {service.title}
                </h3>
                <p className="text-brand-muted leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* Stats Section */}
      <section className="py-24 bg-brand-light border-y border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl font-serif text-brand-dark mb-4">
                  {stat.number}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-brand-gold font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <span className="text-brand-gold uppercase tracking-superwide text-xs font-bold mb-4 block">
                The UE Standard
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-10 leading-tight">
                Excellence in every <br />{" "}
                <span className="italic font-light">detail.</span>
              </h2>

              <div className="space-y-12">
                {[
                  {
                    title: "Bespoke Engineering",
                    desc: "Every structural element is calculated for longevity and aesthetic integration.",
                  },
                  {
                    title: "Artisan Quality",
                    desc: "We source materials from the world's finest quarries and timber mills.",
                  },
                  {
                    title: "Legacy Timeline",
                    desc: "Rigorous project management ensuring your vision is realized on schedule.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-[1px] bg-brand-gold mt-4 shrink-0" />
                    <div>
                      <h3 className="text-lg font-serif text-brand-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-brand-muted leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 border border-brand-gold/20 translate-x-8 translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700" />
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Precision Construction"
                className="relative w-full h-[600px] object-cover  hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-dark relative overflow-hidden">
        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />

        <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            Ready to build{" "}
            <span className="italic text-brand-gold">your legacy?</span>
          </h2>
          <p className="text-brand-muted text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Whether a private residence or a commercial landmark, we bring over
            two decades of architectural excellence to your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="px-12 py-5 bg-brand-gold text-brand-dark font-bold uppercase tracking-widest hover:bg-white transition-all duration-500"
            >
              Free Consultation
            </a>
            <a
              href="/portfolio"
              className="text-white border-b border-white/20 pb-2 hover:border-brand-gold hover:text-brand-gold transition-all uppercase tracking-[0.2em] text-xs font-bold"
            >
              View Our Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
