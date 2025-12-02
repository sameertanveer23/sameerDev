import { ExternalLink, Github, Download } from "lucide-react";
import { useState } from "react";

const ProjectBadges = {
  PART_OF_DEV_TEAM: "Part Of Dev Team",
  BUILD_FROM_SCRATCH: "Built From Scratch",
  TEAM_LEAD: "Team Lead",
  MIGRATION_WORK: "Migration Work",
};

const ProjectsSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const mainProjects = [
    {
      title: "CarePath",
      description:
        "CarePath is a multi-tenant, serverless platform on Azure that enables remote void submissions for Urology patients, improving convenience and efficiency.",
      tech: [".net Core 8", "Angular 14", "Azure Services", "Twilio"],
      badges: [ProjectBadges.PART_OF_DEV_TEAM],
      image: "assets/carepath.webp",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Jani Motors",
      description:
        "Jani Motors is a U.S.-based car rental and sales platform with features for browsing, buying, selling, and financing vehicles.",
      tech: [".net Core WebApi", "React", "MongoDB"],
      badges: [ProjectBadges.TEAM_LEAD, ProjectBadges.BUILD_FROM_SCRATCH],
      image: "assets/janimotors.webp",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "XamIQ",
      description:
        "XamIQ is a platform for educational institutions, offering end-to-end exam management, scheduling, billing,  across multi-institute setups.",
      tech: [".Net Core 8", "Angular 17", "MySQL"],
      badges: [ProjectBadges.BUILD_FROM_SCRATCH],
      image: "assets/xamiq.webp",
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  const additionalProjects = [
    {
      title: "Marasem",
      description:
        "A utility site for malls in Makkah, Saudi Arab. Marasem Supports multi-lingual UI. Migrated to .Net & Angular ",
      tech: [".Net Core 9", "Angular v20"],
      badges: [ProjectBadges.MIGRATION_WORK, ProjectBadges.BUILD_FROM_SCRATCH],
      image: "assets/marasem.webp",
      demoUrl: "https://marasem-ui.vercel.app/",
      githubUrl: "#",
    },
  ];

  const allProjects = showAllProjects
    ? [...mainProjects, ...additionalProjects]
    : mainProjects;

  return (
    <section id="projects" className="py-20">
      <div className="container-width section-padding">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
          Projects.portfolio()
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="group neon-border bg-dark-surface/50 overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col h-full">
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4 ml-auto">
                  {project.badges &&
                    project.badges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className="px-2 py-1 text-xs bg-neon-blue/10 text-neon-blue border border-neon-blue/50 rounded-md font-medium"
                      >
                        {badge}
                      </span>
                    ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-dark-bg/50 text-neon-blue border border-neon-blue/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Demo Button - Bottom Left */}
                <div className="ml-auto">
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue border border-neon-blue/50 hover:border-neon-blue rounded-md transition-all duration-300"
                    >
                      <span className="text-sm font-medium">Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-6">
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="cyber-button mr-4"
          >
            <span>
              {showAllProjects ? "Show Less Projects" : "View All Projects"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
