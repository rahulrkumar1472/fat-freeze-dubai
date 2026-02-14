"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { BRAND_LOGO, PRIMARY_NAV } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-link" aria-label="Fat Freezing Dubai home">
          <Image
            src={BRAND_LOGO.src}
            alt={BRAND_LOGO.alt}
            width={BRAND_LOGO.width}
            height={BRAND_LOGO.height}
            className="brand-logo"
            priority
          />
          <span className="brand-sub">Dubai | Jumeirah 1</span>
        </Link>

        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
        >
          Menu
        </button>

        <nav id="primary-nav" className={`primary-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            {PRIMARY_NAV.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <details>
                    <summary>{item.label}</summary>
                    <div className="dropdown-panel">
                      <Link href={item.href} className={pathname === item.href ? "active" : undefined}>
                        {item.label} Overview
                      </Link>
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link href={item.href} className={pathname === item.href ? "active" : undefined}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link href="/book" className="btn btn-primary nav-book-btn">
                Book your appointment
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
