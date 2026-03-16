import { useEffect } from "react";

/**
 * Hook para precargar assets críticos
 * Usa requestIdleCallback para no bloquear el main thread
 */
export const usePreloadAssets = (
  assets: string[],
  priority: "high" | "low" = "low"
) => {
  useEffect(() => {
    const preload = () => {
      assets.forEach((asset) => {
        if (asset.endsWith(".webp") || asset.endsWith(".jpg") || asset.endsWith(".png")) {
          const img = new Image();
          img.src = asset;
          img.decoding = "async";
        } else if (asset.endsWith(".mp4") || asset.endsWith(".webm")) {
          const link = document.createElement("link");
          link.rel = "preload";
          link.as = "video";
          link.href = asset;
          document.head.appendChild(link);
        }
      });
    };

    if (priority === "high") {
      preload();
    } else {
      // Precargar en background cuando el navegador está idle
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => preload());
      } else {
        setTimeout(preload, 2000);
      }
    }
  }, [assets, priority]);
};
