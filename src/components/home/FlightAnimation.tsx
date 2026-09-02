export function FlightAnimation() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
      <div className="hero-flight-mover absolute top-0 left-0 h-[clamp(70px,8vw,110px)] w-[clamp(290px,32vw,520px)]">
        <div className="relative size-full">
        <div className="hero-flight-banner absolute top-1/2 left-0 h-[clamp(35px,4vw,65px)] w-[clamp(150px,20vw,300px)] -translate-y-1/2 overflow-hidden rounded-[0.25rem_0.8rem_0.8rem_0.25rem] border border-brand-navy/10 bg-linear-to-b from-white via-brand-mist to-white shadow-[0_10px_25px_-16px_rgba(3,47,79,0.55)]">
          <span className="relative z-10 flex h-full items-center justify-center gap-1.5 px-2 text-[10px] font-extrabold tracking-[0.1em] text-brand-navy uppercase sm:text-base">
            <strong>ETL</strong><em className="not-italic text-brand-accent">English</em>
          </span>
        </div>

        <svg aria-hidden="true" viewBox="0 0 100 80" preserveAspectRatio="none" className="absolute top-1/2 left-[57%] z-10 h-14 w-[18%] -translate-y-1/2 overflow-visible text-brand-navy/40 sm:h-20">
          <path d="M0 22C28 14 54 16 100 34M0 58C30 65 60 61 100 46" fill="none" stroke="currentColor" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
        </svg>

        <div className="absolute top-1/2 right-0 z-20 w-[clamp(100px,11vw,230px)] -translate-y-1/2 rotate-[-11deg]">
          {/* Existing transparent aircraft asset, kept as a single decorative plane instance. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://pngimg.com/uploads/plane/plane_PNG5253.png" alt="" className="hero-aircraft block h-auto w-full object-contain" />
        </div>
        </div>
      </div>
    </div>
  );
}
