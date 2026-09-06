import { MetadataRoute } from "next";
import { RESUME_DATA } from "@/lib/resume-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: RESUME_DATA.links.portfolio,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
