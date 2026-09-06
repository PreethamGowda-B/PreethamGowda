import { MetadataRoute } from "next";
import { RESUME_DATA } from "@/lib/resume-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${RESUME_DATA.links.portfolio}/sitemap.xml`,
  };
}
