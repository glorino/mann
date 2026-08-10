"use client";

import { ArrowRight, Phone, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Decorative lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#lineGrad)" strokeWidth="1" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="url(#lineGrad)" strokeWidth="1" />
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(233,69,96,0.3)" />
              <stop offset="100%" stopColor="rgba(15,52,96,0.3)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div className="space-y-8">
            <div className="space-y-2 animate-fade-in-left">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full border border-accent/20 tracking-wide">
                Professional Services
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight animate-fade-in-left delay-100">
              Trusted
              <br />
              <span className="gradient-text">Financial</span>
              <br />
              Excellence
            </h1>

            <p className="text-lg text-white/50 max-w-lg leading-relaxed animate-fade-in-left delay-200">
              Accurate, ethical, and professional accounting, auditing, taxation,
              and consultancy services that drive sustainable growth.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-left delay-300">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 text-base"
              >
                Get Started <ArrowRight size={18} />
              </a>
              <a
                href="#about"
                className="btn-outline inline-flex items-center gap-2 text-base border-white/20 text-white/70 hover:text-white hover:border-accent hover:bg-accent/10"
              >
                Learn More
              </a>
            </div>

            {/* Contact quick links */}
            <div className="flex flex-wrap gap-6 pt-6 animate-fade-in-left delay-400">
              <a
                href="tel:+2348000000000"
                className="flex items-center gap-2 text-white/40 hover:text-accent transition-colors text-sm"
              >
                <Phone size={14} />
                +234 (0) 800 MANN PRO
              </a>
              <a
                href="mailto:info@mannprofessional.com"
                className="flex items-center gap-2 text-white/40 hover:text-accent transition-colors text-sm"
              >
                <Mail size={14} />
                info@mannprofessional.com
              </a>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="hidden lg:flex justify-center animate-fade-in-right delay-200">
            <div className="relative">
              {/* Main card */}
              <div className="w-80 glass rounded-3xl p-8 space-y-6 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <span className="text-white font-black text-lg">M</span>
                  </div>
                  <div>
                    <div className="text-white font-bold">MANN</div>
                    <div className="text-white/40 text-xs">Professional Services</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {["Audit & Assurance", "Taxation", "Advisory", "Accounting"].map(
                    (service) => (
                      <div
                        key={service}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-white/70 text-sm">{service}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 px-4 py-2 bg-accent rounded-xl text-white text-sm font-semibold shadow-lg shadow-accent/30 animate-float" style={{ animationDelay: '0.5s' }}>
                10+ Years
              </div>
              <div className="absolute -bottom-4 -left-6 px-4 py-2 bg-primary rounded-xl text-white text-sm font-semibold shadow-lg shadow-primary/30 animate-float" style={{ animationDelay: '1.5s' }}>
                Trusted & Certified
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up delay-700">
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
