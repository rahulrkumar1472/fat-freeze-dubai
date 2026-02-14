import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbSchema, buildPageMetadata } from "@/lib/seo";
import { CONTACT } from "@/lib/site-config";

type BookingSuccessProps = {
  searchParams: Promise<{ ref?: string }>;
};

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Booking Confirmed | Fat Freezing Dubai",
    description:
      "Your booking request has been received. Use your reference ID for fast follow-up with our Dubai team.",
    path: "/book/success",
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default async function BookingSuccessPage({ searchParams }: BookingSuccessProps) {
  const { ref } = await searchParams;
  const reference = ref ? decodeURIComponent(ref) : "Pending";
  const whatsappMessage = encodeURIComponent(
    `Hi, I submitted a booking request. My reference is ${reference}. Please confirm my slot.`,
  );

  return (
    <>
      <JsonLd
        data={
          breadcrumbSchema([
            { name: "Home", item: "https://fatfreezing.ae/" },
            { name: "Book", item: "https://fatfreezing.ae/book" },
            { name: "Success", item: "https://fatfreezing.ae/book/success" },
          ])
        }
      />
      <section className="page-hero">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Book", href: "/book" },
            { label: "Success" },
          ]}
        />
        <div className="container">
          <p className="eyebrow">Booking Request Received</p>
          <h1>Thank You. We Will Confirm Shortly.</h1>
          <p>Your request has been sent to our Jumeirah 1 team.</p>
        </div>
      </section>

      <section className="container booking-confirm" style={{ marginTop: "0.8rem" }}>
        <h2>Booking Reference</h2>
        <p>
          Reference ID: <strong>{reference}</strong>
        </p>
        <p>Need instant follow-up? Send your reference to us on WhatsApp or call directly.</p>
        <div className="booking-actions">
          <a
            href={`${CONTACT.whatsappHref}?text=${whatsappMessage}`}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Confirmation
          </a>
          <a href={CONTACT.phoneHref} className="btn btn-secondary">
            Call Clinic
          </a>
          <Link href="/fat-freezing" className="btn btn-secondary">
            Back to Fat Freezing Hub
          </Link>
        </div>
      </section>
    </>
  );
}
