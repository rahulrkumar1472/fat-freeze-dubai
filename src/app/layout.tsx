import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { JsonLd } from "@/components/shared/JsonLd";
import { localBusinessSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-config";
import { UrgencyBar } from "@/components/sections/UrgencyBar";

const bodyFont = localFont({
  src: [
    {
      path: "../../public/media/imported/fonts_montserrat-v31-latin-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/media/imported/fonts_montserrat-v31-latin-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/media/imported/fonts_montserrat-v31-latin-800.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fat Freezing Dubai | Doctor-Led Cryolipolysis in Jumeirah 1",
    template: "%s | Fat Freezing Dubai",
  },
  description:
    "Premium doctor-led fat freezing in Dubai. Cryolipolysis packages from AED 489 with transparent consultation-led planning.",
  applicationName: "Fat Freezing Dubai",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Fat Freezing Dubai",
    description:
      "Doctor-led fat freezing and body contouring in Jumeirah 1, Dubai. Packages from AED 489.",
    url: SITE_URL,
    siteName: "Fat Freezing Dubai",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fat Freezing Dubai",
    description:
      "Doctor-led cryolipolysis (fat freezing / fat freeze) in Dubai with consultation-first pricing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <JsonLd data={localBusinessSchema()} />
        <UrgencyBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
