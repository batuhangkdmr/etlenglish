import { Check, MapPin } from "lucide-react";
import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-[620px] lg:mx-0 lg:justify-self-end">
      <div className="relative ml-auto aspect-[0.92] w-[88%] overflow-hidden rounded-[2.5rem_2.5rem_7rem_2.5rem] bg-brand-navy shadow-[0_34px_80px_-34px_rgba(3,47,79,0.55)] sm:w-[82%] lg:w-[86%]">
        <Image
          src="/images/hero-consultation.png"
          alt="Yurt dışı eğitim yolculuğu için pasaport ve seyahat planı"
          fill
          fetchPriority="high"
          sizes="(max-width: 1023px) 82vw, min(42vw, 540px)"
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-brand-navy/28 via-transparent to-transparent" />
      </div>

      <div aria-hidden="true" className="hero-london-card absolute -top-8 left-0 w-36 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-soft sm:w-44">
        <div className="relative aspect-[4/3]">
          <Image src="/images/hero-london.jpg" alt="" fill sizes="176px" className="object-cover" />
        </div>
        <div className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-brand-navy">
          <MapPin aria-hidden="true" className="size-3.5 text-brand-accent" /> Londra
        </div>
      </div>

      <div className="hero-advisor-card absolute right-0 -bottom-5 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-3.5 shadow-soft sm:right-2 sm:p-4">
        <span className="grid size-10 place-items-center rounded-xl bg-brand-accent/10 text-brand-accent">
          <Check aria-hidden="true" className="size-5" strokeWidth={2.5} />
        </span>
        <div>
          <p className="text-[10px] font-bold tracking-wider text-brand-ink/65 uppercase">Kişisel Yol Haritası</p>
          <p className="mt-0.5 text-sm font-extrabold text-brand-navy">Uzman danışman desteği</p>
        </div>
      </div>

    </div>
  );
}
