import { ExternalLink } from "lucide-react";
import { useState } from "react";

const mainProjects = [
  {
    title: "CarePath",
    description:
      "Multi-tenant, serverless platform on Azure enabling remote void submissions for urology patients. Improves clinical workflow efficiency and patient convenience.",
    tech: [".NET Core 8", "Angular 14", "Azure", "Twilio"],
    role: "Part of dev team",
    image: "assets/carepath.webp",
    demoUrl: null,
  },
  {
    title: "Jani Motors",
    description:
      "U.S.-based car rental and sales platform. Features browsing, buying, selling, and financing. Led the team and built the system from scratch.",
    tech: [".NET Core", "React", "MongoDB"],
    role: "Team Lead · Built from scratch",
    image: "assets/janimotors.webp",
    demoUrl: null,
  },
  {
    title: "XamIQ",
    description:
      "Exam management platform for educational institutions — scheduling, billing, and multi-institute support. Built end-to-end from the ground up.",
    tech: [".NET Core 8", "Angular 17", "MySQL"],
    role: "Built from scratch",
    image: "assets/xamiq.webp",
    demoUrl: null,
  },
];

const extraProjects = [
  {
    title: "Marasem",
    description:
      "Utility site for malls in Makkah, Saudi Arabia. Supports multi-lingual UI. Migrated legacy codebase to .NET Core 9 and Angular v20.",
    tech: [".NET Core 9", "Angular v20"],
    role: "Migration work",
    image: "assets/marasem.webp",
    demoUrl: "https://marasem-ui.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = showAll ? [...mainProjects, ...extraProjects] : mainProjects;

  return (
    <section id="projects" className="py-24 bg-[#F7F7F8]">
      <div className="container-width section-padding">
        <p className="text-[#A1A1AA] text-sm uppercase tracking-widest mb-4 font-mono">What I've built</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#18181B] mb-12 tracking-tight">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-[#E4E4E7] rounded-xl overflow-hidden hover:border-[#D4D4D8] hover:shadow-sm transition-all flex flex-col"
            >
              <div className="relative overflow-hidden h-44 bg-[#F4F4F5]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-semibold text-[#18181B]">{project.title}</h3>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D97706] hover:text-[#B45309] transition-colors shrink-0 mt-0.5"
                      aria-label="View demo"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>

                <p className="text-[#71717A] text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-[#F4F4F5] border border-[#E4E4E7] rounded text-[#71717A] text-sm font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#F0F0F1]">
                  <span className="text-[#A1A1AA] text-sm">{project.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button onClick={() => setShowAll(!showAll)} className="btn-secondary">
            {showAll ? "Show less" : "View all projects"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
