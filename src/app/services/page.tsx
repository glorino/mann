import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  BarChart3,
  Search,
  Receipt,
  Calculator,
  FileCheck,
  TrendingUp,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    id: "audit",
    icon: BarChart3,
    title: "Audit & Assurance",
    description:
      "Independent and thorough audit services ensuring financial statements are free from material misstatement and comply with applicable standards.",
    features: [
      "Financial Statement Audits",
      "Internal Audit Services",
      "Compliance Reviews",
      "Risk Assessment",
      "Internal Control Evaluation",
      "Audit Committee Support",
    ],
  },
  {
    id: "accounting",
    icon: Calculator,
    title: "Accounting Services",
    description:
      "Comprehensive bookkeeping, financial reporting, and management accounting solutions tailored to your business needs.",
    features: [
      "Bookkeeping & Record Keeping",
      "Financial Statement Preparation",
      "Management Accounts",
      "Payroll Processing",
      "Accounts Reconciliation",
      "Cash Flow Management",
    ],
  },
  {
    id: "taxation",
    icon: Receipt,
    title: "Taxation",
    description:
      "Expert tax planning, compliance, and advisory services to optimise your tax position while meeting all regulatory obligations.",
    features: [
      "Corporate Tax Planning",
      "Tax Return Preparation",
      "VAT Advisory & Compliance",
      "Transfer Pricing",
      "Tax Dispute Resolution",
      "Personal Tax Planning",
    ],
  },
  {
    id: "advisory",
    icon: TrendingUp,
    title: "Business Advisory",
    description:
      "Strategic guidance on financial management, risk assessment, business restructuring, and growth planning.",
    features: [
      "Financial Strategy Development",
      "Business Restructuring",
      "Growth & Expansion Planning",
      "Performance Improvement",
      "Succession Planning",
      "Mergers & Acquisitions Advisory",
    ],
  },
  {
    id: "compliance",
    icon: FileCheck,
    title: "Regulatory Compliance",
    description:
      "Ensure your business meets all statutory requirements with our comprehensive compliance and governance services.",
    features: [
      "Corporate Compliance Reviews",
      "Statutory Filings & Returns",
      "Corporate Governance Advisory",
      "Regulatory Risk Assessment",
      "Policy Development",
      "Board Support Services",
    ],
  },
  {
    id: "due-diligence",
    icon: Search,
    title: "Due Diligence",
    description:
      "Thorough investigation and analysis for mergers, acquisitions, and investment decisions with actionable insights.",
    features: [
      "Financial Due Diligence",
      "Operational Due Diligence",
      "Investment Analysis",
      "Valuation Services",
      "Transaction Support",
      "Post-Acquisition Integration",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Professional"
        highlight="Services"
        description="Comprehensive solutions designed to support your business at every stage of its journey."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Services Detail */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
                  <div className={`space-y-6 ${!isEven ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-dark">{service.title}</h2>
                    </div>
                    <p className="text-muted text-lg leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
                    >
                      Discuss your needs <ArrowRight size={18} />
                    </Link>
                  </div>

                  <div className={`bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 ${!isEven ? "lg:order-1" : ""}`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-50"
                        >
                          <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-accent" />
                          </div>
                          <span className="text-sm font-medium text-dark">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {index < services.length - 1 && (
                  <div className="mt-20 section-divider" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark tracking-tight">
              How We <span className="gradient-text-blue">Deliver</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We listen and understand your specific needs and objectives." },
              { step: "02", title: "Planning", desc: "We design a tailored approach with clear timelines and deliverables." },
              { step: "03", title: "Execution", desc: "Our experts deliver with precision, keeping you informed throughout." },
              { step: "04", title: "Review & Support", desc: "We review results and provide ongoing support for lasting value." },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-dark group-hover:bg-accent flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <span className="text-white font-black text-xl">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
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
            Need a Custom <span className="gradient-text">Solution</span>?
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Every business is unique. Let us design a service package that fits your exact needs.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 btn-primary text-base">
            Request a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
