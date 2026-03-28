import { Linkedin, Github, Download } from "lucide-react";
import heroPhoto from "@/assets/hero-photo2.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">ABOUT ME</h2>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl md:text-2xl font-heading font-semibold normal-case mb-4">
              I am a full-stack developer based in India. Passionate about building web applications and solving problems through technology.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              I am a developer looking for exciting opportunities and projects to work on. I like to focus on building clean and efficient applications while continuously improving my development skills. Curious about learning new technologies and improving problem-solving abilities. While I am not programming, I enjoy exploring design, working on creative projects, and improving my technical skills.
            </p>
            <div className="flex items-center gap-4 mb-12">
              <a
                href="/avinash_resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                DOWNLOAD RESUME <Download size={16} />
              </a>
              <a href="https://www.linkedin.com/in/avinassh31" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-border transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/Avinash-023" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-border transition-colors">
                <Github size={18} />
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden bg-secondary">
              <img src={heroPhoto} alt="Avinash Velmurugan" loading="lazy" width={640} height={768} className="w-full h-auto max-h-[500px] object-cover object-top" />
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-20 flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">MY CAPABILITIES</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              I am always looking to add more skills. Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor.
            </p>
            <div className="flex flex-wrap gap-3">
              {["JAVA", "PYTHON", "JAVASCRIPT", "HTML", "CSS", "NODE.JS", "EXPRESS.JS", "MONGODB", "MYSQL", "DJANGO", "GIT & GITHUB", "POSTMAN"].map((skill) => (
                <span key={skill} className="px-5 py-2 border border-border rounded-full text-sm text-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-20 flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">MY EXPERIENCE</h2>
          </div>
          <div className="md:w-2/3 space-y-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h4 className="text-base font-heading font-semibold normal-case">Freelance Developer</h4>
                <span className="text-sm text-muted-foreground">Nov 2023 — Present</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                Developing and maintaining web applications with a focus on responsive interfaces and efficient backend systems. Building full-stack solutions, implementing APIs, managing databases, and improving application performance.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h4 className="text-base font-heading font-semibold normal-case">Graphic Designer</h4>
                <span className="text-sm text-muted-foreground">Sep 2025 — Present</span>
              </div>
              <p className="text-primary text-sm font-medium mb-2">IISPPR Study Abroad</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Designing visual content for social media, advertisements, and promotional campaigns. Creating posters and marketing creatives to strengthen brand presence and engage audiences effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
