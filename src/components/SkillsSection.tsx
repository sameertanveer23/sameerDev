const categories = [
  {
    label: "Frontend",
    skills: ["Angular", "TypeScript", "JavaScript", "SCSS", "React", "RxJS", "HTML & CSS", "Bootstrap"],
  },
  {
    label: "Backend",
    skills: [".NET Core", ".NET Framework", "C#", "SQL Server", "PostgreSQL", "MySQL", "CosmosDB", "Node.js"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["Azure", "Azure Functions", "Azure DevOps", "Git", "GitHub", "BitBucket"],
  },
  {
    label: "Integrations & Tools",
    skills: ["Claude Code", "Claude API", "Twilio", "SendGrid", "EasyPost", "Redis", "MQTT", "SignalR", "QuestPdf", "Swagger"],
  },
];

const practices = [
  "AI-First Development",
  "HIPAA Compliance",
  "Agile / Scrum",
  "Unit Testing",
  "Code Reviews",
  "Prompt Engineering",
  "Pair Programming",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-[#F7F7F8]">
      <div className="container-width section-padding">
        <p className="text-[#A1A1AA] text-sm uppercase tracking-widest mb-4 font-mono">What I know</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#18181B] mb-12 tracking-tight">Skills</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {categories.map((cat) => (
            <div key={cat.label} className="bg-white border border-[#E4E4E7] rounded-xl p-5">
              <p className="text-[#A1A1AA] text-sm uppercase tracking-widest font-mono mb-4">{cat.label}</p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#F4F4F5] border border-[#E4E4E7] rounded-full text-[#3F3F46] text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-[#E4E4E7] rounded-xl p-5">
          <p className="text-[#A1A1AA] text-sm uppercase tracking-widest font-mono mb-4">Practices</p>
          <div className="flex flex-wrap gap-2">
            {practices.map((p) => (
              <span
                key={p}
                className="px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-sm"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
