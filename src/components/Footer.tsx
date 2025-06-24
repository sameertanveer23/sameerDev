import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-surface/80 border-t border-gray-800">
      <div className="container-width section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text">
              &lt;Portfolio/&gt;
            </div>
            <p className="text-gray-400 text-sm">
              Code with purpose. Build with impact.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/sameertanveer23"
              target="_blank"
              className="p-3 bg-dark-bg/50 rounded-full hover:bg-neon-blue/20 hover:text-neon-blue transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sameer-tanveer-909aa8193/"
              target="_blank"
              className="p-3 bg-dark-bg/50 rounded-full hover:bg-neon-blue/20 hover:text-neon-blue transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end space-x-2 text-gray-400 text-sm">
              <span>Sameer Tanveer, Software Engineer</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500 font-mono">
            [STATUS]: System operational • Performance optimized • Security
            enabled
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
