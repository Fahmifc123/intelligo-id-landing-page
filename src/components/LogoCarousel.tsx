import { companyLogos, LogoKey } from "./CompanyLogos";
import AlumniLogo from "./AlumniLogo";

interface Logo {
  name: string;
  key?: LogoKey;
  src?: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  variant?: "light" | "dark";
}

const LogoCarousel = ({ logos, direction = "left", speed = "normal", variant = "light" }: LogoCarouselProps) => {
  const speedClass = {
    slow: "animate-scroll-40",
    normal: "animate-scroll-30",
    fast: "animate-scroll-20",
  }[speed];

  const animationDirection = direction === "left" ? "scroll-left" : "scroll-right";

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex gap-8 md:gap-12"
        style={{
          animation: `${animationDirection} ${speed === "slow" ? "40s" : speed === "normal" ? "30s" : "20s"} linear infinite`,
        }}
      >
        {/* Duplicate logos for seamless loop */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className={`flex-shrink-0 flex items-center justify-center ${
              variant === "dark" ? "opacity-90" : "opacity-70"
            } hover:opacity-100 transition-opacity duration-300`}
          >
            {logo.key && companyLogos[logo.key] ? (
              companyLogos[logo.key]()
            ) : logo.src ? (
              <AlumniLogo src={logo.src} alt={logo.name} />
            ) : (
              <span className="text-muted-foreground text-sm">{logo.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;