/// <reference types="vite/client" />

interface ImagetoolsPicture {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
}

declare module "*?opt" {
  const value: ImagetoolsPicture;
  export default value;
}

declare module "*?opt-a" {
  const value: ImagetoolsPicture;
  export default value;
}
