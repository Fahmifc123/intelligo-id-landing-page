import React from 'react';

interface AlumniLogoProps {
  src: string;
  alt?: string;
}

const AlumniLogo: React.FC<AlumniLogoProps> = ({ src, alt = 'Alumni logo' }) => {
  return (
    <img src={src} alt={alt} className="h-8 md:h-10 max-w-[160px] object-contain" />
  );
};

export default AlumniLogo;