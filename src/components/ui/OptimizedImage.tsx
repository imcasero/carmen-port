import { useState } from "react";
import type { PictureSource } from "@/lib/image";

interface OptimizedImageProps {
  /** A plain URL string, or the object produced by importing an image with `?opt`. */
  src: PictureSource | string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: "lazy" | "eager";
  /** Matches the CSS-rendered width so the browser can pick the right srcset entry. */
  sizes?: string;
}

const TRANSPARENT_PX =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E";

export const OptimizedImage = ({
  src,
  alt,
  className,
  style,
  loading = "lazy",
  sizes = "(max-width: 768px) 40vw, 340px",
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const cls = `${className ?? ""} ${isLoaded ? "" : "opacity-0"} transition-opacity duration-300`;

  const imgProps = {
    alt,
    className: cls,
    style,
    loading,
    decoding: "async" as const,
    sizes,
    onLoad: () => setIsLoaded(true),
  };

  if (typeof src === "string") {
    return <img src={src} {...imgProps} />;
  }

  return (
    <picture>
      {Object.entries(src.sources).map(([format, srcSet]) => (
        <source key={format} type={`image/${format}`} srcSet={srcSet} sizes={sizes} />
      ))}
      <img src={src.img.src || TRANSPARENT_PX} width={src.img.w} height={src.img.h} {...imgProps} />
    </picture>
  );
};
