import Link from "next/link";
import { CONTACT } from "@/lib/site-config";

export function MobileStickyBar() {
  return (
    <div className="mobile-sticky-cta" aria-label="Quick booking actions">
      <Link href="/book">Book</Link>
      <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
      <a href={CONTACT.phoneHref}>Call</a>
    </div>
  );
}
