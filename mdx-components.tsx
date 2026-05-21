import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import { Callout } from "@/components/mdx/callout";
import { StatBlock, Stat } from "@/components/mdx/stat-block";
import { PullQuote } from "@/components/mdx/pull-quote";
import { ImageGallery } from "@/components/mdx/image-gallery";

const components: MDXComponents = {
  Callout,
  StatBlock,
  Stat,
  PullQuote,
  ImageGallery,
  img: (props) => (
    <Image
      sizes="(min-width: 1024px) 768px, 100vw"
      width={1600}
      height={900}
      className="rounded-lg my-8 w-full h-auto"
      {...(props as ImageProps)}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
