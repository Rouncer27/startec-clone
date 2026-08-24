import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://startec.ca/",
  integrations: [react()],
  // image: {
  //   domains: ["startec-clone.swbdatabases3.ca/"],
  //   remotePatterns: [{ protocol: "http" }],
  // },
});
