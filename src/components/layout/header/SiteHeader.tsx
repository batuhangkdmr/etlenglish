import { Container } from "@/components/shared/Container";

import { BrandLogo } from "./BrandLogo";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";
import { StickyHeader } from "./StickyHeader";
import { TopUtilityBar } from "./TopUtilityBar";

export function SiteHeader() {
  return (
    <StickyHeader>
      <TopUtilityBar />
      <div className="site-main-navbar relative bg-white/80 backdrop-blur-md">
        <div className="pointer-events-none absolute top-1/2 left-[50vw] z-20 hidden -translate-x-1/2 -translate-y-1/2 min-[1360px]:block">
          <div className="pointer-events-auto">
            <BrandLogo className="size-[108px] 2xl:size-[116px]" />
          </div>
        </div>
        <div className="pointer-events-none absolute top-1/2 left-[50vw] z-20 -translate-x-1/2 -translate-y-1/2 min-[1360px]:hidden">
          <div className="pointer-events-auto">
            <BrandLogo className="size-[84px] sm:size-[90px]" />
          </div>
        </div>
        <Container className="relative flex h-full items-center">
          <div className="absolute inset-y-0 left-0 right-0">
            <DesktopNavbar />
          </div>
          <div className="w-full min-[1360px]:hidden">
            <MobileNavbar />
          </div>
        </Container>
      </div>
    </StickyHeader>
  );
}
