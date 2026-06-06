import {
  Code,
  Database,
  Cloud,
  FileText,
  RefreshCw,
  Stethoscope,
  Link,
  Bot,
} from "lucide-react";

const services = [
  {
    title: "Healthcare Software",
    description: "Secure, compliant applications focused on patient data and interoperability.",
    Icon: Stethoscope,
  },
  {
    title: "Full-Stack Development",
    description: "Scalable web applications with .NET Core and Angular.",
    Icon: Code,
  },
  {
    title: "API Development",
    description: "Reliable RESTful APIs and seamless third-party integrations.",
    Icon: Link,
  },
  {
    title: "Upgrades & Modernization",
    description: "Migrating legacy .NET and Angular apps to current versions.",
    Icon: RefreshCw,
  },
  {
    title: "PDF & Report Generation",
    description: "Advanced multi-format reports with charts, tables, and exports.",
    Icon: FileText,
  },
  {
    title: "Cloud & Serverless",
    description: "Cost-efficient architectures with Azure Functions and DevOps pipelines.",
    Icon: Cloud,
  },
  {
    title: "Database Architecture",
    description: "Enterprise-grade SQL database design and query optimization.",
    Icon: Database,
  },
  {
    title: "AI-Assisted Development",
    description: "Using Claude Code and AI-first workflows to ship features faster without sacrificing code quality.",
    Icon: Bot,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container-width section-padding">
        <p className="text-[#A1A1AA] text-sm uppercase tracking-widest mb-4 font-mono">What I offer</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#18181B] mb-12 tracking-tight">Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="bg-white border border-[#E4E4E7] rounded-xl p-5 hover:border-[#D4D4D8] hover:shadow-sm transition-all"
            >
              <Icon size={20} className="text-[#D97706] mb-3" />
              <h3 className="text-base font-semibold text-[#18181B] mb-2">{title}</h3>
              <p className="text-[#71717A] text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
