import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Target, Eye, ArrowRight, Shield, Award, Users, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="The Story of"
        highlight="MANN"
        description="A trusted professional services firm recognised for integrity, technical excellence, and the delivery of practical solutions."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
              Purpose & Direction
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark tracking-tight">
              Mission <span className="text-slate-300">&</span> <span className="gradient-text-blue">Vision</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100 card-hover overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-gold" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-rose-600 flex items-center justify-center shadow-lg shadow-accent/20">
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

            <div className="group relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100 card-hover overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center shadow-lg shadow-primary/20">
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
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark tracking-tight">
              What Sets Us <span className="gradient-text-blue">Apart</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Ethical Practice", desc: "We uphold the highest standards of ethical conduct in every engagement." },
              { icon: Award, title: "Technical Excellence", desc: "Our team applies deep knowledge, competence, and due care to every task." },
              { icon: Users, title: "Client-Centred", desc: "We take the time to understand each client's unique needs and goals." },
              { icon: Lightbulb, title: "Innovation-Driven", desc: "We embrace modern technology and continuous improvement." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-2xl p-8 border border-slate-100 card-hover text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-3">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full tracking-wide uppercase">
                Our Approach
              </span>
              <h2 className="text-4xl font-bold text-dark tracking-tight">How We Work</h2>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Understanding", desc: "We begin by deeply understanding your business, industry, and specific requirements." },
                  { step: "02", title: "Analysis", desc: "Our team conducts thorough analysis to identify opportunities and risks." },
                  { step: "03", title: "Solution Design", desc: "We design practical, tailored solutions aligned with your objectives." },
                  { step: "04", title: "Delivery & Support", desc: "We deliver with precision and provide ongoing support to ensure lasting value." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-dark flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                      <span className="text-white font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">{item.title}</h4>
                      <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-dark to-dark-800 rounded-3xl p-10 text-white space-y-8">
              <h3 className="text-2xl font-bold">Our Commitment</h3>
              <div className="space-y-5">
                {[
                  "Independence and objectivity in all professional engagements",
                  "Strict confidentiality of client information",
                  "Continuous professional development for our team",
                  "Compliance with all regulatory requirements",
                  "Transparent communication and reporting",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let&apos;s Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Experience the MANN difference — where integrity meets excellence.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 btn-primary text-base">
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
