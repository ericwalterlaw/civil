import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry Received:", formData);
    alert("Inquiry Sent. Our project manager will reach out shortly.");
  };

  const contactInfo = [
    {
      icon: <MapPin size={20} className="text-brand-gold" strokeWidth={1.5} />,
      title: "Our Atelier",
      details: ["645 Selland Ave", "California, 93722"],
    },
    {
      icon: <Phone size={20} className="text-brand-gold" strokeWidth={1.5} />,
      title: "Direct Line",
      details: ["(650) 203-4820"],
    },
    {
      icon: <Mail size={20} className="text-brand-gold" strokeWidth={1.5} />,
      title: "Correspondence",
      details: ["info@urbanedgebuilders.org", "quotes@urbanedgebuilders.org"],
    },
    {
      icon: <Clock size={20} className="text-brand-gold" strokeWidth={1.5} />,
      title: "Studio Hours",
      details: ["Mon-Fri: 7:00 AM - 6:00 PM", "Sat: 8:00 AM - 4:00 PM"],
    },
  ];

  return (
    <div className="bg-white">
      {/* Sophisticated Hero */}
      <section className="relative pt-40 pb-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale">
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
            Inquiry
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
            Begin Your{" "}
            <span className="italic font-light opacity-70">Legacy.</span>
          </h1>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            {/* Contact Info (Left) */}
            <div className="lg:col-span-4 space-y-12">
              <div>
                <h2 className="text-3xl font-serif text-brand-dark mb-6">
                  Contact Details
                </h2>
                <p className="text-brand-muted font-light leading-relaxed mb-12">
                  Our team of architects and project managers are ready to
                  discuss the specific requirements of your next landmark
                  project.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-10">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="w-12 h-12 bg-brand-light flex items-center justify-center shrink-0 border border-brand-dark/5 group-hover:border-brand-gold transition-colors duration-500">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-brand-dark mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p
                          key={i}
                          className="text-brand-muted text-sm font-light leading-relaxed"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form (Right) */}
            <div className="lg:col-span-8 bg-brand-light p-12 lg:p-16 border border-brand-dark/5 shadow-2xl shadow-brand-dark/5">
              <h2 className="text-3xl font-serif text-brand-dark mb-10">
                Project Brief
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/40">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-brand-dark/10 py-3 focus:outline-none focus:border-brand-gold transition-colors font-light"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/40">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-brand-dark/10 py-3 focus:outline-none focus:border-brand-gold transition-colors font-light"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/40">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-brand-dark/10 py-3 focus:outline-none focus:border-brand-gold transition-colors font-light"
                      placeholder="(213) 000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/40">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-brand-dark/10 py-3 focus:outline-none focus:border-brand-gold transition-colors font-light"
                    >
                      <option value="">Select Category</option>
                      <option value="residential">
                        Residential Masterpiece
                      </option>
                      <option value="commercial">Commercial Landmark</option>
                      <option value="renovation">Structural Restoration</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/40">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-brand-dark/10 py-3 focus:outline-none focus:border-brand-gold transition-colors font-light resize-none"
                    placeholder="Tell us about your vision..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group flex items-center justify-center gap-4 w-full md:w-auto px-16 py-5 bg-brand-dark text-white font-bold uppercase tracking-widest hover:bg-brand-gold transition-all duration-500"
                >
                  Submit Inquiry{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Modern FAQ */}
      <section className="py-32 bg-brand-light">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-serif text-brand-dark mb-16 text-center">
            Inquiry FAQ
          </h2>
          <div className="divide-y divide-brand-dark/10">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Residential masterpieces typically range from 12–24 months depending on architectural complexity.",
              },
              {
                q: "Do you offer architectural design services?",
                a: "Yes, we provide full end-to-end services from initial conceptualization to final structural execution.",
              },
              {
                q: "Where do you operate?",
                a: "We primarily serve the California region, with a focus on high-end residential and commercial developments.",
              },
            ].map((item, i) => (
              <div key={i} className="py-10">
                <h3 className="text-xl font-serif text-brand-dark mb-4">
                  {item.q}
                </h3>
                <p className="text-brand-muted font-light leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
