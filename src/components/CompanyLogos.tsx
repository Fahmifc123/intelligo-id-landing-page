// Company logos - loading from JSON data
import trainerLogosData from "@/data/trainer-logos.json";

// Logo images mapping - now from JSON with dynamic paths
export const logoImages: Record<string, string> = {};

// Populate logoImages from JSON data
trainerLogosData.trainerLogos.forEach((logo) => {
  const key = logo.name
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9]/g, "");
  logoImages[key] = logo.logo;
});

// Company logo component that renders images dynamically
const CompanyLogoImg = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    className="h-8 md:h-10 max-w-[140px] object-contain"
    onError={(e) => {
      (e.target as HTMLImageElement).src = "/placeholder.svg";
    }}
  />
);

// Company logo components - dynamically created from JSON
export const companyLogos: Record<
  string,
  () => React.ReactElement
> = {};

// Populate companyLogos from JSON data
trainerLogosData.trainerLogos.forEach((logo) => {
  const key = logo.name
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9]/g, "");

  companyLogos[key] = () => (
    <CompanyLogoImg src={logo.logo} alt={logo.name} />
  );
});

// Convenience functions for commonly used logos
export const getLogoByName = (name: string): string => {
  const key = name
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9]/g, "");
  return logoImages[key] || "/placeholder.svg";
};

export const renderLogoByName = (name: string): React.ReactElement => {
  const src = getLogoByName(name);
  return <CompanyLogoImg src={src} alt={name} />;
};

export type LogoKey = keyof typeof companyLogos;
