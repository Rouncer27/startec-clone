import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://startec.netlify.app/",
  integrations: [react(), sitemap()],
  image: {
    domains: ["startec.swbdatabases2.ca/"],
    remotePatterns: [{ protocol: "https" }],
  },
});
