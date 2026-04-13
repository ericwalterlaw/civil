import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Residential Masterpieces",
      subtitle: "Private Estates",
      description:
        "Bespoke architectural homes designed for refined living and generational legacy.",
      features: [
        "Architectural Design",
        "Estate Development",
        "Smart Home Integration",
      ],
      image:
        "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Commercial Landmarks",
      subtitle: "Corporate Excellence",
      description:
        "High-performance retail and office environments that define city skylines.",
      features: [
        "Structural Engineering",
        "Retail Build-outs",
        "Adaptive Reuse",
      ],
      image:
        "https://images.unsplash.com/photo-1627670380526-82405ef9d509?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Structural Restorations",
      subtitle: "Modernizing Heritage",
      description:
        "Preserving the soul of historic structures while infusing modern luxury and safety.",
      features: [
        "Historic Preservation",
        "Facade Renewal",
        "Structural Reinforcement",
      ],
      image:
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Interior Architecture",
      subtitle: "The Art of Space",
      description:
        "Precision-crafted interiors using rare materials and artisanal finishes.",
      features: [
        "Custom Millwork",
        "Material Sourcing",
        "Ambient Lighting Design",
      ],
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const steps = [
    {
      id: "01",
      title: "Conceptualization",
      desc: "Merging your vision with architectural feasibility.",
    },
    {
      id: "02",
      title: "Technical Design",
      desc: "Precision blueprints and material selection.",
    },
    {
      id: "03",
      title: "The Build",
      desc: "Mastercraft execution with rigorous oversight.",
    },
    {
      id: "04",
      title: "Handover",
      desc: "A seamless transition to your new masterpiece.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Refined Hero */}
      <section className="relative pt-40 pb-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
            Capabilities
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight max-w-3xl">
            Precision{" "}
            <span className="italic font-light opacity-70">Solutions</span>{" "}
            <br />
            for Bold Visions.
          </h1>
        </div>
      </section>

      {/* Services Section - Alternating Layout */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="space-y-40">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="w-full lg:w-1/2 overflow-hidden group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[500px] object-cover   hover: -0 transition-all duration-1000 scale-105 hover:scale-100"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <span className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-4 block">
                    {service.subtitle}
                  </span>
                  <h2 className="text-4xl font-serif text-brand-dark mb-6">
                    {service.title}
                  </h2>
                  <p className="text-brand-muted text-lg mb-8 leading-relaxed font-light">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-brand-dark tracking-wide uppercase font-medium"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-gold rotate-45" />{" "}
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="group flex items-center gap-4 text-xs font-bold uppercase tracking-superwide text-brand-dark border-b border-brand-dark/20 pb-2 hover:border-brand-gold transition-all"
                  >
                    Request Dossier{" "}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-2 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process - Minimal Timeline */}
      <section className="py-32 bg-brand-light">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-4 block">
                Methodology
              </span>
              <h2 className="text-4xl font-serif text-brand-dark">
                How We Build Excellence
              </h2>
            </div>
            <p className="text-brand-muted max-w-md font-light">
              From initial sketch to final inspection, our process is built on
              transparency and uncompromising standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-white p-12 border border-brand-dark/5 hover:border-brand-gold transition-colors duration-500"
              >
                <span className="text-5xl font-serif text-brand-gold/20 mb-8 block italic">
                  {step.id}
                </span>
                <h3 className="text-xl font-serif text-brand-dark mb-4">
                  {step.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-24 bg-brand-dark text-center">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-4xl font-serif text-white mb-8">
            Discuss your{" "}
            <span className="italic text-brand-gold">next landmark.</span>
          </h2>
          <a
            href="/contact"
            className="inline-block px-12 py-5 bg-brand-gold text-brand-dark font-bold uppercase tracking-widest hover:bg-white transition-all"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
