/**
 * Alumni Logos Carousel Component
 * Minimalist horizontal scrolling carousel with title and logos only
 */

import alumniLogosData from '@/data/alumni-logos.json';

export const AlumniLogosShowcase = () => {
  const logos = alumniLogosData.alumniLogos;
  
  return (
    <div className="w-full bg-white py-2 md:py-3">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Minimalist Title */}
        <h2 className="text-base md:text-lg font-bold text-slate-900 text-center mb-3">
          Alumni Kami Bekerja Di
        </h2>

        {/* Animated Carousel */}
        <div className="relative overflow-hidden">
          <style>{`
            @keyframes scroll-infinite {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .carousel-container {
              animation: scroll-infinite 30s linear infinite;
            }
            .carousel-container:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="flex gap-4 md:gap-8 carousel-container">
            {/* First set */}
            {logos.map((logo, idx) => (
              <div
                key={`carousel-1-${idx}`}
                className="flex-shrink-0 flex items-center justify-center min-w-max"
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="h-8 md:h-10 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                  }}
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, idx) => (
              <div
                key={`carousel-2-${idx}`}
                className="flex-shrink-0 flex items-center justify-center min-w-max"
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="h-8 md:h-10 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniLogosShowcase;
