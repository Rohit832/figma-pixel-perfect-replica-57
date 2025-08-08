import * as React from "react";

interface OrganizationLogosProps {
  logosSrc: string;
  logosAlt: string;
  className?: string;
}

export const OrganizationLogos: React.FC<OrganizationLogosProps> = ({
  logosSrc,
  logosAlt,
  className = ""
}) => {
  return (
    <div className={`w-full flex items-center justify-center ${className}`}>
      <img
        src={logosSrc}
        alt={logosAlt}
        className="w-full max-w-full h-auto object-contain"
        role="img"
        aria-label="Logos of partner organizations"
      />
    </div>
  );
};
