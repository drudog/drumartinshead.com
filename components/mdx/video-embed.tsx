export function VideoEmbed({ src, caption }: { src: string; caption?: string }) {
  return (
    <figure className="not-prose my-10">
      <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src={src}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-[color:var(--color-muted)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
