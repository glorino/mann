import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  Shield,
  Award,
  Target,
  Lock,
  Scale,
  Users,
  CheckCircle,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const values = [
  { icon: Shield, title: "Integrity", description: "We conduct our engagements with honesty, transparency, and the highest standards of ethical conduct.", color: "from-red-500 to-rose-600", bgColor: "bg-red-50", iconColor: "text-red-500" },
  { icon: Award, title: "Professional Excellence", description: "We uphold high professional standards and apply appropriate knowledge, competence, and due care in all our engagements.", color: "from-blue-500 to-indigo-600", bgColor: "bg-blue-50", iconColor: "text-blue-500" },
  { icon: Target, title: "Accuracy & Reliability", description: "We are committed to providing accurate, dependable, and timely financial, accounting, audit, and tax services.", color: "from-emerald-500 to-teal-600", bgColor: "bg-emerald-50", iconColor: "text-emerald-500" },
  { icon: Lock, title: "Confidentiality", description: "We protect our clients' financial and business information and maintain strict professional confidentiality.", color: "from-violet-500 to-purple-600", bgColor: "bg-violet-50", iconColor: "text-violet-500" },
  { icon: Scale, title: "Objectivity", description: "We provide impartial, independent, and evidence-based professional advice, free from bias and inappropriate influence.", color: "from-amber-500 to-orange-600", bgColor: "bg-amber-50", iconColor: "text-amber-500" },
  { icon: Users, title: "Client Focus", description: "We understand our clients' needs and provide practical, responsive, and value-driven solutions tailored to their objectives.", color: "from-cyan-500 to-sky-600", bgColor: "bg-cyan-50", iconColor: "text-cyan-500" },
  { icon: CheckCircle, title: "Accountability", description: "We take responsibility for our professional work, decisions, and commitments, while maintaining transparency with our clients.", color: "from-pink-500 to-fuchsia-600", bgColor: "bg-pink-50", iconColor: "text-pink-500" },
  { icon: Lightbulb, title: "Innovation", description: "We embrace appropriate technology, modern practices, and continuous improvement to deliver efficient and high-quality professional services.", color: "from-lime-500 to-green-600", bgColor: "bg-lime-50", iconColor: "text-lime-500" },
];

export default function ValuesPage() {
  return (
    <>
      <PageHeader
        title="Our"
        highlight="Core Values"
        description="The principles that guide every engagement and define our commitment to excellence."
        breadcrumbs={[{ label: "Values" }]}
      />

      {/* Values Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="group relative bg-white rounded-2xl p-7 border border-slate-100 card-hover cursor-default">
                  <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`w-14 h-14 rounded-xl ${value.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`${value.iconColor} w-7 h-7`} />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-3 group-hover:text-accent transition-colors duration-300">{value.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
              Living Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark tracking-tight">
              Values in <span className="gradient-text-blue">Action</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "In Every Engagement", desc: "Our values are embedded in every interaction, decision, and deliverable we produce.", highlight: "Integrity & Objectivity" },
              { title: "With Every Client", desc: "We build lasting relationships founded on trust, confidentiality, and genuine commitment.", highlight: "Client Focus & Confidentiality" },
              { title: "Through Continuous Growth", desc: "We invest in our people, embrace innovation, and pursue excellence consistently.", highlight: "Excellence & Innovation" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-3xl p-8 border border-slate-100 card-hover">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-4">{item.highlight}</span>
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Experience the <span className="gradient-text">MANN Difference</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Our values are the foundation of every service we provide.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 btn-primary text-base">
            Work With Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
