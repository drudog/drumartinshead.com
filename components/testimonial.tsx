type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
};

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <figure className="border-l-2 border-[color:var(--color-accent)] pl-6 py-2">
      <blockquote className="font-display text-xl sm:text-2xl leading-relaxed text-[color:var(--color-foreground)]">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-sm text-[color:var(--color-muted)]">
        <span className="font-medium text-[color:var(--color-foreground)]">{author}</span>
        {", "}
        {role}
      </figcaption>
    </figure>
  );
}
