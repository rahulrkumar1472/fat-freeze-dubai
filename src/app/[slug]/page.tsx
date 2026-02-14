import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageTemplate } from "@/components/sections/PageTemplate";
import { ALL_SLUGS, getPageDataBySlug, homepageReviews } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";
import { ReviewsStrip } from "@/components/sections/ReviewsStrip";

export function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

type SlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: SlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageDataBySlug(slug);

  if (!page) {
    return {
      title: "Page Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}`,
    canonicalPath: page.canonicalSlug ? `/${page.canonicalSlug}` : undefined,
  });
}

export default async function GenericPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const page = getPageDataBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <PageTemplate page={page} />
      {page.slug === "reviews" && (
        <section className="section">
          <div className="container">
            <h2>More Client Feedback</h2>
            <p style={{ marginTop: "0.45rem" }}>
              Reviews shown are aligned with the latest clinic review snapshots used in our source data.
            </p>
            <div style={{ marginTop: "0.95rem" }}>
              <ReviewsStrip reviews={homepageReviews} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
