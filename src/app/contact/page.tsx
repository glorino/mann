"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { CONTACT } from "@/lib/constants";
import { Mail, Phone, MapPin, Send, ArrowRight, Clock, Globe, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
  };
  return (
    <>
      <PageHeader
        title="Get in"
        highlight="Touch"
        description="Ready to discuss your needs? Our team of experienced professionals is here to help."
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-dark mb-4">Send Us a Message</h2>
                <p className="text-muted">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
              </div>

              <form
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">Full Name</label>
                    <input type="text" name="name" required placeholder="John Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-dark placeholder:text-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">Email Address</label>
                    <input type="email" name="email" required placeholder="john@company.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-dark placeholder:text-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">Phone Number</label>
                    <input type="tel" name="phone" placeholder="+234 800 000 0000" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-dark placeholder:text-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">Subject</label>
                    <select name="subject" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-dark focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all">
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Audit & Assurance">Audit & Assurance</option>
                      <option value="Taxation">Taxation</option>
                      <option value="Accounting Services">Accounting Services</option>
                      <option value="Business Advisory">Business Advisory</option>
                      <option value="Partnership">Partnership Opportunity</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">Message</label>
                  <textarea name="message" rows={5} required placeholder="Tell us about your needs..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-dark placeholder:text-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all resize-none" />
                </div>

                {status === "success" && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
                    <CheckCircle size={20} />
                    <span>Thank you! Your message has been sent successfully. We&apos;ll get back to you within 24 hours.</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                    <AlertCircle size={20} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary inline-flex items-center gap-2 text-base w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-dark to-dark-800 rounded-3xl p-10 text-white space-y-8">
                <h3 className="text-2xl font-bold">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-white/50 text-sm">{CONTACT.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-white/50 text-sm">{CONTACT.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Offices</h4>
                      <p className="text-white/50 text-sm">{CONTACT.address}</p>
                      <p className="text-white/50 text-sm">{CONTACT.address2}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Working Hours</h4>
                      <p className="text-white/50 text-sm">Mon - Fri: 8:00 AM - 5:00 PM</p>
                      <p className="text-white/50 text-sm">Sat: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Website</h4>
                      <p className="text-white/50 text-sm">{CONTACT.website}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100">
                <h3 className="text-lg font-bold text-dark mb-4">Our Services</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Audit & Assurance", "Taxation", "Accounting", "Advisory", "Compliance", "Due Diligence"].map((service) => (
                    <Link key={service} href="/services" className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-50 text-sm font-medium text-dark hover:text-accent hover:border-accent/20 transition-all duration-300 group">
                      <ArrowRight className="w-3.5 h-3.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
