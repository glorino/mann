import {
  Plane,
  GraduationCap,
  Wrench,
  Briefcase,
} from "lucide-react";

const clients = [
  {
    name: "Finchglow Travels Limited",
    icon: Plane,
    industry: "Travel & Tourism",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Finchglow Holidays Limited",
    icon: Briefcase,
    industry: "Hospitality & Leisure",
    color: "from-emerald-500 to-teal-400",
  },
  {
    name: "Southoak Aviation Services Limited",
    icon: Plane,
    industry: "Aviation Services",
    color: "from-violet-500 to-purple-400",
  },
  {
    name: "Lagos Aviation Academy Limited",
    icon: GraduationCap,
    industry: "Aviation Training",
    color: "from-amber-500 to-orange-400",
  },
  {
    name: "Prysm Facility Services Limited",
    icon: Wrench,
    industry: "Facility Management",
    color: "from-rose-500 to-pink-400",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-accent text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            Trusted Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Our <span className="gradient-text">Clients</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            We are proud to serve leading organisations across diverse industries,
            delivering trusted professional services that drive growth.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <div
                key={client.name}
                className="group relative glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${client.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-accent transition-colors duration-300">
                      {client.name}
                    </h3>
                    <span className="text-sm text-white/40 font-medium tracking-wide">
                      {client.industry}
                    </span>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50+", label: "Major Clients" },
            { value: "10+", label: "Years Experience" },
            { value: "100%", label: "Commitment" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/40 font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
