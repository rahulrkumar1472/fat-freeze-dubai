import Link from "next/link";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import type { PageData } from "@/lib/content";
import { OFFERS } from "@/lib/site-config";
import { CountdownTimer } from "@/components/ui/CountdownTimer";

type PageTemplateProps = {
  page: PageData;
};

export function PageTemplate({ page }: PageTemplateProps) {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: page.h1 },
  ];

  const breadcrumbJson = breadcrumbSchema([
    { name: "Home", item: "https://fatfreezing.ae/" },
    { name: page.h1, item: `https://fatfreezing.ae/${page.slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbJson} />
      {page.faqs.length > 0 && <JsonLd data={faqSchema(page.faqs)} />}

      <section className="page-hero">
        <Breadcrumbs items={crumbs} />
        <div className="container">
          <p className="eyebrow">Dubai • Jumeirah 1 Clinic</p>
          <h1>{page.h1}</h1>
          <p>{page.subheading}</p>
          <div className="hero-actions">
            <Link href="/book" className="btn btn-primary">
              Book your appointment
            </Link>
            <Link href="/prices" className="btn btn-secondary">
              Packages from AED {OFFERS.startsFromAed}
            </Link>
          </div>
        </div>
      </section>

      <section className="container content-sections">
        {page.sections.map((section) => (
          <article className="content-card" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </section>

      {(page.bestFor || page.notFor) && (
        <section className="container compare-grid-wrap">
          <div className="compare-grid">
            <article>
              <h2>Best For</h2>
              <ul>
                {(page.bestFor ?? []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <h2>Not For</h2>
              <ul>
                {(page.notFor ?? []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="cross-sell-note">
            <h3>If you want non-invasive fat reduction, Fat Freezing is our speciality.</h3>
            <p>
              Use a doctor-led consultation to compare options and avoid picking the wrong protocol.
            </p>
            <div className="hero-actions">
              <Link href="/fat-freezing" className="btn btn-secondary">
                Explore Fat Freezing
              </Link>
              <Link href="/book" className="btn btn-primary">
                Book Consultation
              </Link>
            </div>
          </div>
        </section>
      )}

      {page.faqs.length > 0 && (
        <section className="container faq-section">
          <h2>Frequently Asked Questions</h2>
          <FAQAccordion faqs={page.faqs} />
        </section>
      )}

      <section className="container internal-links-section">
        <h2>Continue Reading</h2>
        <div className="related-links-grid">
          {page.relatedLinks.map((link) => (
            <Link key={link.href} href={link.href} className="related-link-card">
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="countdown-section">
        <div className="container">
          <h2>{OFFERS.headline}</h2>
          <p>Secure your consultation while current package rates are active.</p>
          <CountdownTimer targetISO={OFFERS.countdownTargetISO} />
          <p className="disclaimer">{OFFERS.priceDisclaimer}</p>
        </div>
      </section>
    </>
  );
}
