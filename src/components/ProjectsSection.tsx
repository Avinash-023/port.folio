import { ExternalLink } from "lucide-react";
import project1 from "@/assets/image.png";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    tag: null,
    title: "Automated Hall Plan Allocation System",
    description:
      "Developing a web-based system to automatically generate hall seating plans for examinations. Implemented admin controls for student data upload and dynamic seat allocation with real-time previews.",
    year: "2025",
    role: "Full-stack Developer",
    image: project1,
    links: [
      { label: "VIEW PROJECT", href: "https://drive.google.com/drive/folders/126fep0kRkNU6S_NNdDc8MnAwuvkXZQ-q" },
      { label: "SEE ON GITHUB", href: "https://github.com/Avinash-023/backup" },
    ],
  },
  {
    tag: null,
    title: "Study Material Management System",
    description:
      "Developed a web application for managing and distributing subject-wise and unit-wise study materials. Enabled administrators to upload resources and users to easily access and download materials.",
    year: "2025",
    role: "Full-stack Developer",
    image: project2,
    links: [{ label: "VIEW PROJECT", href: "https://drive.google.com/drive/folders/128FLDtPkUEzQ0UjQCk7mf-BWbatGgGjT" }],
  },
  {
    tag: null,
    title: "Graphic Design Projects",
    description:
      "Designed social media creatives, posters, and marketing materials for digital campaigns. Focused on creating visually engaging content to improve brand presence and communication.",
    year: "2025",
    role: "Graphic Designer",
    image: project3,
    links: [{ label: "VIEW PROJECT", href: "https://drive.google.com/drive/folders/1FgsZdhDIS2gFnowYQtn0gVRX0Cd_ozXN" }],
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="py-16 md:py-24 border-t border-border">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">FEATURED PROJECTS</h2>
        <p className="text-muted-foreground text-sm max-w-md mb-12">
          Here are some of the selected projects that showcase my passion for web development.
        </p>

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden bg-secondary relative">
                {project.tag && (
                  <span className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-xs text-foreground px-3 py-1 rounded-full">
                    {project.tag}
                  </span>
                )}
                <img src={project.image} alt={project.title} loading="lazy" width={640} height={512} className="w-full h-auto object-cover" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 normal-case">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>
                <p className="text-xs font-heading font-bold uppercase tracking-wider mb-3">Project Info</p>
                <div className="border-t border-border">
                  <div className="flex justify-between py-2 border-b border-border text-sm">
                    <span className="text-muted-foreground">Year</span>
                    <span className="text-foreground">{project.year}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border text-sm">
                    <span className="text-muted-foreground">Role</span>
                    <span className="text-foreground">{project.role}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  {project.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:opacity-80 transition-opacity"
                    >
                      {link.label} <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
