"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronDown, ChevronRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";

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
    const handleScroll = () => setScrolled(window.scrollY > 10);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-white/10 ${
        scrolled
          ? "bg-white shadow-xl shadow-black/10 border-b-slate-200"
          : "bg-[#0f172a]"
      }`}
    >
      {/* Red accent strip at very top */}
      <div className="h-[3px] bg-gradient-to-r from-[#e94560] via-[#c8a951] to-[#0f3460]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#e94560] to-[#0f3460] flex items-center justify-center text-white font-black text-lg shadow-lg">
              M
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-white tracking-tight leading-tight">
                MANN
              </span>
              <span className="text-[9px] text-white/40 tracking-[0.15em] uppercase leading-tight hidden sm:block">
                Professional Services
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
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
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 ${
                        isActive
                          ? "text-[#e94560]"
                          : scrolled
                          ? "text-slate-600 hover:text-[#e94560] hover:bg-[#e94560]/5"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                        activeDropdown === link.label
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-white rounded-xl shadow-2xl shadow-black/15 border border-slate-100 p-2 min-w-[240px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:text-[#e94560] hover:bg-[#e94560]/5 transition-all duration-150"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                            {child.label}
                          </Link>
                        ))}
                        <div className="border-t border-slate-100 mt-1 pt-1">
                          <Link
                            href="/services"
                            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-[#e94560] hover:bg-[#e94560]/5 transition-all"
                          >
                            View All Services
                            <ChevronRight size={14} />
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
                  className={`px-3 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-[#e94560]"
                      : scrolled
                      ? "text-slate-600 hover:text-[#e94560] hover:bg-[#e94560]/5"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-gradient-to-r from-[#e94560] to-[#0f3460] text-white text-[13px] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#e94560]/25 transition-all duration-300 flex items-center gap-1.5"
            >
              Get Started
              <ChevronRight size={14} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-slate-600 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-400 overflow-hidden ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-slate-100 shadow-xl px-6 py-5 space-y-1">
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
                      className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-semibold transition-all ${
                        isActive ? "text-[#e94560] bg-[#e94560]/10" : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={16} className={`transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === link.label ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="pl-4 py-1 space-y-0.5">
                        {link.children.map((child) => (
                          <Link key={child.href} href={child.href} className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-500 hover:text-[#e94560] hover:bg-[#e94560]/5 transition-all">
                            <div className="w-1 h-1 rounded-full bg-slate-300" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-3 py-3 rounded-lg text-sm font-semibold transition-all ${isActive ? "text-[#e94560] bg-[#e94560]/10" : "text-slate-700 hover:bg-slate-50"}`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            );
          })}

          <div className="pt-3 border-t border-slate-100 mt-3">
            <Link href="/contact" className="block w-full px-3 py-3 bg-gradient-to-r from-[#e94560] to-[#0f3460] text-white text-sm font-semibold rounded-lg text-center">
              Get Started
            </Link>
          </div>

          <div className="pt-3 space-y-2">
            <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-2 px-3 py-2 text-sm text-slate-500 hover:text-[#e94560] transition-colors">
              <Phone size={14} /> {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 px-3 py-2 text-sm text-slate-500 hover:text-[#e94560] transition-colors">
              <Mail size={14} /> {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
