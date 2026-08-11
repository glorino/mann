import Link from "next/link";
import RotatingText from "@/components/RotatingText";
import { CONTACT } from "@/lib/constants";
import {
  ArrowRight,
  Shield,
  Award,
  Target,
  BarChart3,
  Receipt,
  TrendingUp,
  Users,
  Eye,
  Phone,
} from "lucide-react";

const featuredServices = [
  { icon: BarChart3, title: "Audit & Assurance", desc: "Independent and thorough audit services ensuring financial accuracy and compliance." },
  { icon: Receipt, title: "Taxation", desc: "Expert tax planning, compliance, and advisory to optimise your tax position." },
  { icon: TrendingUp, title: "Business Advisory", desc: "Strategic guidance on financial management, risk, and growth planning." },
  { icon: Award, title: "Accounting Services", desc: "Comprehensive bookkeeping, financial reporting, and management accounting." },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Clients Served" },
  { value: "100%", label: "Commitment" },
  { value: "24/7", label: "Support" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-float" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[80px] animate-float" style={{ animationDelay: "2s" }} />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full border border-accent/20 tracking-wide animate-fade-in-left">
                Professional Services
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight animate-fade-in-left delay-100">
                Trusted
                <br />
                <RotatingText />
                <br />
                Excellence
              </h1>

              <p className="text-lg text-white/50 max-w-lg leading-relaxed animate-fade-in-left delay-200">
                Accurate, ethical, and professional accounting, auditing, taxation,
                and consultancy services that drive sustainable growth.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in-left delay-300">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-base">
                  Get Started <ArrowRight size={18} />
                </Link>
                <Link href="/about" className="btn-outline inline-flex items-center gap-2 text-base border-white/20 text-white/70 hover:text-white hover:border-accent hover:bg-accent/10">
                  Learn More
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 pt-6 animate-fade-in-left delay-400">
                <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-2 text-white/40 hover:text-accent transition-colors text-sm">
                  <Phone size={14} /> {CONTACT.phone}
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:flex justify-center animate-fade-in-right delay-200">
              <div className="relative">
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
                    {["Audit & Assurance", "Taxation", "Advisory", "Accounting"].map((service) => (
                      <div key={service} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-white/70 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 px-4 py-2 bg-accent rounded-xl text-white text-sm font-semibold shadow-lg shadow-accent/30 animate-float" style={{ animationDelay: "0.5s" }}>
                  10+ Years
                </div>
                <div className="absolute -bottom-4 -left-6 px-4 py-2 bg-primary rounded-xl text-white text-sm font-semibold shadow-lg shadow-primary/30 animate-float" style={{ animationDelay: "1.5s" }}>
                  Trusted & Certified
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up delay-700">
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Quick About */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full tracking-wide uppercase">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark tracking-tight">
                A Firm Built on <span className="gradient-text-blue">Integrity</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                MANN Professional Services is a trusted firm delivering accurate, ethical, and professional
                accounting, auditing, taxation, and consultancy services to help businesses thrive.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[Shield, Award, Target, Eye].map((Icon, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-dark flex items-center justify-center border-2 border-white">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted">Guided by our core values</span>
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300">
                Read our story <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, title: "Integrity", desc: "Honesty and transparency in all we do" },
                { icon: Award, title: "Excellence", desc: "High professional standards always" },
                { icon: Target, title: "Accuracy", desc: "Dependable and timely services" },
                { icon: Users, title: "Client Focus", desc: "Tailored solutions for your needs" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white rounded-2xl p-6 border border-slate-100 card-hover text-center">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-bold text-dark mb-1 text-sm">{item.title}</h4>
                    <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 tracking-tight">
              Our <span className="gradient-text-blue">Services</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Comprehensive professional services designed to support your business at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-100 card-hover">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-3">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">{service.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-dark text-white font-semibold rounded-xl hover:bg-dark-700 transition-all duration-300 hover:shadow-lg group">
              View All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-white/40 font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 tracking-tight">
            Ready to Get <span className="gradient-text">Started</span>?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
            Partner with MANN Professional Services and experience the difference that integrity, excellence, and dedication make.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-base">
              Contact Us <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="btn-outline inline-flex items-center gap-2 text-base">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
