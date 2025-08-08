import * as React from "react";

interface SectionHeaderProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  iconSrc,
  iconAlt,
  title,
  className = ""
}) => {
  return (
    <header className={`flex w-full max-w-[839px] flex-col items-center gap-[11px] max-md:gap-2 max-sm:gap-1.5 ${className}`}>
      <img
        src={iconSrc}
        alt={iconAlt}
        className="w-[60px] h-[60px] max-md:w-[50px] max-md:h-[50px] max-sm:w-10 max-sm:h-10"
        role="img"
        aria-hidden="true"
      />
      <h1 className="w-full text-black text-center text-5xl font-bold max-md:text-4xl max-sm:text-2xl max-sm:leading-[1.2]">
        {title}
      </h1>
    </header>
  );
};
