import { useState } from "react";

interface Logo {
  name: string;
  image?: string;
  color?: string;
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
        className={`absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none ${
          variant === "dark" 
            ? "bg-gradient-to-r from-primary to-transparent" 
            : "bg-gradient-to-r from-secondary/30 to-transparent"
        }`} 
      />
      <div 
        className={`absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none ${
          variant === "dark" 
            ? "bg-gradient-to-l from-primary to-transparent" 
            : "bg-gradient-to-l from-secondary/30 to-transparent"
        }`} 
      />

      <div
        className="flex gap-8 w-max"
        style={{
          animation: `scroll-${direction} ${speedDuration[speed]} linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className={`flex-shrink-0 px-6 py-4 rounded-xl border transition-all duration-300 cursor-pointer hover:scale-105 flex items-center justify-center min-w-[140px] h-16 ${
              variant === "dark"
                ? "bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 hover:border-primary-foreground/40"
                : "bg-card border-border hover:bg-accent/10 hover:border-accent/30 shadow-sm"
            }`}
          >
            {logo.image ? (
              <img 
                src={logo.image} 
                alt={logo.name}
                className="h-8 w-auto object-contain max-w-[100px]"
              />
            ) : (
              <span
                className={`font-bold text-lg whitespace-nowrap ${
                  variant === "dark"
                    ? "text-primary-foreground"
                    : "text-foreground"
                }`}
                style={{ color: logo.color }}
              >
                {logo.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
