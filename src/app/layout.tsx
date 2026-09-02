import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { SiteHeader } from "@/components/layout/header/SiteHeader";
import { FloatingActions } from "@/components/shared/FloatingActions";
import { siteConfig } from "@/data/site";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ETL English | Yurt Dışı Eğitim ve Dil Okulları",
    template: "%s | ETL English",
  },
  description: siteConfig.description,
  keywords: [
    "yurt dışı eğitim",
    "yurt dışı eğitim danışmanlığı",
    "dil okulları",
    "yurt dışında üniversite",
    "yüksek lisans",
    "İngilizce eğitimi",
    "vize danışmanlığı",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: "ETL English",
    title: "ETL English | Yurt Dışı Eğitim ve Dil Okulları",
    description: siteConfig.description,
    images: [
      {
        url: "/images/hero-consultation.png",
        width: 531,
        height: 531,
        alt: "ETL English yurt dışı eğitim danışmanlığı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ETL English | Yurt Dışı Eğitim ve Dil Okulları",
    description: siteConfig.description,
    images: ["/images/hero-consultation.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={manrope.variable}>
      <body className="flex min-h-dvh flex-col antialiased">
        <a
          href="#main-content"
          className="fixed top-3 left-3 z-[100] -translate-y-20 rounded-lg bg-brand-navy px-4 py-3 text-sm font-bold text-white transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
        >
          Ana içeriğe geç
        </a>
        <SiteHeader />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
