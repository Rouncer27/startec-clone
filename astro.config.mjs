import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://startec.netlify.app/",
  integrations: [react()],
  image: {
    domains: ["startec.swbdatabases2.ca/"],
    remotePatterns: [{ protocol: "https" }],
  },
});
