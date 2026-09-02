import { testimonials } from "@/data/home";

export function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <section aria-labelledby="testimonials-title">
      <h2 id="testimonials-title">Öğrenci Deneyimleri</h2>
      {testimonials.map((testimonial) => (
        <figure key={`${testimonial.name}-${testimonial.program}`}>
          <blockquote>{testimonial.quote}</blockquote>
          <figcaption>{testimonial.name}</figcaption>
        </figure>
      ))}
    </section>
  );
}
