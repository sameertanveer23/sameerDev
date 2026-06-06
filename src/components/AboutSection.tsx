import { Dumbbell, MonitorSmartphone, Crown } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#F7F7F8]">
      <div className="container-width section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#A1A1AA] text-sm uppercase tracking-widest mb-4 font-mono">Who I am</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#18181B] mb-8 tracking-tight">About</h2>

            <div className="space-y-5 text-[#52525B] text-lg leading-relaxed">
              <p>
                I'm a software engineer specializing in .NET Core, Angular, and Azure.
                I build secure, scalable web applications for healthcare and SaaS domains.
              </p>
              <p>
                Over 3+ years I've worked across the full stack — database architecture,
                API design, frontend performance, and Azure deployments. I embrace AI-first
                development and use Claude Code daily to ship faster without sacrificing code quality.
              </p>
              <p>
                Outside work: I lift, play chess, and keep up with what's happening in tech.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-[#E4E4E7] rounded-xl p-6">
                <div className="text-3xl font-bold text-[#D97706] mb-1">3+</div>
                <div className="text-[#71717A] text-base">Years of experience</div>
              </div>
              <div className="bg-white border border-[#E4E4E7] rounded-xl p-6">
                <div className="text-3xl font-bold text-[#D97706] mb-1">10+</div>
                <div className="text-[#71717A] text-base">Projects shipped</div>
              </div>
            </div>

            <div className="bg-white border border-[#E4E4E7] rounded-xl p-6 space-y-4">
              <p className="text-[#A1A1AA] text-sm uppercase tracking-widest font-mono">Core stack</p>
              <div className="flex flex-wrap gap-2">
                {[".NET Core", "Angular", "Azure", "TypeScript", "SQL", "C#"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#F4F4F5] border border-[#E4E4E7] rounded-full text-[#52525B] text-sm font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#E4E4E7] rounded-xl p-6 space-y-3">
              <p className="text-[#A1A1AA] text-sm uppercase tracking-widest font-mono">Off the clock</p>
              <div className="flex items-center gap-3 text-[#52525B] text-base">
                <Dumbbell size={15} className="text-[#D97706] shrink-0" />
                Lifting weights
              </div>
              <div className="flex items-center gap-3 text-[#52525B] text-base">
                <Crown size={15} className="text-[#D97706] shrink-0" />
                Playing chess
              </div>
              <div className="flex items-center gap-3 text-[#52525B] text-base">
                <MonitorSmartphone size={15} className="text-[#D97706] shrink-0" />
                Exploring tech
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
