import type { MDXComponents } from "mdx/types";
import React from "react";
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
  h2: ({ children, id }: { children?: React.ReactNode; id?: string }) => (
    <h2
      id={id}
      className="font-display font-semibold tracking-tight scroll-mt-24 text-3xl mt-16 mb-4"
    >
      <span className="block w-8 h-[3px] bg-[color:var(--color-accent)] mb-4 rounded-full" />
      {children}
    </h2>
  ),
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
