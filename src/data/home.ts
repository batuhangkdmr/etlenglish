export const heroMetrics = [
  { value: "25+", label: "Yıllık Tecrübe" },
  { value: "25+", label: "Ülkede Eğitim Ağı" },
  { value: "10.000+", label: "Yüksek Lisans Öğrencisi" },
] as const;

export const services = [
  {
    title: "Yurt Dışı Eğitim",
    description: "Hedeflerinize uygun ülke ve program için kişisel eğitim rotası.",
    href: "#danismanlik",
    icon: "globe",
  },
  {
    title: "Dil Okulları",
    description: "Dünyanın önde gelen okullarında nitelikli dil eğitimi seçenekleri.",
    href: "#destinasyonlar",
    icon: "languages",
  },
  {
    title: "Üniversite & Yüksek Lisans",
    description: "Akademik profilinize uygun okul seçimi ve başvuru danışmanlığı.",
    href: "#universite",
    icon: "graduation",
  },
  {
    title: "Vize Danışmanlığı",
    description: "Belgelerden randevuya kadar kontrollü ve şeffaf süreç yönetimi.",
    href: "#danismanlik",
    icon: "passport",
  },
] as const;

export const whyEtlAdvantages = [
  "Doğru Program Seçimi",
  "Başvuru & Vize Desteği",
  "Uçtan Uca Danışmanlık",
] as const;

export const destinations = [
  { name: "Kanada", image: "/images/destination-canada.jpg", href: "#danismanlik" },
  { name: "İrlanda", image: "/images/destination-ireland.jpg", href: "#danismanlik" },
  { name: "Avustralya", image: "/images/destination-australia.jpg", href: "#danismanlik" },
  { name: "Malta", image: "/images/destination-malta.jpg", href: "#danismanlik" },
  { name: "ABD", image: "/images/destination-usa.jpg", href: "#danismanlik" },
  { name: "İngiltere", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1800&q=88", href: "#danismanlik" },
] as const;

export const universities = [
  { name: "İngiltere'de Üniversite", image: "/images/hero-london.jpg", href: "#danismanlik", code: "UK" },
  { name: "Amerika'da Üniversite", image: "/images/destination-usa.jpg", href: "#danismanlik", code: "US" },
  { name: "Rusya'da Üniversite", image: "/images/university-russia.png", href: "#danismanlik", code: "RU" },
] as const;

export const mastersAdvantages = [
  "Sınavsız Üniversite İmkanı",
  "Uluslararası Diploma Seçenekleri",
  "Başvuru Süreci Danışmanlığı",
] as const;

export const processSteps = [
  { number: "01", title: "Hedefinizi Belirleyelim", description: "Akademik ve kişisel beklentilerinizi birlikte netleştirelim." },
  { number: "02", title: "Okul ve Programı Seçelim", description: "Profilinize uygun ülke, okul ve program alternatiflerini değerlendirelim." },
  { number: "03", title: "Başvurunuzu Hazırlayalım", description: "Belgelerinizi eksiksiz hazırlayıp başvurunuzu güvenle yönetelim." },
  { number: "04", title: "Vize ve Yolculuğu Planlayalım", description: "Vize, konaklama ve seyahat adımlarınızı birlikte tamamlayalım." },
] as const;

export const partners = [
  { name: "King English", logo: "/images/partner-kings.webp" },
  { name: "Kaplan International English", logo: "/images/partner-kaplan.webp" },
  { name: "New York Language Center", logo: "/images/partner-nylc.webp" },
] as const;

export type Testimonial = {
  quote: string;
  name: string;
  program: string;
};

export const testimonials: Testimonial[] = [];
