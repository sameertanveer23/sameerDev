import { ExternalLink, Github, Download } from "lucide-react";
import { useState } from "react";

const ProjectsSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const mainProjects = [
    {
      title: "CarePath",
      description:
        "CarePath is a multi-tenant, serverless platform on Azure that enables remote void submissions for Urology patients, improving convenience and efficiency.",
      tech: [".net Core 8", "Angular 14", "Azure Services", "Twilio"],
      image: "src/assets/carepath.webp",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Jani Motors",
      description:
        "Jani Motors is a U.S.-based car rental and sales platform with features for browsing, buying, selling, and financing vehicles.",
      tech: [".net Core WebApi", "React", "MongoDB"],
      image: "src/assets/janimotors.webp",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "XamIQ",
      description:
        "XamIQ is a platform for educational institutions, offering end-to-end exam management, scheduling, billing,  across multi-institute setups.",
      tech: [".Net Core 8", "Angular 17", "MySQL"],
      image: "src/assets/xamiq.webp",
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  const additionalProjects = [
    // {
    //   title: "Blockchain Explorer",
    //   description:
    //     "Advanced blockchain analysis tool with transaction tracking and wallet monitoring capabilities.",
    //   tech: ["React", "Node.js", "Web3.js", "Redis"],
    //   image:
    //     "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    //   demoUrl: "#",
    //   githubUrl: "#",
    // },
  ];

  const allProjects = showAllProjects
    ? [...mainProjects, ...additionalProjects]
    : mainProjects;

  const handleDownloadResume = () => {
    // Create a dummy PDF download
    const link = document.createElement("a");
    link.href = "#"; // In a real app, this would be the actual resume URL
    link.download = "Alex_Cipher_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-dark-bg/50 text-neon-blue border border-neon-blue/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-6">
          {/* <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="cyber-button mr-4"
          >
            <span>
              {showAllProjects ? "Show Less Projects" : "View All Projects"}
            </span>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
