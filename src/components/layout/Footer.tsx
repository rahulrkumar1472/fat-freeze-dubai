import Link from "next/link";
import Image from "next/image";
import { BRAND_LOGO, CLINIC, CONTACT, FOOTER_LINKS } from "@/lib/site-config";

const areaLinks = [
  { label: "Stomach", href: "/fat-freezing-stomach" },
  { label: "Love Handles", href: "/fat-freezing-love-handles" },
  { label: "Thighs", href: "/fat-freezing-thighs" },
  { label: "Arms", href: "/fat-freezing-arms" },
  { label: "Chin", href: "/fat-freezing-chin" },
  { label: "Back", href: "/fat-freezing-back" },
];

export function Footer() {
  const displayAddress = CLINIC.addressLine;

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section className="footer-brand-column">
          <Image
            src={BRAND_LOGO.src}
            alt={BRAND_LOGO.alt}
            width={BRAND_LOGO.width}
            height={BRAND_LOGO.height}
            className="footer-logo"
          />
          <p className="footer-heading">Fat Freezing Dubai</p>
          <p>{displayAddress}</p>
          <p>
            <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          </p>
          <p>
            <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp: {CONTACT.whatsappDisplay}
            </a>
          </p>
          <p>
            <a href={CONTACT.emailHref}>{CONTACT.email}</a>
          </p>
        </section>

        <section>
          <p className="footer-heading">Quick Links</p>
          <ul>
            {FOOTER_LINKS.quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <p className="footer-heading">Fat Freezing Areas</p>
          <ul>
            {areaLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <p className="footer-heading">Compliance</p>
          <ul>
            {FOOTER_LINKS.complianceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <small>
            Treatments are consultation-led. Outcomes vary by suitability, baseline profile, and protocol.
          </small>
        </section>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <small>© {new Date().getFullYear()} Fat Freezing Dubai. All rights reserved.</small>
          <small>Medical consultation is required before treatment planning.</small>
        </div>
      </div>
    </footer>
  );
}
