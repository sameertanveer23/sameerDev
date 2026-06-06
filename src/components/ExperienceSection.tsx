const experiences = [
  {
    company: "Technosoft Solutions",
    role: "Software Engineer",
    period: "Feb 2023 – Present",
    location: "Lahore, Pakistan",
    description:
      "Developed secure, HIPAA-conscious healthcare features for urology-focused software. Focused on patient management, treatment tracking, and enterprise-grade web application architecture.",
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "Jan 2022 – Jun 2022",
    location: "Remote",
    description:
      "Built and delivered custom responsive websites with dynamic features, performance optimization, and full client communication across the project lifecycle.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container-width section-padding">
        <p className="text-[#A1A1AA] text-sm uppercase tracking-widest mb-4 font-mono">Where I've worked</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#18181B] mb-12 tracking-tight">Experience</h2>

        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E4E4E7] rounded-xl p-6 md:p-8 hover:border-[#D4D4D8] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#18181B]">{exp.role}</h3>
                  <div className="text-[#D97706] text-base mt-0.5">{exp.company}</div>
                </div>
                <div className="sm:text-right shrink-0">
                  <div className="text-[#71717A] text-base font-mono">{exp.period}</div>
                  <div className="text-[#A1A1AA] text-sm mt-0.5">{exp.location}</div>
                </div>
              </div>
              <p className="text-[#52525B] text-base leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
