import Image from "next/image";
import Link from "next/link";
import { ResultsGallery } from "@/components/sections/ResultsGallery";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Typewriter } from "@/components/ui/Typewriter";
import { buildPageMetadata } from "@/lib/seo";
import { ASSETS_MAP } from "@/lib/assets-map";
import { CLINIC, CONTACT, OFFERS } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: "Fat Freezing in Dubai | Doctor-Led Jumeirah Clinic",
  description:
    "Fat freezing in Dubai with doctor-led consultation in Jumeirah 1. Explore treatment areas, results preview, and book your consultation.",
  path: "/",
});

const areaTiles = [
  {
    title: "Stomach",
    href: "/fat-freezing-stomach",
    detail: "Lower abdominal contour planning for stubborn pockets.",
  },
  {
    title: "Love Handles",
    href: "/fat-freezing-love-handles",
    detail: "Flank-focused protocols for waistline refinement.",
  },
  {
    title: "Thighs",
    href: "/fat-freezing-thighs",
    detail: "Inner and outer thigh contour guidance.",
  },
  {
    title: "Arms",
    href: "/fat-freezing-arms",
    detail: "Upper-arm sculpting plans based on suitability.",
  },
  {
    title: "Chin",
    href: "/fat-freezing-chin",
    detail: "Submental profile support with staged review.",
  },
  {
    title: "Back",
    href: "/fat-freezing-back",
    detail: "Upper and lower back contour planning.",
  },
];

const primaryRouteTiles = [
  {
    title: "Fat Freezing",
    href: "/fat-freezing",
    detail: "Understand treatment suitability, timelines, and consultation-led planning.",
    image: ASSETS_MAP.hero.src,
    imageAlt: "Fat freezing consultation",
  },
  {
    title: "Results",
    href: "/results",
    detail: "Review curated before and after examples across key treatment areas.",
    image: ASSETS_MAP.introBanner.src,
    imageAlt: "Body contouring treatment room",
  },
  {
    title: "Prices & Packages",
    href: "/prices",
    detail: "See package guidance and what influences final treatment scope.",
    image: ASSETS_MAP.rf.src,
    imageAlt: "Clinic treatment equipment",
  },
  {
    title: "Book Consultation",
    href: "/book",
    detail: "Submit your preferred treatment and time in a guided booking flow.",
    image: ASSETS_MAP.teamPrimary.src,
    imageAlt: "Doctor-led consultation",
  },
];

const whyPoints = [
  "Targeted fat reduction for suitable candidates",
  "No downtime for most clients after treatment",
  "Consultation-led planning by an experienced team",
  "Transparent packages and clear aftercare guidance",
  "Clinic location in Jumeirah 1 with easy access across Dubai",
];

const secondaryTreatmentTiles = [
  {
    title: "Aqualyx",
    href: "/aqualyx",
    detail: "Targeted injectable support for selected areas after consultation.",
  },
  {
    title: "Lemon Bottle",
    href: "/lemon-bottle-fat-dissolving",
    detail: "Consultation-led fat-dissolving pathway for suitable candidates.",
  },
  {
    title: "Ultrasound Cavitation",
    href: "/ultrasound-cavitation",
    detail: "Non-invasive contour support used in selected treatment plans.",
  },
  {
    title: "RF Skin Tightening",
    href: "/radiofrequency-skin-tightening",
    detail: "Skin-tightening support where tone and texture are priorities.",
  },
  {
    title: "HIFEM Sculpting",
    href: "/hifem-sculpting",
    detail: "Muscle-focused contour enhancement as a complementary option.",
  },
  {
    title: "Cellulite Reduction",
    href: "/cellulite-reduction",
    detail: "Surface-texture improvement plans with realistic timelines.",
  },
];

const mapLink = "https://maps.google.com/?q=Jumeira+St+Jumeirah+1+Dubai";
const displayAddress = CLINIC.addressLine;

const openingWindow = CLINIC.openingHours[0]?.split(" ")[1]?.replace("-", " - ") ?? "By appointment";

