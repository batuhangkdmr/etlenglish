import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { statistics } from "@/data/home";

export function StatsSection() {
  return (
    <section aria-labelledby="statistics-title" className="bg-brand-navy-dark pb-20 pt-12 text-white sm:pb-28 sm:pt-16">
      <Container>
        <Reveal className="flex flex-col gap-4 border-b border-white/10 pb-9 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-extrabold tracking-[0.2em] text-brand-accent uppercase">Sayılarla ETL</p>
            <h2 id="statistics-title" className="mt-3 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
              Güven, deneyimle büyür.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/72">Uluslararası eğitim yolculuklarında yıllara yayılan danışmanlık deneyimi.</p>
        </Reveal>

        <dl className="grid grid-cols-2 xl:grid-cols-4">
          {statistics.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.07}
              className="border-b border-white/10 py-9 even:pl-6 sm:py-12 xl:border-r xl:border-b-0 xl:px-6 xl:first:pl-0 xl:last:border-r-0 2xl:px-8"
            >
              <dd className="text-[clamp(2.25rem,4vw,4rem)] leading-none font-extrabold tracking-[-0.065em] text-white">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-3 text-xs font-bold tracking-[0.08em] text-white/70 uppercase sm:text-sm">{stat.label}</dt>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
