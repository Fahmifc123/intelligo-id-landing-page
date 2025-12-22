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

// Simple colored logo component
const ColoredLogo = ({ name, variant }: { name: string; variant: "light" | "dark" }) => {
  // Generate consistent color based on company name
  const colors: Record<string, string> = {
    "Tokopedia": "#42b549",
    "Gojek": "#00880f",
    "Shopee": "#ee4d2d",
    "Traveloka": "#0194f3",
    "Bukalapak": "#e31e52",
    "OVO": "#4c2a86",
    "Dana": "#108ee9",
    "Grab": "#00b14f",
    "Blibli": "#0095da",
    "Tiket.com": "#0064d2",
    "Telkom": "#e4002b",
    "BCA": "#003d79",
    "Microsoft": "#00a4ef",
    "Google": "#4285f4",
    "Amazon": "#ff9900",
    "Meta": "#0668e1",
    "Bank Mandiri": "#003366",
  };

  const color = colors[name] || (variant === "dark" ? "#ffffff" : "#1a1a2e");

  return (
    <span 
      className="font-bold text-base whitespace-nowrap"
      style={{ color }}
    >
      {name}
    </span>
  );
};

const LogoCarousel = ({
  logos,
  direction = "left",
  speed = "normal",
  className = "",
  variant = "dark",
}: LogoCarouselProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const speedDuration = {
    slow: "40s",
    normal: "25s",
    fast: "15s",
  };

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  const handleImageError = (logoName: string) => {
    setFailedImages(prev => new Set(prev).add(logoName));
  };

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
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className={`flex-shrink-0 px-5 py-3 rounded-xl border transition-all duration-300 cursor-pointer hover:scale-105 flex items-center justify-center min-w-[120px] h-14 ${
              variant === "dark"
                ? "bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 hover:border-primary-foreground/40"
                : "bg-card border-border hover:bg-accent/10 hover:border-accent/30 shadow-sm"
            }`}
          >
            {logo.image && !failedImages.has(logo.name) ? (
              <img 
                src={logo.image} 
                alt={logo.name}
                className="h-7 w-auto object-contain max-w-[90px]"
                onError={() => handleImageError(logo.name)}
              />
            ) : (
              <ColoredLogo name={logo.name} variant={variant} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
