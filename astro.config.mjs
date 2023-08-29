import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      projectId: "i4q9xm4z",
      dataset: "production",
      useCdn: true,
    }),
  ],
});
