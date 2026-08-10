"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services#audit", label: "Audit & Assurance" },
      { href: "/services#accounting", label: "Accounting Services" },
      { href: "/services#taxation", label: "Taxation" },
      { href: "/services#advisory", label: "Business Advisory" },
      { href: "/services#compliance", label: "Regulatory Compliance" },
      { href: "/services#due-diligence", label: "Due Diligence" },
    ],
  },
  { href: "/values", label: "Values" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>(null);
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      setIsOpen(false);
      setActiveDropdown(null);
      prevPathnameRef.current = pathname;
    }
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const isHome = pathname === "/";

  return (
    <>
      {/* Top Bar */}
      <div
        className={`bg-dark-800 text-white/70 text-xs transition-all duration-300 ${
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
        } hidden lg:block`}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:+2348000000000"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Phone size={12} />
              <span>+234 (0) 800 MANN PRO</span>
            </a>
            <a
              href="mailto:info@mannprofessional.com"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Mail size={12} />
              <span>info@mannprofessional.com</span>
            </a>
          </div>
          <div className="text-white/40 tracking-wider uppercase text-[10px]">
            Professional Services You Can Trust
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-slate-100"
            : isHome
            ? "bg-transparent"
            : "bg-dark/95 backdrop-blur-xl"
        }`}
        style={{ top: scrolled ? 0 : undefined }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center font-black text-lg shadow-lg transition-all duration-300 ${
                  scrolled || !isHome
                    ? "bg-gradient-to-br from-accent to-primary text-white group-hover:shadow-accent/30"
                    : "bg-white/10 text-white backdrop-blur-sm group-hover:bg-white/20"
                }`}
              >
                M
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-lg font-bold tracking-tight leading-tight transition-colors ${
                    scrolled || !isHome ? "text-dark" : "text-white"
                  }`}
                >
                  MANN
                </span>
                <span
                  className={`text-[10px] tracking-[0.2em] uppercase leading-tight transition-colors ${
                    scrolled || !isHome ? "text-slate-400" : "text-white/50"
                  }`}
                >
                  Professional Services
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const hasChildren = link.children && link.children.length > 0;

                if (hasChildren) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "text-accent bg-accent/10"
                            : scrolled || !isHome
                            ? "text-slate-600 hover:text-dark hover:bg-slate-50"
                            : "text-white/70 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            activeDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown */}
                      <div
                        className={`absolute top-full left-0 pt-2 transition-all duration-300 ${
                          activeDropdown === link.label
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                      >
                        <div className="bg-white rounded-2xl shadow-xl shadow-black/10 border border-slate-100 p-3 min-w-[260px]">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-slate-600 hover:text-accent hover:bg-accent/5 transition-all duration-200 group"
                            >
                              <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-accent transition-colors" />
                              {child.label}
                            </Link>
                          ))}
                          <div className="border-t border-slate-100 mt-2 pt-2">
                            <Link
                              href="/services"
                              className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-accent hover:bg-accent/5 transition-all duration-200"
                            >
                              View All Services
                              <ArrowRight
                                size={14}
                                className="group-hover:translate-x-1 transition-transform"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-accent bg-accent/10"
                        : scrolled || !isHome
                        ? "text-slate-600 hover:text-dark hover:bg-slate-50"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-accent to-primary text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 flex items-center gap-2"
              >
                Get Started
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled || !isHome
                  ? "text-dark hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-slate-100 shadow-xl">
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const hasChildren = link.children && link.children.length > 0;

                return (
                  <div key={link.href}>
                    {hasChildren ? (
                      <>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === link.label ? null : link.label
                            )
                          }
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                            isActive
                              ? "text-accent bg-accent/10"
                              : "text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          {link.label}
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              activeDropdown === link.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            activeDropdown === link.label
                              ? "max-h-[400px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="pl-4 py-2 space-y-1">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-slate-500 hover:text-accent hover:bg-accent/5 transition-all"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? "text-accent bg-accent/10"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-accent to-primary text-white text-sm font-semibold rounded-xl text-center"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-slate-100 mt-4 space-y-3">
                <a
                  href="tel:+2348000000000"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-slate-500 hover:text-accent transition-colors"
                >
                  <Phone size={14} />
                  +234 (0) 800 MANN PRO
                </a>
                <a
                  href="mailto:info@mannprofessional.com"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-slate-500 hover:text-accent transition-colors"
                >
                  <Mail size={14} />
                  info@mannprofessional.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
