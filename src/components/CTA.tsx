"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* CTA Card */}
        <div className="relative bg-dark rounded-[2rem] p-12 md:p-16 overflow-hidden">
          {/* Background accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[80px]" />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }} />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full tracking-wide">
                  Let&apos;s Work Together
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                  Ready to Elevate Your{" "}
                  <span className="gradient-text">Financial Strategy</span>?
                </h2>
                <p className="text-white/50 text-lg leading-relaxed">
                  Get in touch with our team of experienced professionals. We&apos;re
                  here to provide tailored solutions that drive real results.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:info@mannprofessional.com"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Send size={18} />
                  Send Us a Message
                </a>
                <a
                  href="tel:+2348000000000"
                  className="btn-outline border-white/20 text-white/70 hover:text-white hover:border-accent hover:bg-accent/10 inline-flex items-center gap-2"
                >
                  <Phone size={18} />
                  Call Us Now
                </a>
              </div>
            </div>

            {/* Right - Contact Info */}
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  details: ["+234 (0) 800 MANN PRO", "+234 (0) 801 234 5678"],
                },
                {
                  icon: Mail,
                  title: "Email",
                  details: ["info@mannprofessional.com", "audit@mannprofessional.com"],
                },
                {
                  icon: MapPin,
                  title: "Office",
                  details: ["Lagos, Nigeria", "Abuja, Nigeria"],
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-5 p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        {item.title}
                      </h4>
                      {item.details.map((d) => (
                        <p key={d} className="text-white/40 text-sm">
                          {d}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
