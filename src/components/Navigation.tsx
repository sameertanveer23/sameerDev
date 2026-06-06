import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-[#E4E4E7]"
          : "bg-transparent"
      }`}
    >
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("#home")}
            className="text-base font-semibold text-[#18181B] tracking-wide"
          >
            Sameer Tanveer
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-base text-[#71717A] hover:text-[#18181B] transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="text-base px-4 py-1.5 border border-[#D4D4D8] text-[#18181B] rounded-lg hover:border-[#A1A1AA] hover:bg-[#F7F7F8] transition-colors duration-200"
            >
              Hire me
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#71717A] hover:text-[#18181B] transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-[#E4E4E7]">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-base text-[#71717A] hover:text-[#18181B] transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#contact")}
                className="text-left text-base text-[#D97706]"
              >
                Hire me →
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
