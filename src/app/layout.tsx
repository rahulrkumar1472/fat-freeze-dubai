import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { JsonLd } from "@/components/shared/JsonLd";
import { localBusinessSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-config";

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fat Freezing Dubai | Doctor-Led Clinic in Jumeirah 1",
    template: "%s | Fat Freezing Dubai",
  },
  description:
    "Doctor-led fat freezing in Dubai at our Jumeirah 1 clinic. Consultation-led, non-surgical body contouring with transparent package guidance.",
  applicationName: "Fat Freezing Dubai",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Fat Freezing Dubai",
    description:
      "Doctor-led fat freezing in Dubai with consultation-first planning and premium clinic care.",
    url: SITE_URL,
    siteName: "Fat Freezing Dubai",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fat Freezing Dubai",
    description:
      "Premium doctor-led fat freezing and cryolipolysis consultations in Jumeirah 1, Dubai.",
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
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
