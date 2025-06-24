import { Code2, LaptopMinimal } from "lucide-react";

const experiences = [
  {
    company: "Technosoft Solutions",
    role: "Software Engineer",
    period: "Feb 2023 – Present",
    location: "Lahore, Pakistan",
    description:
      "At Technosoft Solutions, I developed secure, compliant healthcare features for Urology-focused software, optimizing patient management and treatment tracking.",
    icon: Code2,
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "Jan 2022 – Jun 2022",
    location: "Remote",
    description:
      "I built and deployed custom, responsive websites with dynamic features, performance optimization, and full client communication and project management.",
    icon: LaptopMinimal,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container-width section-padding">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
          Experience.timeline()
        </h2>
        <div className="flex flex-col md:flex-row gap-8 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="min-w-[320px] md:min-w-0 flex-1 bg-dark-surface/70 neon-border p-8 rounded-lg shadow-lg flex flex-col items-start relative"
              >
                <div className="absolute -top-7 left-6 w-12 h-12 bg-dark-bg border-4 border-neon-blue rounded-full flex items-center justify-center shadow-lg">
                  <Icon className="text-neon-blue" size={24} />
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full mt-6 mb-2">
                  <span className="text-neon-blue font-mono text-xs md:text-sm mb-1 md:mb-0">
                    {exp.period}
                  </span>
                  <span className="text-cyber-green text-xs md:text-sm">
                    {exp.location}
                  </span>
                </div>
                <div className="text-white font-bold text-lg md:text-xl mb-1">
                  {exp.role}
                </div>
                <div className="text-neon-blue font-semibold text-base mb-2">
                  {exp.company}
                </div>
                <div className="text-gray-300 text-base leading-relaxed">
                  {exp.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
