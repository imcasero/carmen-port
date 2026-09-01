/** Shape produced by importing an image with the `?opt` query (see vite.config.ts). */
export type PictureSource = {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
};
