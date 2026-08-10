import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  Plane,
  GraduationCap,
  Wrench,
  Briefcase,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const clients = [
  { name: "Finchglow Travels Limited", icon: Plane, industry: "Travel & Tourism", description: "Leading travel and tourism company providing exceptional travel experiences across Nigeria and beyond.", color: "from-blue-500 to-cyan-400" },
  { name: "Finchglow Holidays Limited", icon: Briefcase, industry: "Hospitality & Leisure", description: "Premium holiday and leisure services, creating memorable experiences for individuals and families.", color: "from-emerald-500 to-teal-400" },
  { name: "Southoak Aviation Services Limited", icon: Plane, industry: "Aviation Services", description: "Professional aviation services company delivering reliable solutions for the aviation industry.", color: "from-violet-500 to-purple-400" },
  { name: "Lagos Aviation Academy Limited", icon: GraduationCap, industry: "Aviation Training", description: "Premier aviation training institution shaping the next generation of aviation professionals.", color: "from-amber-500 to-orange-400" },
  { name: "Prysm Facility Services Limited", icon: Wrench, industry: "Facility Management", description: "Comprehensive facility management solutions ensuring optimal operational environments.", color: "from-rose-500 to-pink-400" },
];

const stats = [
  { value: "5+", label: "Major Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Commitment" },
  { value: "24/7", label: "Support" },
];

export default function ClientsPage() {
  return (
    <>
      <PageHeader
        title="Our"
        highlight="Clients"
        description="We are proud to serve leading organisations across diverse industries, delivering trusted professional services that drive growth."
        breadcrumbs={[{ label: "Clients" }]}
      />

      {/* Stats */}
      <section className="py-16 bg-dark-800">
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

      {/* Clients Grid */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client) => {
              const Icon = client.icon;
              return (
                <div key={client.name} className="group bg-white rounded-3xl p-8 border border-slate-100 card-hover">
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${client.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dark group-hover:text-accent transition-colors duration-300">{client.name}</h3>
                      <span className="text-sm text-muted font-medium">{client.industry}</span>
                    </div>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{client.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
              Industries We Serve
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark tracking-tight">
              Diverse <span className="gradient-text-blue">Expertise</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Aviation & Travel", desc: "Specialised financial services for airlines, aviation training, travel companies, and hospitality businesses." },
              { title: "Facility Management", desc: "Tailored accounting and advisory for facility services, property management, and operations." },
              { title: "Corporate & Enterprise", desc: "Comprehensive audit, tax, and advisory for corporations across multiple sectors." },
            ].map((item) => (
              <div key={item.title} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-100 card-hover text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-3">{item.title}</h3>
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
            Join Our Growing <span className="gradient-text">Family</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Become part of our portfolio of trusted clients and experience professional services that make a difference.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 btn-primary text-base">
            Become a Client <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
