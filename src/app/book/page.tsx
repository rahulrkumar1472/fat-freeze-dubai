import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BookingFunnel } from "@/components/sections/BookingFunnel";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbSchema, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Book Fat Freezing Consultation in Dubai",
  description:
    "Start your doctor-led booking flow for fat freezing, cryolipolysis, and supportive body contouring treatments in Dubai.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <JsonLd
        data={
          breadcrumbSchema([
            { name: "Home", item: "https://fatfreezing.ae/" },
            { name: "Book", item: "https://fatfreezing.ae/book" },
          ])
        }
      />
      <section className="page-hero">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Book" }]} />
        <div className="container">
          <p className="eyebrow">Online Booking</p>
          <h1>Book Consultation</h1>
          <p>
            Complete the guided booking form and our team confirms your appointment shortly.
          </p>
        </div>
      </section>
      <BookingFunnel />
    </>
  );
}
