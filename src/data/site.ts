export const siteConfig = {
  name: "ETL English",
  url: "https://www.etlenglish.com",
  logo: "/images/etl-logo.png",
  description:
    "Yurt dışı eğitim, dil okulları, üniversite, yüksek lisans ve vize süreçlerinde profesyonel danışmanlık.",
  phone: {
    display: "0545 452 02 69",
    e164: "+905454520269",
    href: "tel:+905454520269",
  },
  email: "etlakademisamsun@gmail.com",
  address: "Çiftlik, Divitçioğlu Cd. No:66, 55060 İlkadım/Samsun",
  instagram: "https://www.instagram.com/etlyurtdisiegitimdanismanlik",
  whatsapp: {
    number: "905454520269",
    message: "Merhaba, yurt dışı eğitim programları hakkında bilgi almak istiyorum.",
  },
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.message)}`;

export const footerLinks = {
  quick: [
    { label: "Hakkımızda", href: "#deneyim" },
    { label: "Hizmetlerimiz", href: "#hizmetler" },
    { label: "Kadromuz", href: "#deneyim" },
    { label: "Basında Biz", href: "#deneyim" },
    { label: "İletişim", href: "#danismanlik" },
  ],
  programs: [
    { label: "Dil Okulları", href: "#destinasyonlar" },
    { label: "Genel İngilizce", href: "#hizmetler" },
    { label: "IELTS Kursu", href: "#deneyim" },
    { label: "TOEFL Kursu", href: "#deneyim" },
    { label: "Çocuk İngilizcesi", href: "#hizmetler" },
  ],
} as const;
