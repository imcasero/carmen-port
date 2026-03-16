import { useRef, useEffect, useState } from "react";

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: "none" | "metadata" | "auto";
}

export const OptimizedVideo = ({
  src,
  poster,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = "metadata",
}: OptimizedVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Pausa si sale del viewport para ahorrar recursos
          } else {
            setIsInView(false);
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Play cuando está en view
  useEffect(() => {
    if (isInView && autoPlay && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Silenciosamente fallar si no puede reproducir (ej: navegador bloquea autoplay)
      });
    }
  }, [isInView, autoPlay]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={preload}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    >
      <source src={src} type="video/mp4" />
      Tu navegador no soporta videos HTML5.
    </video>
  );
};
