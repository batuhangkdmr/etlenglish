import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label="ETL English ana sayfa"
      className={`group/logo relative block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 ${className}`}
    >
      <Image
        src={siteConfig.logo}
        alt=""
        width={1600}
        height={1600}
        sizes="(max-width: 1359px) 88px, 116px"
        className="header-logo-image size-full object-contain transition-transform duration-300 ease-out group-hover/logo:scale-[1.03]"
      />
    </Link>
  );
}
