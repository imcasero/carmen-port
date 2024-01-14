import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  renderers: ["@astrojs/renderer-react"] // Agrega esta línea para habilitar el renderizador de React
});