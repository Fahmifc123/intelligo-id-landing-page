// Company logos as SVG components for crisp rendering
export const companyLogos = {
  tokopedia: () => (
    <svg viewBox="0 0 120 30" className="h-6 w-auto">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#42b549">
        tokopedia
      </text>
    </svg>
  ),
  gojek: () => (
    <svg viewBox="0 0 80 30" className="h-6 w-auto">
      <circle cx="15" cy="15" r="12" fill="#00880f"/>
      <text x="32" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#00880f">
        gojek
      </text>
    </svg>
  ),
  shopee: () => (
    <svg viewBox="0 0 100 30" className="h-6 w-auto">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#ee4d2d">
        Shopee
      </text>
    </svg>
  ),
  traveloka: () => (
    <svg viewBox="0 0 120 30" className="h-6 w-auto">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#0194f3">
        traveloka
      </text>
    </svg>
  ),
  bukalapak: () => (
    <svg viewBox="0 0 120 30" className="h-6 w-auto">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#e31e52">
        Bukalapak
      </text>
    </svg>
  ),
  ovo: () => (
    <svg viewBox="0 0 60 30" className="h-6 w-auto">
      <rect x="0" y="5" width="50" height="20" rx="10" fill="#4c2a86"/>
      <text x="10" y="20" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" fill="white">
        OVO
      </text>
    </svg>
  ),
  dana: () => (
    <svg viewBox="0 0 80 30" className="h-6 w-auto">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#108ee9">
        DANA
      </text>
    </svg>
  ),
  grab: () => (
    <svg viewBox="0 0 80 30" className="h-6 w-auto">
      <circle cx="15" cy="15" r="12" fill="#00b14f"/>
      <text x="32" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#00b14f">
        Grab
      </text>
    </svg>
  ),
  blibli: () => (
    <svg viewBox="0 0 80 30" className="h-6 w-auto">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#0095da">
        Blibli
      </text>
    </svg>
  ),
  tiketcom: () => (
    <svg viewBox="0 0 100 30" className="h-6 w-auto">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#0064d2">
        tiket.com
      </text>
    </svg>
  ),
  telkom: () => (
    <svg viewBox="0 0 100 30" className="h-6 w-auto">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#e4002b">
        Telkom
      </text>
    </svg>
  ),
  bca: () => (
    <svg viewBox="0 0 60 30" className="h-6 w-auto">
      <rect x="0" y="5" width="50" height="20" rx="3" fill="#003d79"/>
      <text x="8" y="20" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" fill="white">
        BCA
      </text>
    </svg>
  ),
  microsoft: () => (
    <svg viewBox="0 0 130 30" className="h-6 w-auto">
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
    <svg viewBox="0 0 90 30" className="h-6 w-auto">
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
    <svg viewBox="0 0 110 30" className="h-6 w-auto">
      <text x="0" y="22" fontFamily="Amazon Ember, Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#232f3e">
        amazon
      </text>
      <path d="M75 20 Q85 25 95 20" stroke="#ff9900" strokeWidth="3" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  meta: () => (
    <svg viewBox="0 0 80 30" className="h-6 w-auto">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#0668e1">
        Meta
      </text>
    </svg>
  ),
  mandiri: () => (
    <svg viewBox="0 0 100 30" className="h-6 w-auto">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="16" fill="#003366">
        mandiri
      </text>
    </svg>
  ),
};

export type LogoKey = keyof typeof companyLogos;
