import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  width?: "fit-content" | "100%";
}

export const ScrollReveal = ({ 
  children, 
  className, 
  delay = 0,
  width = "100%" 
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ width, position: "relative" }}
      className={cn(
        "transition-all duration-700 ease-out",
        !isVisible ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0",
        className
      )}
    >
      <div 
        style={{ 
          transitionDelay: `${delay}ms`,
          transitionDuration: "700ms",
        }}
        className={cn(
          "h-full w-full",
          isVisible ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollReveal;