export default function HomePage() {
  return (
    <>
      <Section className="editorial-hero" size="xl">
        <Container>
          <div className="editorial-hero-grid">
            <div className="editorial-hero-copy">
              <p className="eyebrow">Jumeirah 1, Dubai</p>
              <h1>Fat Freezing in Dubai, delivered with clinical precision.</h1>
              <Typewriter
                className="editorial-typewriter"
                phrases={[
                  "Refine stubborn pockets. Contour with precision.",
                  "Doctor-led cryolipolysis with realistic timelines.",
                  "Same-day treatment may be available if suitable.",
                  "A discreet clinic in Jumeirah 1 — easy access across Dubai.",
                ]}
              />
              <p className="editorial-lead">
                Doctor-led cryolipolysis fat freezing in Jumeirah 1. Consultation-led planning, realistic timelines,
                and non-surgical body contouring. Price match available.
              </p>

              <div className="editorial-hero-actions">
                <Button href="/book">Book Consultation</Button>
                <Button href={CONTACT.whatsappHref} variant="secondary" external>
                  WhatsApp
                </Button>
              </div>

              <div className="inline-contact-links" aria-label="Quick clinic contact links">
                <Link href="/fat-freezing">View Fat Freezing Treatment</Link>
                <a href={CONTACT.phoneHref}>Call</a>
              </div>
              <p className="hero-conversion-line">
                Free doctor consultation • Same-day treatment may be available if suitable
              </p>

              <p className="editorial-trust-line">Doctor-led • Non-invasive • No downtime • Price match</p>
            </div>

            <div className="editorial-hero-image">
              <Image
                src={ASSETS_MAP.hero.src}
                alt={ASSETS_MAP.hero.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section size="md" className="section-tight">
        <Container>
          <div className="section-heading">
            <p className="eyebrow">Primary Routes</p>
            <h2>Start Your Path in One Step</h2>
            <p>
              Choose where you want to go next: treatment detail, curated results, package guidance, or direct
              booking.
            </p>
          </div>

          <div className="editorial-route-grid">
            {primaryRouteTiles.map((tile) => (
              <article key={tile.href} className="editorial-route-tile">
                <div className="editorial-route-media">
                  <Image src={tile.image} alt={tile.imageAlt} fill sizes="(max-width: 920px) 100vw, 35vw" />
                </div>
                <div className="editorial-route-content">
                  <h3>{tile.title}</h3>
                  <p>{tile.detail}</p>
                  <Button href={tile.href} variant="link">
                    Open
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="fat-freezing-areas" size="md">
        <Container>
          <div className="section-heading">
            <p className="eyebrow">By Area</p>
            <h2>Targeted Fat Reduction by Area</h2>
            <p>Choose an area to view treatment guidance, expected timelines, and booking options.</p>
          </div>

          <div className="editorial-area-grid">
            {areaTiles.map((tile) => (
              <article key={tile.href} className="editorial-area-tile">
                <h3>{tile.title}</h3>
                <p>{tile.detail}</p>
                <Button href={tile.href} variant="link">
                  Learn more
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="results-preview" tone="soft" size="md">
        <Container>
          <div className="section-heading">
            <p className="eyebrow">Results Preview</p>
            <h2>Curated Before and After</h2>
            <p>Selected examples are presented in a refined preview format.</p>
          </div>

          <ResultsGallery />

          <div className="results-preview-cta">
            <Button href="/results" variant="link">
              View Full Results Gallery
            </Button>
          </div>
          <p className="results-compliance-line">Results vary. Suitability required.</p>
        </Container>
      </Section>

      <Section size="md">
        <Container>
          <div className="editorial-mid-cta">
            <p className="eyebrow">Consultation</p>
            <h2>Book a free doctor consultation</h2>
            <p>Consultation-led plan. Same-day treatment possible if suitable.</p>
            <div className="editorial-mid-cta-actions">
              <Button href="/book">Book Consultation</Button>
              <Button href={CONTACT.whatsappHref} variant="secondary" external>
                WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section size="md">
        <Container>
          <div className="editorial-why-grid">
            <div className="editorial-why-copy">
              <p className="eyebrow">Why Fat Freezing</p>
              <h2>Why Fat Freezing Works</h2>
              <p>
                We keep each treatment plan conservative and consultation-led, with clinically responsible expectation
                setting from day one.
              </p>
            </div>
            <ul className="editorial-feature-list">
              {whyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="soft" size="md" className="section-tight">
        <Container>
          <div className="editorial-education-block">
            <p className="eyebrow">Educational Authority</p>
            <h2>Cryolipolysis (Fat Freezing), explained clearly</h2>
            <ul>
              <li>Cryolipolysis is a controlled-cooling treatment used for localized fat reduction.</li>
              <li>It helps contour stubborn areas that do not respond easily to lifestyle changes.</li>
              <li>It is not a weight-loss treatment and does not replace medical weight management.</li>
              <li>Changes are gradual over weeks, with suitability confirmed in consultation.</li>
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="soft" size="md">
        <Container>
          <div className="editorial-package-panel">
            <p className="eyebrow">Packages</p>
            <h2>Packages from AED {OFFERS.startsFromAed}</h2>
            <p>
              Package guidance is shared clearly before treatment. Final plan, area count, and total cost are
              confirmed after doctor-led consultation.
            </p>
            <small>Final plan confirmed after consultation.</small>
            <div className="editorial-package-actions">
              <Button href="/prices" variant="secondary">
                View Packages
              </Button>
              <Button href="/book" variant="link">
                Book Consultation
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="soft" size="md" className="section-tight">
        <Container>
          <div className="section-heading">
            <p className="eyebrow">Also Available</p>
            <h2>Other Body Contouring Options</h2>
            <p>Supportive treatments are available alongside our main fat freezing pathway.</p>
          </div>

          <div className="editorial-secondary-grid">
            {secondaryTreatmentTiles.map((item) => (
              <article key={item.href} className="editorial-secondary-tile">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <Button href={item.href} variant="link">
                  Learn more
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="clinic-location" size="md">
        <Container>
          <div className="editorial-location-grid">
            <div className="editorial-location-copy">
              <p className="eyebrow">Clinic Location</p>
              <h2>Visit Our Jumeirah 1 Clinic</h2>
              <p>{displayAddress}</p>
              <p>Hours: Daily {openingWindow}</p>
              <p>
                Jumeirah 1 • Consultation-led • Discreet clinic environment. Easy access from Downtown Dubai, Business
                Bay, and Dubai Marina.
              </p>

              <div className="inline-contact-links">
                <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
                <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
                  WhatsApp: {CONTACT.whatsappDisplay}
                </a>
              </div>

              <div className="editorial-location-actions">
                <Button href="/book" variant="secondary">
                  Book Consultation
                </Button>
                <Button href={mapLink} variant="link" external>
                  Get Directions
                </Button>
                <Button href="/contact" variant="link">
                  Contact Page
                </Button>
              </div>
            </div>

            <a
              className="editorial-map-card"
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open clinic location in Google Maps"
            >
              <span>Map</span>
              <strong>Jumeirah 1, Dubai</strong>
              <em>Open in Google Maps</em>
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
