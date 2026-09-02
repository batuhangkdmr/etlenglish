import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { HeroSection } from "@/components/home/HeroSection";
import { MastersSection } from "@/components/home/MastersSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { EnglishGoalFinder } from "@/components/home/EnglishGoalFinder";
import { GlobalEducationJourney } from "@/components/home/GlobalEducationJourney";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { UniversitySection } from "@/components/home/UniversitySection";
import { WhyEtlSection } from "@/components/home/WhyEtlSection";
import { siteConfig } from "@/data/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "EducationalOrganization"],
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone.e164,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Çiftlik, Divitçioğlu Cd. No:66",
    addressLocality: "İlkadım",
    addressRegion: "Samsun",
    postalCode: "55060",
    addressCountry: "TR",
  },
  sameAs: [siteConfig.instagram],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone.e164,
    contactType: "customer service",
    availableLanguage: ["Turkish", "English"],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main id="main-content" tabIndex={-1} className="flex-1 overflow-hidden">
        <HeroSection />
        <DestinationsSection />
        <WhyEtlSection />
        <ServicesSection />
        <UniversitySection />
        <MastersSection />
        <GlobalEducationJourney />
        <EnglishGoalFinder />
        <ProcessSection />
        <PartnersSection />
        <TestimonialsSection />
        <ConsultationCTA />
      </main>
    </>
  );
}
