import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ServicesSection from "../components/ServicesSection";
import CertificationsSection from "../components/CertificationsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <SkillsSection />
      <CertificationsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
