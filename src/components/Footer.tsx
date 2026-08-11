"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp, CheckCircle, AlertCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const footerLinks = {
  services: [
    "Audit & Assurance",
    "Accounting Services",
    "Taxation",
    "Business Advisory",
    "Regulatory Compliance",
    "Due Diligence",
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Values", href: "/values" },
    { label: "Services", href: "/services" },
    { label: "Clients", href: "/clients" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  const [nlEmail, setNlEmail] = useState("");
  const [nlStatus, setNlStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [nlMessage, setNlMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setNlStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: nlEmail }),
      });
      const data = await res.json();
      if (res.ok) {
        setNlStatus("success");
        setNlMessage(data.message);
        setNlEmail("");
      } else {
        setNlStatus("error");
        setNlMessage(data.error || "Failed to subscribe");
      }
    } catch {
      setNlStatus("error");
      setNlMessage("Something went wrong");
    }
  };
  return (
    <footer className="bg-dark-800 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-black text-lg shadow-lg">
                M
              </div>
              <div>
                <div className="text-lg font-bold text-white tracking-tight">MANN</div>
                <div className="text-[10px] text-white/40 tracking-[0.2em] uppercase">Professional Services</div>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              Accurate, ethical, and professional accounting, auditing, taxation, and consultancy services.
            </p>
            <div className="space-y-3">
              <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-2 text-white/40 hover:text-accent transition-colors text-sm">
                <Phone size={14} />
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-white/40 hover:text-accent transition-colors text-sm">
                <Mail size={14} />
                {CONTACT.email}
              </a>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <MapPin size={14} />
                {CONTACT.address} & {CONTACT.address2}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-white/40 text-sm hover:text-accent transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/40 text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <p className="text-white/40 text-sm mb-4">Subscribe to our newsletter for insights and updates.</p>
            <form className="space-y-3" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={nlEmail}
                onChange={(e) => setNlEmail(e.target.value)}
                required
                placeholder="Your email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                disabled={nlStatus === "loading"}
                className="w-full px-4 py-3 bg-gradient-to-r from-accent to-primary text-white font-semibold rounded-xl text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 disabled:opacity-60"
              >
                {nlStatus === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {nlStatus === "success" && (
              <div className="flex items-center gap-2 mt-3 text-green-400 text-xs">
                <CheckCircle size={14} /> {nlMessage}
              </div>
            )}
            {nlStatus === "error" && (
              <div className="flex items-center gap-2 mt-3 text-red-400 text-xs">
                <AlertCircle size={14} /> {nlMessage}
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} MANN Professional Services. All rights reserved.
          </p>
          <Link
            href="/"
            className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-accent hover:bg-accent/10 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
