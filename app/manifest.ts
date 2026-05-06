import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Daily",
    short_name: "Daily",
    description: "Una app diaria para Fran y Lucca",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0a1929",
    theme_color: "#0a1929",
    icons: [
      {
        src: "/apple-icon",
        type: "image/png",
        sizes: "180x180",
        purpose: "any",
      },
    ],
  };
}
