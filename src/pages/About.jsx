import React from "react";
import { ShieldCheck, Target, Award, Zap } from "lucide-react";
import one from "../assets/main.jpeg";

const About = () => {
  const team = [
    {
      name: "Tim Bernardin",
      role: "CEO & Principal Architect",
      experience: "25+ Years of Mastery",
      image: one,
      description:
        "A visionary leader in the construction landscape, Tim has spent over two decades bridging the gap between bold architectural concepts and structural reality.",
    },
  ];

  const values = [
    {
      title: "Unyielding Quality",
      description:
        "We source only the finest materials, ensuring every joint and finish meets an archival standard.",
      icon: <Award className="text-brand-gold" size={32} strokeWidth={1} />,
    },
    {
      title: "Radical Integrity",
      description:
        "Transparent communication is our bedrock. We build trust before we ever break ground.",
      icon: (
        <ShieldCheck className="text-brand-gold" size={32} strokeWidth={1} />
      ),
    },
    {
      title: "Technical Innovation",
      description:
        "Utilizing 3D modeling and sustainable tech to push the boundaries of modern engineering.",
      icon: <Zap className="text-brand-gold" size={32} strokeWidth={1} />,
    },
    {
      title: "Precision Safety",
      description:
        "Our sites are benchmarks for safety, protecting our craftsmen and your investment with rigor.",
      icon: <Target className="text-brand-gold" size={32} strokeWidth={1} />,
    },
  ];

  return (
    <div className="bg-white">
      {/* Editorial Hero */}
      <section className="relative pt-40 pb-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-8">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
            Our Legacy
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white leading-none mb-8">
            Established in{" "}
            <span className="italic font-light opacity-60">2003.</span>
          </h1>
          <p className="text-brand-muted text-xl max-w-2xl font-light leading-relaxed">
            Defining the California skyline through a relentless pursuit of
            architectural perfection and structural integrity.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-serif text-brand-dark mb-10">
                A journey from a family workshop <br />
                to <span className="italic">industry icons.</span>
              </h2>
              <div className="text-brand-muted space-y-6 text-lg font-light leading-relaxed">
                <p>
                  Founded by Tim Bernardin, Urban Edge Builders was born from a
                  singular vision: that a building should be more than just a
                  structure—it should be a legacy.
                </p>
                <p>
                  What began as a specialized masonry crew has evolved into a
                  multi-disciplinary powerhouse of over 50 artisans, engineers,
                  and visionaries. We don't just build; we curate environments
                  that inspire the people within them.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 border-t border-r border-brand-gold/30 hidden lg:block" />
              <img
                src="https://images.unsplash.com/photo-1574757987642-5755f0839101?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Architectural Planning"
                className="w-full hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              />
              <div className="grid grid-cols-2 gap-px bg-brand-dark/10 mt-8">
                <div className="bg-brand-light p-8 text-center">
                  <div className="text-4xl font-serif text-brand-dark">
                    500+
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mt-2">
                    Masterpieces
                  </div>
                </div>
                <div className="bg-brand-dark text-white p-8 text-center">
                  <div className="text-4xl font-serif text-brand-gold">20+</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60 font-bold mt-2">
                    Years of Craft
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy (Values) Section */}
      <section className="py-32 bg-brand-light">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <h2 className="text-4xl font-serif text-brand-dark mb-4 text-center">
              Our Philosophy
            </h2>
            <div className="w-20 h-px bg-brand-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((v, i) => (
              <div key={i} className="group">
                <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                  {v.icon}
                </div>
                <h3 className="text-xl font-serif text-brand-dark mb-4">
                  {v.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed font-light">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-serif text-brand-dark mb-20 text-center">
            The Visionary
          </h2>
          <div className="flex justify-center">
            {team.map((member, i) => (
              <div
                key={i}
                className="max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-white border border-brand-dark/5"
              >
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <span className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-2">
                    {member.role}
                  </span>
                  <h3 className="text-3xl font-serif text-brand-dark mb-4">
                    {member.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-brand-muted mb-6">
                    {member.experience}
                  </p>
                  <p className="text-brand-muted leading-relaxed font-light italic">
                    "{member.description}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-32 bg-brand-dark text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-10">
            Let’s build something{" "}
            <span className="italic text-brand-gold text-5xl md:text-7xl">
              timeless.
            </span>
          </h2>
          <a
            href="/contact"
            className="inline-block bg-brand-gold text-brand-dark px-16 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all duration-500"
          >
            Start Your Legacy
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
