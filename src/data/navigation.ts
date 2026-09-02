export type NavigationItem = {
  label: string;
  href: string;
  route: string;
  children?: ReadonlyArray<{
    label: string;
    href: string;
    route: string;
  }>;
};

export const leftNavigation: ReadonlyArray<NavigationItem> = [
  { label: "Hakkımızda", href: "#deneyim", route: "/hakkimizda" },
  {
    label: "Dil Okulları",
    href: "#destinasyonlar",
    route: "/dil-okullari",
    children: [
      { label: "Tüm Dil Okulları", href: "#destinasyonlar", route: "/dil-okullari" },
      { label: "Kanada", href: "#destinasyonlar", route: "/dil-okullari/kanada" },
      { label: "İngiltere", href: "#destinasyonlar", route: "/dil-okullari/ingiltere" },
      { label: "İrlanda", href: "#destinasyonlar", route: "/dil-okullari/irlanda" },
      { label: "Avustralya", href: "#destinasyonlar", route: "/dil-okullari/avustralya" },
      { label: "Malta", href: "#destinasyonlar", route: "/dil-okullari/malta" },
      { label: "ABD", href: "#destinasyonlar", route: "/dil-okullari/abd" },
    ],
  },
  {
    label: "Hizmetlerimiz",
    href: "#hizmetler",
    route: "/hizmetlerimiz",
    children: [
      { label: "Turistik Vize Hizmetleri", href: "#danismanlik", route: "/turistik-vize-hizmetleri" },
      { label: "İngilizce Eğitimi", href: "#hizmetler", route: "/ingilizce-egitimi" },
    ],
  },
  {
    label: "İngilizce Eğitimi",
    href: "#hizmetler",
    route: "/ingilizce-egitimi",
    children: [
      { label: "Genel İngilizce", href: "#hizmetler", route: "/ingilizce-egitimi/genel-ingilizce" },
      { label: "IELTS", href: "#deneyim", route: "/ingilizce-egitimi/ielts" },
      { label: "TOEFL", href: "#deneyim", route: "/ingilizce-egitimi/toefl" },
    ],
  },
];

export const rightNavigation: ReadonlyArray<NavigationItem> = [
  { label: "Çocuk İngilizcesi", href: "#hizmetler", route: "/cocuk-ingilizcesi" },
  { label: "İletişim", href: "#danismanlik", route: "/iletisim" },
  { label: "Kadromuz", href: "#deneyim", route: "/kadromuz" },
  { label: "Basında Biz", href: "#deneyim", route: "/basinda-biz" },
];

export const mainNavigation: ReadonlyArray<NavigationItem> = [
  ...leftNavigation,
  ...rightNavigation,
];
