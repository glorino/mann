"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/values", label: "Values" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      setIsOpen(false);
      prevPathname.current = pathname;
    }
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      {/* Top bar */}
      <div className="bg-dark text-white/80 text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+2348000000000" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone size={13} />
              +234 (0) 800 MANN PRO
            </a>
            <a href="mailto:info@mannprofessional.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail size={13} />
              info@mannprofessional.com
            </a>
          </div>
          <div className="text-white/50 text-xs tracking-wider uppercase">
            Professional Services You Can Trust
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "nav-scrolled top-0"
            : isHome
            ? "bg-transparent top-0 lg:top-[36px]"
            : "bg-dark/90 backdrop-blur-md top-0 lg:top-[36px]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-black text-lg tracking-tight shadow-lg group-hover:shadow-accent/30 transition-shadow duration-300">
              M
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white tracking-tight leading-tight">MANN</span>
              <span className="text-[10px] text-white/50 tracking-[0.2em] uppercase leading-tight">Professional Services</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? "text-accent bg-accent/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-accent to-primary text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 flex items-center gap-2"
            >
              Get Started <ChevronRight size={16} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="glass-dark px-6 py-6 space-y-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 animate-slide-down ${
                  pathname === link.href
                    ? "text-accent bg-accent/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-4 px-4 py-3 bg-gradient-to-r from-accent to-primary text-white text-sm font-semibold rounded-lg text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
