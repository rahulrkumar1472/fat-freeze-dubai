import type { MetadataRoute } from "next";
import { ALL_PAGE_DATA } from "@/lib/content";
import { SITE_URL } from "@/lib/site-config";

function routePriority(route: string): number {
  if (route === "/") return 1;
  if (route === "/book" || route === "/fat-freezing" || route === "/prices") return 0.95;
  if (
    route === "/how-it-works" ||
    route === "/results-timeline" ||
    route === "/side-effects-safety" ||
    route === "/coolsculpting-vs-cryolipolysis"
  ) {
    return 0.9;
  }
  if (route.startsWith("/fat-freezing-") && route.includes("dubai")) return 0.85;
  if (route.startsWith("/fat-freezing-")) return 0.9;
  if (route === "/cryolipolysis" || route === "/fat-freeze") return 0.9;
  if (
    route === "/aqualyx" ||
    route === "/ultrasound-cavitation" ||
    route === "/radiofrequency-skin-tightening"
  ) {
    return 0.8;
  }

  return 0.75;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/book"];
  const dynamicRoutes = ALL_PAGE_DATA.filter((page) => !page.canonicalSlug).map(
    (page) => `/${page.slug}`,
  );
  const routes = Array.from(new Set([...staticRoutes, ...dynamicRoutes]));
  const lastModified = new Date();

  return routes.map((route) => ({
    url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "/" || route === "/book" ? "daily" : "weekly",
    priority: routePriority(route),
  }));
}
