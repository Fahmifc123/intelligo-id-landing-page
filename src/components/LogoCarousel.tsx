import { useState, ReactNode } from "react";
import { companyLogos, LogoKey } from "./CompanyLogos";

interface Logo {
  name: string;
  key: LogoKey;
}

interface LogoCarouselProps {
  logos: Logo[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  className?: string;
  variant?: "light" | "dark";
}

const LogoCarousel = ({
  logos,
  direction = "left",
  speed = "normal",
  className = "",
  variant = "dark",
}: LogoCarouselProps) => {
  const [isPaused, setIsPaused] = useState(false);

  const speedDuration = {
    slow: "40s",
    normal: "25s",
    fast: "15s",
  };

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gradient masks for smooth edges */}
      <div 
        className={`absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none ${
          variant === "dark" 
            ? "bg-gradient-to-r from-primary to-transparent" 
            : "bg-gradient-to-r from-background to-transparent"
        }`} 
      />
      <div 
        className={`absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none ${
          variant === "dark" 
            ? "bg-gradient-to-l from-primary to-transparent" 
            : "bg-gradient-to-l from-background to-transparent"
        }`} 
      />

      <div
        className="flex gap-6 md:gap-8 w-max"
        style={{
          animation: `scroll-${direction} ${speedDuration[speed]} linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicatedLogos.map((logo, index) => {
          const LogoComponent = companyLogos[logo.key];
          
          return (
            <div
              key={`${logo.name}-${index}`}
              className={`flex-shrink-0 px-5 py-3 rounded-xl border transition-all duration-300 cursor-pointer hover:scale-105 flex items-center justify-center min-w-[100px] h-14 ${
                variant === "dark"
                  ? "bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 hover:border-primary-foreground/40"
                  : "bg-card border-border hover:bg-accent/10 hover:border-accent/30 shadow-sm"
              }`}
            >
              {LogoComponent ? (
                <LogoComponent />
              ) : (
                <span className={`font-bold text-sm ${variant === "dark" ? "text-primary-foreground" : "text-foreground"}`}>
                  {logo.name}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogoCarousel;
