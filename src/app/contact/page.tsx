"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Send, ArrowRight, Clock, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-6 tracking-wide uppercase">
            Contact Us
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
            Ready to discuss your needs? Our team of experienced professionals is here to help.
          </p>
        </div>
      </section>

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
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const data = new FormData(form);
                  const name = data.get("name");
                  const email = data.get("email");
                  const subject = data.get("subject");
                  const message = data.get("message");
                  const body = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
                  window.open(`mailto:info@mannprofessional.com?subject=${encodeURIComponent(subject as string)}&body=${body}`, "_blank");
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-dark placeholder:text-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-dark placeholder:text-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">Subject</label>
                  <select
                    name="subject"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-dark focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Audit & Assurance">Audit & Assurance</option>
                    <option value="Taxation">Taxation</option>
                    <option value="Accounting Services">Accounting Services</option>
                    <option value="Business Advisory">Business Advisory</option>
                    <option value="Partnership">Partnership Opportunity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your needs..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-dark placeholder:text-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary inline-flex items-center gap-2 text-base w-full justify-center"
                >
                  <Send size={18} />
                  Send Message
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
                      <p className="text-white/50 text-sm">+234 (0) 800 MANN PRO</p>
                      <p className="text-white/50 text-sm">+234 (0) 801 234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-white/50 text-sm">info@mannprofessional.com</p>
                      <p className="text-white/50 text-sm">audit@mannprofessional.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Offices</h4>
                      <p className="text-white/50 text-sm">Lagos, Nigeria</p>
                      <p className="text-white/50 text-sm">Abuja, Nigeria</p>
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
                      <p className="text-white/50 text-sm">www.mannprofessional.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100">
                <h3 className="text-lg font-bold text-dark mb-4">Our Services</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Audit & Assurance", "Taxation", "Accounting", "Advisory", "Compliance", "Due Diligence"].map(
                    (service) => (
                      <Link
                        key={service}
                        href="/services"
                        className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-50 text-sm font-medium text-dark hover:text-accent hover:border-accent/20 transition-all duration-300 group"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                        {service}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
