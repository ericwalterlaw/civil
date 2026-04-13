import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { ArrowUpRight } from "lucide-react";

const Portfolio = () => {
  const categories = ["All", "Residential", "Commercial", "Restoration"];
  const [activeFilter, setActiveFilter] = useState("All");

  // Premium, Full-Color Architectural Project Data
  const projects = [
    {
      id: 1,
      title: "The Obsidian House",
      category: "Residential",
      location: "Malibu, CA",
      // High-res Pexels image
      image:
        "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      title: "Slate Exchange Landmark",
      category: "Commercial",
      location: "San Francisco, CA",
      image:
        "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      title: "Aura Spa & Wellness",
      category: "Commercial",
      location: "Santa Barbara, CA",
      image:
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      title: "Vintage Loft Restoration",
      category: "Restoration",
      location: "Los Angeles, CA",
      image:
        "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 5,
      title: "Pacific Villa",
      category: "Residential",
      location: "La Jolla, CA",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 6,
      title: "Grand Hotel facade",
      category: "Restoration",
      location: "San Diego, CA",
      image:
        "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Define how many columns we need at different screen sizes
  const masonryBreakpoints = {
    default: 3, // Wide screens
    1100: 2, // Medium screens
    700: 1, // Mobile screens
  };

  return (
    <div className="bg-brand-light">
      {/* 1. Subtle Hero Section */}
      <section className="relative pt-40 pb-24 bg-brand-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
            Our Work
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white leading-tight">
            The <span className="italic font-light opacity-60">Portfolio.</span>
          </h1>
          <p className="text-brand-muted text-xl max-w-2xl mt-8 font-light leading-relaxed">
            A curated selection of architectural landmarks and bespoke spaces
            defined by precision and purpose.
          </p>
        </div>
      </section>

      {/* 2. Portfolio Gallery & Filters */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          {/* Minimalist Filters */}
          <div className="flex justify-center md:justify-start gap-8 mb-16 border-b border-brand-dark/5 pb-8 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs uppercase tracking-superwide font-semibold pb-2 border-b-2 transition-all duration-300 whitespace-nowrap ${
                  activeFilter === cat
                    ? "text-brand-gold border-brand-gold"
                    : "text-brand-muted border-transparent hover:text-brand-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 3. Masonry Grid (Full Color Images) */}
          <Masonry
            breakpointCols={masonryBreakpoints}
            className="flex gap-8" // This is the horizontal gap between columns
            columnClassName="space-y-8 bg-clip-padding" // This is the vertical gap between items
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden bg-white border border-brand-dark/5 shadow-2xl shadow-brand-dark/5"
              >
                {/* Image Wrapper for the reveal animation */}
                <div className="img-hover-zoom">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover" // Full color imagery
                  />
                </div>

                {/* Editorial Overlay (Reveals on hover) */}
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-[20px] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent">
                  <span className="text-brand-gold uppercase tracking-widest text-[10px] font-bold mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-serif text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex justify-between items-center text-xs text-white/70 font-light tracking-wide pt-4 border-t border-white/10 mt-4">
                    <span>{project.location}</span>
                    <button className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
                      View Case Dossier <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* 4. Refined CTA Section */}
      <section className="py-24 bg-brand-dark text-center relative overflow-hidden">
        {/* Subtle texture for luxury feel */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />

        <div className="max-w-3xl mx-auto px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-tight">
            Let's blueprint your <br />{" "}
            <span className="italic text-brand-gold">next creation.</span>
          </h2>
          <a
            href="/contact"
            className="inline-block bg-brand-gold text-brand-dark px-16 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all duration-500"
          >
            Request a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
