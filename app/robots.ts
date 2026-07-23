import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://digitup.cl/sitemap.xml",
    host: "https://digitup.cl",
  };
}
