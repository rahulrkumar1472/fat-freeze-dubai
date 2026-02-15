import { ResultsGallery } from "@/components/sections/ResultsGallery";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Fat Freezing Results Gallery Dubai",
  description:
    "View curated fat freezing before and after examples from our Dubai clinic. Results vary and consultation is required.",
  path: "/results-gallery",
});

export default function ResultsGalleryPage() {
  return (
    <Section size="xl">
      <Container>
        <div className="section-heading">
          <p className="eyebrow">Results Gallery</p>
          <h1>Fat Freezing Results Gallery</h1>
          <p>
            Curated before and after examples by body area from treatments performed at our Jumeirah clinic.
          </p>
        </div>

        <ResultsGallery mode="full" />

        <p className="results-compliance-line">
          Results vary. Suitability and outcomes are confirmed in consultation.
        </p>

        <div className="results-preview-cta">
          <Button href="/book">Book Consultation</Button>
          <Button href="/fat-freezing" variant="link">
            View Fat Freezing Treatment
          </Button>
        </div>
      </Container>
    </Section>
  );
}
