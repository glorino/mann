import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  highlight?: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  bg?: "dark" | "accent" | "primary";
}

export default function PageHeader({
  title,
  highlight,
  description,
  breadcrumbs = [],
  bg = "dark",
}: PageHeaderProps) {
  const bgClasses = {
    dark: "bg-dark",
    accent: "bg-gradient-to-br from-dark via-dark-800 to-dark",
    primary: "bg-gradient-to-br from-dark-700 via-primary to-dark",
  };

  return (
    <section
      className={`relative pt-36 pb-16 md:pt-44 md:pb-20 ${bgClasses[bg]} overflow-hidden`}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-6">
            <Link
              href="/"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Home size={13} />
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight size={12} />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/70">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight leading-tight">
          {title}{" "}
          {highlight && <span className="gradient-text">{highlight}</span>}
        </h1>

        {description && (
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
