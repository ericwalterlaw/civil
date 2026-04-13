import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand & Narrative */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 border border-brand-gold flex items-center justify-center">
                <span className="text-xs text-brand-gold tracking-tighter">
                  UEB
                </span>
              </div>
              <span className="text-2xl font-serif tracking-widest uppercase">
                Urban Edge{" "}
                <span className="font-light opacity-60 text-lg">Builders</span>
              </span>
            </div>
            <p className="text-brand-muted text-lg leading-relaxed max-w-md mb-8">
              We specialize in the creation of architectural landmarks. From
              high-end private residences to structural icons, we build with a
              legacy mindset.
            </p>
            <div className="flex gap-6">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-brand-muted hover:text-brand-gold transition-colors duration-300"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigational Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-superwide font-bold text-brand-gold mb-8">
              Explore
            </h4>
            <ul className="space-y-4">
              {["Home", "Services", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(" ", "")}`}
                    className="group flex items-center gap-2 text-brand-muted hover:text-white transition-all"
                  >
                    <span className="font-light">{item}</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-superwide font-bold text-brand-gold mb-8">
              Headquarters
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-brand-muted">
                <MapPin
                  size={20}
                  strokeWidth={1}
                  className="text-brand-gold shrink-0"
                />
                <span className="font-light">
                  645 Selland Ave, California, 93722
                </span>
              </li>
              <li className="flex items-center gap-4 text-brand-muted">
                <Phone
                  size={20}
                  strokeWidth={1}
                  className="text-brand-gold shrink-0"
                />
                <span className="font-light">+1 (650) 203-4820</span>
              </li>
              <li className="flex items-center gap-4 text-brand-muted">
                <Mail
                  size={20}
                  strokeWidth={1}
                  className="text-brand-gold shrink-0"
                />
                <span className="font-light">info@urbanedgebuilders.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-brand-muted uppercase tracking-widest font-light">
            &copy; {currentYear} Hudson Constructions. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-[10px] uppercase tracking-widest text-brand-muted hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[10px] uppercase tracking-widest text-brand-muted hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
