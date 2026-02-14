import type { Metadata } from "next";
import {
  BRAND,
  BRAND_LOGO,
  CLINIC,
  CONTACT,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/site-config";
import type { FAQItem } from "@/lib/content";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  canonicalPath,
}: {
  title: string;
  description: string;
  path: string;
  canonicalPath?: string;
}): Metadata {
  const canonical = absoluteUrl(canonicalPath ?? path);
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND.name,
      locale: "en_AE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; item: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

export function faqSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function localBusinessSchema() {
  const openingHoursMap: Record<string, string> = {
    Monday: "https://schema.org/Monday",
    Tuesday: "https://schema.org/Tuesday",
    Wednesday: "https://schema.org/Wednesday",
    Thursday: "https://schema.org/Thursday",
    Friday: "https://schema.org/Friday",
    Saturday: "https://schema.org/Saturday",
    Sunday: "https://schema.org/Sunday",
  };

  const openingHoursSpecification = CLINIC.openingHours
    .map((entry) => {
      const [day, hours] = entry.split(" ");
      if (!day || !hours) return null;

      const [opens, closes] = hours.split("-");
      if (!opens || !closes) return null;

      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: openingHoursMap[day] ?? `https://schema.org/${day}`,
        opens,
        closes,
      };
    })
    .filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${SITE_URL}/#medicalbusiness`,
        name: BRAND.legalName,
        image: `${SITE_URL}${BRAND_LOGO.src}`,
        url: SITE_URL,
        telephone: CONTACT.phoneDisplay,
        email: CONTACT.email,
        priceRange: "AED",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jumeira St",
          addressLocality: "Jumeirah 1",
          addressRegion: "Dubai",
          addressCountry: "AE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: CLINIC.coordinates.lat,
          longitude: CLINIC.coordinates.lng,
        },
        openingHoursSpecification,
        sameAs: Object.values(SOCIAL_LINKS),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND.name,
        inLanguage: "en",
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}
