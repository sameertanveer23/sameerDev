const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "Angular", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "SCSS", level: 85 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: ".Net Core", level: 90 },
        { name: ".Net Framework", level: 80 },
        { name: "SQL", level: 80 },
        { name: "NextJs", level: 75 },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Azure", level: 80 },
        { name: "Git/GitHub", level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-surface/50">
      <div className="container-width section-padding">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
          Skills.matrix
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="neon-border p-6 bg-dark-bg/50">
              <h3 className="text-xl font-bold text-neon-blue mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-mono text-sm">
                        {skill.name}
                      </span>
                      <span className="text-neon-purple text-sm">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Tools & Platforms */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Other Tools & Platforms
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Twilio",
              "SendGrid",
              "EasyPost",
              "Redis",
              "MQTT",
              "QuestPdf",
            ].map((tool, index) => (
              <div
                key={index}
                className="neon-border p-3 bg-dark-bg/50 rounded-lg text-gray-300 hover:border-neon-blue hover:text-neon-blue transition-all duration-300"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "HTML & CSS",
              "Bootstrap",
              "React",
              "NodeJs",
              "RxJs",
              "C#",
              "Swagger",
              "CosmosDb",
              "Sql Server",
              "PostgreSQL",
              "SignalR",
              "Jira",
              "Azure DevOps",
              "BitBucket",
              "Prompt Engineering",
              "Pair Programming",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-dark-bg/50 border border-gray-700 rounded-full text-gray-300 hover:border-neon-blue hover:text-neon-blue transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Familiar With / Other Experience */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-neon-blue mb-4">
            Familiar With / Other Experience
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "HIPAA",
              "Healthcare Compliance",
              "Security-conscious developer",
              "Agile/Scrum",
              "Unit Testing",
              "Code Reviews",
            ].map((item, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-dark-bg/40 border border-cyber-green rounded-full text-cyber-green font-mono text-sm hover:bg-cyber-green/10 transition-all duration-300 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
