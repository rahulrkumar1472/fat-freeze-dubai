import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section container">
      <div className="surface-panel">
        <p className="eyebrow">Not Found</p>
        <h1>Page not available</h1>
        <p style={{ marginTop: "0.6rem" }}>
          The page you requested is not currently available in this V2 build.
        </p>
        <div style={{ marginTop: "0.9rem" }}>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
