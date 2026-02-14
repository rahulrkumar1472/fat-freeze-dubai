import Image from "next/image";
import Link from "next/link";
import { BeforeAfterGallery } from "@/components/sections/BeforeAfterGallery";
import { ReviewsStrip } from "@/components/sections/ReviewsStrip";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { JsonLd } from "@/components/shared/JsonLd";
import { buildPageMetadata, faqSchema } from "@/lib/seo";
import {
  FAT_FREEZING_CLUSTER_LINKS,
  LOCATION_CLUSTER_LINKS,
  homepageReviews,
} from "@/lib/content";
import { ASSETS_MAP } from "@/lib/assets-map";
import {
  BRAND,
  OFFERS,
  TRUST_BADGES,
  CONTACT,
  SERVICE_LIST_FROM_CURRENT_SITE,
} from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: "Fat Freezing Dubai | Fat Freeze & Cryolipolysis Specialist",
  description:
    "Dubai's most affordable doctor-led fat freezing centre in Jumeirah 1. Cryolipolysis packages from AED 489 with no-downtime focused plans.",
  path: "/",
});

const homepageFaqs = [
  {
    question: "Is fat freezing in Dubai safe?",
    answer:
      "When clinically screened and protocol-led, fat freezing is a non-surgical treatment with manageable temporary side effects in most suitable patients.",
  },
  {
    question: "Do fat freeze and cryolipolysis mean the same treatment?",
    answer:
      "Yes. Fat freeze, fat freezing, and cryolipolysis are interchangeable names for the same core treatment category.",
  },
  {
    question: "How much does fat freezing cost in Dubai?",
    answer:
      "Packages start from AED 489. Final pricing depends on body area, session plan, and consultation findings.",
  },
  {
    question: "Where is your clinic located?",
    answer:
      "We are based in Jumeirah 1 at Jumeira St, Dubai, and serve clients from all major Dubai areas.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homepageFaqs)} />

      <section className="hero-section container">
        <div className="hero-card">
          <div className="hero-copy">
            <p className="eyebrow">Fat Freezing in Dubai</p>
            <h1>
              Fat Freezing, Fat Freeze, and Cryolipolysis <br />
              <span style={{ color: "var(--brand-dark)" }}>One Specialist Clinic.</span>
            </h1>
            <p>
              {BRAND.tagline} Our focus is non-surgical fat reduction with consultation-led planning,
              realistic timelines, no downtime for most suitable clients, and strong follow-up.
            </p>
            <div className="hero-trust">
              {TRUST_BADGES.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
            <div className="hero-actions">
              <Link href="/book" className="btn btn-primary">
                Book your appointment
              </Link>
              <a href={CONTACT.whatsappHref} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <a href={CONTACT.phoneHref} className="btn btn-secondary">
                Call {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="hero-media">
            <Image
              src={ASSETS_MAP.hero.src}
              alt={ASSETS_MAP.hero.alt}
              fill
              priority
              sizes="(max-width: 980px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container trust-strip">
          <span>Doctor-led</span>
          <span>Non-invasive</span>
          <span>No downtime</span>
          <span>Price match</span>
        </div>
      </section>

      <section className="section">
        <div className="container surface-panel">
          <p className="eyebrow">Limited Offer Window</p>
          <h2>Packages from AED {OFFERS.startsFromAed}</h2>
          <p style={{ marginTop: "0.45rem" }}>
            Reserve now and our team confirms your final medical plan after consultation.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <CountdownTimer targetISO={OFFERS.countdownTargetISO} />
          </div>
          <p className="disclaimer" style={{ color: "var(--text-soft)" }}>
            {OFFERS.priceDisclaimer}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Why Clients Convert</p>
          <h2>High-Trust Structure, Not Hype</h2>
          <div className="cards-grid four" style={{ marginTop: "0.9rem" }}>
            <article className="metric-card">
              <strong>63+</strong>
              <p>review signals from Dubai patient feedback snapshots.</p>
            </article>
            <article className="metric-card">
              <strong>Doctor-led</strong>
              <p>consultation-first planning and suitability checks.</p>
            </article>
            <article className="metric-card">
              <strong>No downtime</strong>
              <p>for most suitable clients after cryolipolysis sessions.</p>
            </article>
            <article className="metric-card">
              <strong>AED {OFFERS.startsFromAed}</strong>
              <p>entry package positioning with transparent disclaimers.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Booking Funnel</p>
          <h2>How Booking Works</h2>
          <div className="steps-grid" style={{ marginTop: "0.9rem" }}>
            {[
              "Choose treatment",
              "Select area and package",
              "Share preferred date/time",
              "Submit contact details",
              "Receive confirmation",
            ].map((step, index) => (
              <article className="step-card" key={step}>
                <span className="step-number">{index + 1}</span>
                <h3 style={{ fontSize: "1.04rem" }}>{step}</h3>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "1rem" }}>
            <Link href="/book" className="btn btn-primary">
              Start Booking
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Before & After</p>
          <h2>Body Area Result Gallery</h2>
          <p style={{ marginTop: "0.5rem" }}>
            Examples shown by area type to support expectation setting. Individual outcomes vary.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <BeforeAfterGallery />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Real Feedback</p>
          <h2>Patient Experience in Dubai</h2>
          <div style={{ marginTop: "1rem" }}>
            <ReviewsStrip reviews={homepageReviews} />
          </div>
          <div style={{ marginTop: "0.9rem" }}>
            <Link href="/reviews" className="btn btn-secondary">
              View All Reviews
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container surface-panel">
          <p className="eyebrow">Educational Comparison</p>
          <h2>Fat Freezing vs CoolSculpting (Brand)</h2>
          <p style={{ marginTop: "0.6rem" }}>
            We do not claim CoolSculpting brand service. We provide cryolipolysis fat freezing and use
            transparent clinical comparison language.
          </p>
          <div className="compare-table-wrap" style={{ marginTop: "1rem" }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Topic</th>
                  <th>Fat Freezing (Cryolipolysis)</th>
                  <th>CoolSculpting Term</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Category</td>
                  <td>Non-surgical cryolipolysis treatment class</td>
                  <td>Brand term inside same treatment category</td>
                </tr>
                <tr>
                  <td>Consultation priority</td>
                  <td>Suitability, protocol, realistic planning</td>
                  <td>Same medical suitability principles apply</td>
                </tr>
                <tr>
                  <td>Our positioning</td>
                  <td>Doctor-led cryolipolysis specialist centre</td>
                  <td>Educational comparison only</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: "0.9rem" }}>
            <Link href="/coolsculpting-vs-cryolipolysis" className="btn btn-secondary">
              Full Comparison Page
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Topical Authority Hub</p>
          <h2>Fat Freezing Knowledge Cluster</h2>
          <div className="cluster-links" style={{ marginTop: "0.9rem" }}>
            {FAT_FREEZING_CLUSTER_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Dubai Local Intent</p>
          <h2>Areas We Serve from Jumeirah 1 Clinic</h2>
          <div className="cluster-links" style={{ marginTop: "0.9rem" }}>
            {LOCATION_CLUSTER_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container surface-panel">
          <p className="eyebrow">Secondary Services</p>
          <h2>Body Contouring Support Cluster</h2>
          <p style={{ marginTop: "0.55rem" }}>
            Supporting services from the current clinic offering are included below, while fat freezing remains
            the hero treatment.
          </p>
          <div className="cards-grid three" style={{ marginTop: "0.9rem" }}>
            {SERVICE_LIST_FROM_CURRENT_SITE.slice(1, 9).map((service) => (
              <article key={service} className="metric-card">
                <strong style={{ fontSize: "1.05rem" }}>{service}</strong>
                <p>Available as consultation-led supportive treatment.</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "0.9rem" }}>
            <Link href="/body-contouring" className="btn btn-secondary">
              Explore Body Contouring Hub
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container surface-panel">
          <p className="eyebrow">Quick Answers</p>
          <h2>Homepage FAQs</h2>
          <div className="faq-list" style={{ marginTop: "1rem" }}>
            {homepageFaqs.map((faq) => (
              <article key={faq.question} className="faq-item open">
                <div className="faq-question">
                  <span>{faq.question}</span>
                </div>
                <p className="faq-answer">{faq.answer}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "0.9rem" }}>
            <Link href="/fat-freezing-faq" className="btn btn-secondary">
              Full FAQ Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
