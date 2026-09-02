export function FooterWorldMap() {
  return (
    <div aria-hidden="true" className="footer-world-map pointer-events-none absolute right-[-62%] top-16 block w-[200%] max-w-none text-white opacity-[0.48] min-[768px]:right-[-20%] min-[768px]:top-14 min-[768px]:w-[92%] min-[768px]:opacity-70 min-[1280px]:right-[-8%] min-[1280px]:top-10 min-[1280px]:w-[64%] min-[1280px]:max-w-[980px] min-[1280px]:opacity-100">
      <svg viewBox="0 0 1000 520" className="h-auto w-full overflow-visible" fill="currentColor">
        <g fill="none" stroke="currentColor" strokeWidth="0.9" className="footer-map-land opacity-[0.075]">
          <path d="M54 150 83 117l54-8 36 20 49-11 28 24-17 35-42 11-21 37-41-3-24-28-39-10-26-25Z" />
          <path d="m245 207 34-16 27 16 10 35-18 35 18 54-27 49-21-12 4-45-24-47 16-35-19-23Z" />
          <path d="m406 136 30-28 45-7 26 16 47-4 26 28-17 24-46 4-18 28-39-2-21-25-31-5-15-19Z" />
          <path d="m495 205 30-24 37 6 26 28-8 30-37 13-22 34-28-18 9-33-18-18 11-18Z" />
          <path d="m598 178 52-19 70 13 43 29 55-5 62 39-11 32-52 10-45 31-50-15-42 18-45-30-18-38-39-17 12-29 39-5 21-14Z" />
          <path d="m695 340 42-13 65 19 40 40-25 36-54-5-42-27-39-8-19-26 32-17Z" />
        </g>
        <g fill="none" stroke="currentColor" strokeDasharray="1 9" strokeLinecap="round" strokeWidth="0.8" className="opacity-[0.045]">
          <path d="M100 105C330 70 670 70 900 105" /><path d="M54 260C300 220 700 220 946 260" /><path d="M120 395C350 355 650 355 880 395" />
          <path d="M290 45C250 170 250 350 290 475" /><path d="M520 25C495 170 495 350 520 495" /><path d="M745 45C785 170 785 350 745 475" />
        </g>
        <g fill="none" stroke="currentColor" strokeDasharray="4 8" strokeWidth="1.2" className="footer-flight-routes opacity-25">
          <path d="M559 215C530 166 500 142 467 151" />
          <path d="M559 215C465 150 342 149 211 181" />
          <path className="footer-flight-route-au" d="M559 215C652 254 728 303 778 363" />
        </g>
        <g className="fill-brand-accent">
          <MapMarker cx={211} cy={181} label="CA" delay="0s" />
          <MapMarker cx={467} cy={151} label="UK" delay="0.8s" />
          <MapMarker cx={455} cy={164} label="IE" delay="1.6s" />
          <MapMarker cx={535} cy={255} label="MT" delay="2.4s" />
          <MapMarker cx={245} cy={237} label="US" delay="3.2s" />
          <MapMarker cx={778} cy={363} label="AU" delay="4s" />
        </g>
      </svg>
    </div>
  );
}

function MapMarker({ cx, cy, label, delay }: { cx: number; cy: number; label: string; delay: string }) {
  return (
    <g>
      <g className={`footer-map-marker footer-map-marker-${label}`}>
        <circle cx={cx} cy={cy} r="14" fill="none" stroke="currentColor" strokeWidth="1" className="footer-map-pulse" style={{ animationDelay: delay }} />
        <circle cx={cx} cy={cy} r="4" />
        <text x={cx + 11} y={cy - 10} fill="currentColor" fontSize="10" fontWeight="700" letterSpacing="1" opacity="0.55" className="footer-map-label">{label}</text>
      </g>
    </g>
  );
}
