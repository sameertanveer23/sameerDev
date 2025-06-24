import { useEffect, useState } from "react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Software Engineer (.net)";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="section-padding container-width relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text mb-4">
            SAMEER TANVEER
          </h1>

          {/* Typing effect title */}
          <div className="text-2xl md:text-4xl text-gray-300 h-16 flex items-center justify-center">
            <span className="border-r-2 border-neon-blue animate-pulse pr-2">
              {displayText}
            </span>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Software Engineer with 2+ years in .NET Core, Angular, and Azure.
            Focused on building scalable solutions to solve real-world problems
            .
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button className="cyber-button">
              <a
                href="assets/Sameer Tanveer Resume.pdf"
                download="Sameer Tanveer Resume.pdf"
              >
                <span>Download Resume</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
