import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

const baseUrl = "https://digitup.cl";

const staticRoutes = [
  { path: "", priority: 1 },
  { path: "/soluciones", priority: 0.95 },
  { path: "/problemas", priority: 0.85 },
  { path: "/valor-agregado", priority: 0.75 },
  { path: "/tecnologias", priority: 0.7 },
  { path: "/contacto", priority: 0.8 },
  { path: "/antofagasta", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...services.map((service) => ({
      url: `${baseUrl}/soluciones/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
