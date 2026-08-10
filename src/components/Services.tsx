import {
  BarChart3,
  Search,
  Receipt,
  Calculator,
  FileCheck,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Audit & Assurance",
    description:
      "Independent and thorough audit services ensuring financial statements are free from material misstatement and comply with applicable standards.",
    features: ["Financial Audits", "Internal Audits", "Compliance Reviews"],
  },
  {
    icon: Calculator,
    title: "Accounting Services",
    description:
      "Comprehensive bookkeeping, financial reporting, and management accounting solutions tailored to your business needs.",
    features: ["Bookkeeping", "Financial Reporting", "Management Accounts"],
  },
  {
    icon: Receipt,
    title: "Taxation",
    description:
      "Expert tax planning, compliance, and advisory services to optimise your tax position while meeting all regulatory obligations.",
    features: ["Tax Planning", "Tax Returns", "VAT Advisory"],
  },
  {
    icon: TrendingUp,
    title: "Business Advisory",
    description:
      "Strategic guidance on financial management, risk assessment, business restructuring, and growth planning.",
    features: ["Financial Strategy", "Risk Management", "Growth Planning"],
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description:
      "Ensure your business meets all statutory requirements with our comprehensive compliance and filing services.",
    features: ["Corporate Compliance", "Statutory Filings", "Governance"],
  },
  {
    icon: Search,
    title: "Due Diligence",
    description:
      "Thorough investigation and analysis for mergers, acquisitions, and investment decisions with actionable insights.",
    features: ["M&A Support", "Investment Analysis", "Risk Assessment"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 tracking-tight">
            Our <span className="gradient-text-blue">Services</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Comprehensive professional services designed to support your
            business at every stage of its journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-100 card-hover"
              >
                {/* Number */}
                <span className="absolute top-6 right-6 text-6xl font-black text-slate-100 group-hover:text-accent/10 transition-colors duration-500 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-dark mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
