import { useState, useRef, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: "lazy" | "eager";
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  style,
  loading = "lazy",
}: OptimizedImageProps) => {
  const [imageSrc, setImageSrc] = useState<string | null>(loading === "eager" ? src : null);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (loading === "eager") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "50px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, loading]);

  return (
    <img
      ref={imgRef}
      src={imageSrc || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"}
      alt={alt}
      className={`${className} ${isLoaded ? "" : "opacity-0"} transition-opacity duration-300`}
      style={style}
      onLoad={() => setIsLoaded(true)}
      decoding="async"
    />
  );
};
