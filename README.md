# ETL English

Modern, responsive yurt dışı eğitim danışmanlığı web sitesi. ETL English; dil okulları, üniversite, yüksek lisans ve vize danışmanlığı hizmetlerini güven veren, global odaklı bir dijital deneyimle sunar.

## Proje Hakkında

ETL English ana sayfası, ziyaretçiyi ilk etkileşimden danışmanlık talebine kadar yönlendiren modern bir eğitim danışmanlığı deneyimi olarak tasarlandı.

Öne çıkan bölümler:

- Responsive desktop ve mobil navigation
- Mobilde soldan açılan, kompakt drawer menü
- Hero alanında premium flight animation ve ETL English banner
- Ülke ve dil okulu destinasyonları
- Üniversite ve yüksek lisans içerikleri
- 3 aşamalı ücretsiz danışmanlık formu
- Global harita ve destinasyon marker’ları içeren modern footer
- WhatsApp iletişim butonu ve back-to-top kontrolü
- SEO metadata ve Organization JSON-LD yapılandırması

## Teknolojiler

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Motion](https://motion.dev/)
- [Lucide React](https://lucide.dev/)

## Kurulum

Node.js 20+ ve npm gereklidir.

```bash
git clone https://github.com/batuhangkdmr/etlenglish.git
cd etlenglish
npm install
```

## Geliştirme

```bash
npm run dev
```

Uygulama [http://localhost:3000](http://localhost:3000) adresinde çalışır.

## Komutlar

```bash
npm run dev      # Geliştirme sunucusunu başlatır
npm run lint     # ESLint kontrollerini çalıştırır
npm run build    # Production build oluşturur
npm run start    # Production sunucusunu başlatır
```

## Proje Yapısı

```text
src/
├── app/                     # App Router, layout ve global stiller
├── components/
│   ├── home/                # Ana sayfa sectionları
│   ├── layout/              # Header, footer ve layout bileşenleri
│   └── shared/              # Tekrar kullanılabilir UI bileşenleri
├── data/                    # Navigation, site ve ana sayfa verileri
├── hooks/                   # Custom React hook'ları
├── lib/                     # Yardımcı fonksiyonlar
└── types/                   # TypeScript tipleri
```

## Tasarım Yaklaşımı

Tasarım sistemi ETL English’in lacivert, mavi ve pembe marka renkleri üzerine kuruludur. Bileşenler mobil öncelikli responsive yaklaşım, erişilebilir focus durumları, düşük yoğunluklu motion efektleri ve içerik odaklı bir tipografi sistemiyle hazırlanmıştır.

Footer’da kullanılan dünya haritası ve destinasyon rotaları dekoratif SVG olarak çalışır. Harita interactive değildir ve navigation işlevi taşımaz.

## Form Notu

Ücretsiz danışmanlık formu üç adımdan oluşur ve istemci tarafında alan doğrulaması içerir. Form gönderimi şu an başarı durumunu frontend üzerinde gösterir; gerçek CRM, e-posta veya API entegrasyonu ayrıca bağlanabilir.

## Kalite Kontrolleri

Production öncesi şu kontroller çalıştırılmalıdır:

```bash
npm run lint
npm run build
```

## Lisans

Bu proje ETL English için hazırlanmıştır. İçerik, marka varlıkları ve görseller izinsiz kullanılamaz.
