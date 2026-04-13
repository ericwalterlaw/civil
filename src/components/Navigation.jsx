import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 border border-brand-gold flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-300">
            <span
              className={`text-xs tracking-tighter transition-colors ${scrolled ? "text-brand-dark" : "text-white"}`}
            >
              UEB
            </span>
          </div>
          <span
            className={`text-xl font-serif tracking-widest uppercase ${scrolled ? "text-brand-dark" : "text-white"}`}
          >
            Urban Edge <span className="font-light opacity-60">Builders</span>
          </span>
        </Link>

        <div className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-xs uppercase tracking-superwide font-semibold hover:text-brand-gold transition-colors ${
                scrolled ? "text-brand-dark" : "text-white"
              } ${location.pathname === item.path ? "text-brand-gold" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
