import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-heading text-lg font-bold tracking-tight text-foreground">
          AVINASH VELMURUGAN
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border pb-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block px-8 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors animate-in fade-in slide-in-from-left-4 fill-mode-forwards"
              style={{ animationDelay: `${i * 50}ms`, animationDuration: "400ms" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
