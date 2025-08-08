import * as React from "react";
import { SectionHeader } from "./SectionHeader";
import { OrganizationLogos } from "./OrganizationLogos";

export const TrustedOrganizations: React.FC = () => {
  return (
    <section 
      className="max-w-[1345px] flex w-full flex-col items-center gap-[82px] box-border mx-auto my-0 px-5 py-0 max-md:max-w-[991px] max-md:gap-[60px] max-md:px-4 max-md:py-0 max-sm:max-w-screen-sm max-sm:gap-10 max-sm:px-3 max-sm:py-0"
      aria-labelledby="trusted-organizations-heading"
    >
      <SectionHeader
        iconSrc="https://api.builder.io/api/v1/image/assets/TEMP/0a1f5f1ff712c460bb4ebbf5012dc79cf6ba42bf?width=120"
        iconAlt="Decorative shape icon"
        title="Trusted by Notable Organisations"
      />
      
      <OrganizationLogos
        logosSrc="https://api.builder.io/api/v1/image/assets/TEMP/c689997550e8a7b6474efed36df27de0cb10734b?width=2689"
        logosAlt="Collection of partner organization logos including various companies and institutions"
      />
    </section>
  );
};
