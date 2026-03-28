import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <ScrollReveal>
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <ProjectsSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <ContactSection />
      </ScrollReveal>
      <Footer />
    </div>
  );
};

export default Index;
