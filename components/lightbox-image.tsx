"use client";
import { useState, useEffect } from "react";
import Image, { type ImageProps } from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Props = ImageProps & { caption?: string };

export function LightboxImage({ caption, className, ...imgProps }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Image
        {...imgProps}
        className={`cursor-zoom-in ${className ?? ""}`}
        onClick={() => setOpen(true)}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8 pb-8"
            onClick={() => setOpen(false)}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgProps.src as string}
                alt={imgProps.alt as string}
                className="min-h-0 max-w-full object-contain rounded-lg shadow-2xl flex-1"
              />
              {caption && (
                <p className="shrink-0 text-sm text-white/60 text-center">{caption}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
