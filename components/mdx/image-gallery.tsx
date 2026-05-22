import { LightboxImage } from "@/components/lightbox-image";

type Item = { src: string; alt: string; caption?: string };

export function ImageGallery({
  items,
  columns = 2,
}: {
  items: Item[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={`my-10 grid gap-4 ${columns === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2"}`}
    >
      {items.map((item) => (
        <figure key={item.src} className="m-0">
          <LightboxImage
            src={item.src}
            alt={item.alt}
            width={1200}
            height={800}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="rounded-lg w-full h-auto"
            caption={item.caption}
          />
          {item.caption && (
            <figcaption className="mt-2 text-xs text-[color:var(--color-muted)]">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
