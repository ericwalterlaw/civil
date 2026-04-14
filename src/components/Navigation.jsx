import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 border border-brand-gold flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-300">
            <span
              className={`text-xs tracking-tighter transition-colors ${
                scrolled ? "text-brand-dark" : "text-white"
              }`}
            >
              UEB
            </span>
          </div>
          <span
            className={`text-xl font-serif tracking-widest uppercase ${
              scrolled ? "text-brand-dark" : "text-white"
            }`}
          >
            Urban Edge <span className="font-light opacity-60">Builders</span>
          </span>
        </Link>

        {/* Desktop Menu */}
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

        {/* Burger Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-6 h-0.5 transition-all ${
              scrolled ? "bg-brand-dark" : "bg-white"
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-all ${
              scrolled ? "bg-brand-dark" : "bg-white"
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-all ${
              scrolled ? "bg-brand-dark" : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md px-8 py-6 flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`text-sm uppercase tracking-wide font-semibold hover:text-brand-gold transition-colors ${
                location.pathname === item.path
                  ? "text-brand-gold"
                  : "text-brand-dark"
              }`}
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
