import { Target, Eye, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 tracking-tight">
            About <span className="gradient-text-blue">MANN</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            A trusted professional services firm committed to integrity,
            technical excellence, and the delivery of practical solutions.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="group relative bg-white rounded-3xl p-10 border border-slate-100 card-hover overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-gold" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-rose-600 flex items-center justify-center shadow-lg shadow-accent/20 group-hover:shadow-accent/40 transition-shadow duration-300">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark">Our Mission</h3>
            </div>
            <p className="text-muted leading-relaxed text-[15px]">
              To deliver accurate, ethical, and professional accounting, auditing,
              taxation, and consultancy services that help our clients achieve
              regulatory compliance, sound financial management, informed
              decision-making, and sustainable growth.
            </p>
          </div>

          {/* Vision */}
          <div className="group relative bg-white rounded-3xl p-10 border border-slate-100 card-hover overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow duration-300">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark">Our Vision</h3>
            </div>
            <p className="text-muted leading-relaxed text-[15px]">
              To become a trusted and respected professional services firm,
              recognised for integrity, technical excellence, innovation, and the
              delivery of practical solutions that create lasting value for our
              clients and stakeholders.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-dark text-white font-semibold rounded-xl hover:bg-dark-700 transition-all duration-300 hover:shadow-lg hover:shadow-dark/20 hover:-translate-y-0.5 group"
          >
            Explore Our Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
