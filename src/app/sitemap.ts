import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

// Production domain.
const siteUrl = "https://arthavriksha.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about-us`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/mutual-funds`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/real-estate`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/insurance`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/loans`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/blog`, changeFrequency: "weekly", priority: 0.7 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
