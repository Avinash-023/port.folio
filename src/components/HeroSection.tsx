import { Linkedin, Github } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.png";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-16">
          <div className="flex-1 order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold leading-[0.95] mb-6">
              HI, I AM<br />AVINASH VELMURUGAN.
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-md mb-8">
              A full-stack developer passionate about building scalable and user-friendly web applications.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                CONTACT ME <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-foreground" />
              </a>
              <a href="https://www.linkedin.com/in/avinassh31" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-border transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/Avinash-023" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-border transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 order-1 md:order-2">
            <div className="w-64 h-72 md:w-80 md:h-96 rounded-2xl overflow-hidden bg-secondary">
              <img src={heroPhoto} alt="Avinash Velmurugan" width={640} height={768} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
