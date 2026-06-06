import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const roles = ["Software Engineer", ".NET Developer", "Angular Developer", "AI-First Developer"];

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < fullText.length) {
      timer = setTimeout(() => setDisplayText(fullText.slice(0, displayText.length + 1)), 90);
    } else if (!isDeleting && displayText.length === fullText.length) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 45);
    } else {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="section-padding container-width w-full">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-[#A1A1AA] text-sm uppercase tracking-widest mb-8 font-mono">
            Lahore, Pakistan
          </p>

          <h1 className="text-6xl md:text-8xl font-bold text-[#18181B] leading-[1.05] mb-6 tracking-tight">
            Sameer<br />Tanveer
          </h1>

          <div className="flex items-center gap-2 text-xl md:text-2xl text-[#71717A] mb-8 h-9 font-mono">
            <span>{displayText}</span>
            <span className="w-0.5 h-6 bg-[#D97706] animate-pulse inline-block" />
          </div>

          <p className="text-[#71717A] text-xl max-w-xl mb-10 leading-relaxed">
            3+ years building scalable web apps with .NET Core, Angular, and Azure.
            Focused on healthcare and enterprise software.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://drive.google.com/file/d/1z7AklG1I6drNR_vrqJN8PlCe0nBuD-6k/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download Resume
            </a>
            <button onClick={scrollToAbout} className="btn-secondary">
              See my work
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#D4D4D8] hover:text-[#A1A1AA] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </button>
    </section>
  );
};

export default HeroSection;
