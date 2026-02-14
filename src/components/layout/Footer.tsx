import Link from "next/link";
import Image from "next/image";
import { BRAND_LOGO, CLINIC, CONTACT, FOOTER_LINKS } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <Image
            src={BRAND_LOGO.src}
            alt={BRAND_LOGO.alt}
            width={BRAND_LOGO.width}
            height={BRAND_LOGO.height}
            className="footer-logo"
          />
          <h2>Fat Freezing Dubai</h2>
          <p>{CLINIC.fullAddress}</p>
          <p>
            Phone: <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          </p>
          <p>
            WhatsApp: <a href={CONTACT.whatsappHref}>{CONTACT.whatsappDisplay}</a>
          </p>
          <p>
            Email: <a href={CONTACT.emailHref}>{CONTACT.email}</a>
          </p>
        </section>

        <section>
          <h2>Quick Links</h2>
          <ul>
            {FOOTER_LINKS.quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Services</h2>
          <ul>
            {FOOTER_LINKS.serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Compliance</h2>
          <ul>
            {FOOTER_LINKS.complianceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <small>© {new Date().getFullYear()} Fat Freezing Dubai. All rights reserved.</small>
        </section>
      </div>
    </footer>
  );
}
