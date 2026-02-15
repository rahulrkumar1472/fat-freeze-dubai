"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { BRAND_LOGO } from "@/lib/site-config";

const areaLinks = [
  { label: "Stomach", href: "/fat-freezing-stomach" },
  { label: "Love Handles", href: "/fat-freezing-love-handles" },
  { label: "Arms", href: "/fat-freezing-arms" },
  { label: "Chin", href: "/fat-freezing-chin" },
  { label: "Thighs", href: "/fat-freezing-thighs" },
  { label: "Back", href: "/fat-freezing-back" },
];

const topLinks = [
  { label: "Fat Freezing", href: "/fat-freezing" },
  { label: "Areas", href: "/#fat-freezing-areas" },
  { label: "Results", href: "/results" },
  { label: "Prices", href: "/prices" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-link" aria-label="Fat Freezing Dubai home" onClick={closeMenu}>
          <Image
            src={BRAND_LOGO.src}
            alt={BRAND_LOGO.alt}
            width={BRAND_LOGO.width}
            height={BRAND_LOGO.height}
            className="brand-logo"
            priority
          />
          <span className="brand-sub">Jumeirah 1, Dubai</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {topLinks.map((link) => {
            const isActive = !link.href.includes("#") && (pathname === link.href || pathname.startsWith(`${link.href}/`));

            return (
              <Link key={link.href} href={link.href} className={isActive ? "active" : undefined}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <Link href="/book" className="btn btn-primary header-book-btn">
            Book Consultation
          </Link>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="Open navigation menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div className={`mobile-nav-drawer ${menuOpen ? "open" : ""}`} id="mobile-nav">
        <nav className="mobile-nav-links" aria-label="Mobile">
          {topLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}

          <p className="mobile-nav-label">Body Areas</p>
          <div className="mobile-areas">
            {areaLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            ))}
          </div>

          <Link href="/book" className="btn btn-primary" onClick={closeMenu}>
            Book Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
