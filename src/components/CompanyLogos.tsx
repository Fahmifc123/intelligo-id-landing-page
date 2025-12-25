// Company logos - using imported images
import grabLogo from "@/assets/logos/grab.png";
import tokopediaLogo from "@/assets/logos/tokopedia.png";
import gojekLogo from "@/assets/logos/gojek.png";
import shopeeLogo from "@/assets/logos/shopee.png";
import travelokaLogo from "@/assets/logos/traveloka.png";
import bukalapakLogo from "@/assets/logos/bukalapak.png";
import ovoLogo from "@/assets/logos/ovo.png";
import danaLogo from "@/assets/logos/dana.png";
import blibliLogo from "@/assets/logos/blibli.png";
import tiketcomLogo from "@/assets/logos/tiketcom.png";
import telkomLogo from "@/assets/logos/telkom.png";
import bcaLogo from "@/assets/logos/bca.png";

// Logo images mapping
export const logoImages: Record<string, string> = {
  grab: grabLogo,
  tokopedia: tokopediaLogo,
  gojek: gojekLogo,
  shopee: shopeeLogo,
  traveloka: travelokaLogo,
  bukalapak: bukalapakLogo,
  ovo: ovoLogo,
  dana: danaLogo,
  blibli: blibliLogo,
  tiketcom: tiketcomLogo,
  telkom: telkomLogo,
  bca: bcaLogo,
};

// Company logo components using real images with consistent sizing
export const companyLogos = {
  tokopedia: () => (
    <img src={tokopediaLogo} alt="Tokopedia" className="h-8 md:h-10 max-w-[140px] object-contain" />
  ),
  // Alumni dynamic entries (fallback: will be populated at build time if scripts create files)
  // Each alumni logo is referenced via src path in alumniLogos.json and rendered using an <img>

  gojek: () => (
    <img src={gojekLogo} alt="Gojek" className="h-8 md:h-10 max-w-[140px] object-contain" />
  ),
  shopee: () => (
    <img src={shopeeLogo} alt="Shopee" className="h-8 md:h-10 max-w-[140px] object-contain" />
  ),
  traveloka: () => (
    <img src={travelokaLogo} alt="Traveloka" className="h-8 md:h-10 max-w-[140px] object-contain" />
  ),
  bukalapak: () => (
    <img src={bukalapakLogo} alt="Bukalapak" className="h-8 md:h-10 max-w-[140px] object-contain" />
  ),
  ovo: () => (
    <img src={ovoLogo} alt="OVO" className="h-8 md:h-10 max-w-[120px] object-contain" />
  ),
  dana: () => (
    <img src={danaLogo} alt="Dana" className="h-8 md:h-10 max-w-[120px] object-contain" />
  ),
  grab: () => (
    <img src={grabLogo} alt="Grab" className="h-8 md:h-10 max-w-[120px] object-contain" />
  ),
  blibli: () => (
    <img src={blibliLogo} alt="Blibli" className="h-8 md:h-10 max-w-[120px] object-contain" />
  ),
  tiketcom: () => (
    <img src={tiketcomLogo} alt="Tiket.com" className="h-8 md:h-10 max-w-[140px] object-contain" />
  ),
  telkom: () => (
    <img src={telkomLogo} alt="Telkom" className="h-8 md:h-10 max-w-[140px] object-contain" />
  ),
  bca: () => (
    <img src={bcaLogo} alt="BCA" className="h-8 md:h-10 max-w-[120px] object-contain" />
  ),
  // International companies - SVG fallbacks
  microsoft: () => (
    <svg viewBox="0 0 130 30" className="h-8 md:h-10 w-auto">
      <rect x="0" y="7" width="7" height="7" fill="#f25022"/>
      <rect x="9" y="7" width="7" height="7" fill="#7fba00"/>
      <rect x="0" y="16" width="7" height="7" fill="#00a4ef"/>
      <rect x="9" y="16" width="7" height="7" fill="#ffb900"/>
      <text x="22" y="21" fontFamily="Segoe UI, Arial, sans-serif" fontSize="14" fill="#737373">
        Microsoft
      </text>
    </svg>
  ),
  google: () => (
    <svg viewBox="0 0 90 30" className="h-8 md:h-10 w-auto">
      <text x="0" y="22" fontFamily="Product Sans, Arial, sans-serif" fontWeight="500" fontSize="18">
        <tspan fill="#4285f4">G</tspan>
        <tspan fill="#ea4335">o</tspan>
        <tspan fill="#fbbc04">o</tspan>
        <tspan fill="#4285f4">g</tspan>
        <tspan fill="#34a853">l</tspan>
        <tspan fill="#ea4335">e</tspan>
      </text>
    </svg>
  ),
  amazon: () => (
    <svg viewBox="0 0 110 30" className="h-8 md:h-10 w-auto">
      <text x="0" y="22" fontFamily="Amazon Ember, Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#232f3e">
        amazon
      </text>
      <path d="M75 20 Q85 25 95 20" stroke="#ff9900" strokeWidth="3" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  meta: () => (
    <svg viewBox="0 0 80 30" className="h-8 md:h-10 w-auto">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#0668e1">
        Meta
      </text>
    </svg>
  ),
  mandiri: () => (
    <svg viewBox="0 0 100 30" className="h-8 md:h-10 w-auto">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="16" fill="#003366">
        mandiri
      </text>
    </svg>
  ),
};

export type LogoKey = keyof typeof companyLogos;
