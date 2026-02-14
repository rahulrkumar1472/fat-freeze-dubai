import { OFFERS } from "@/lib/site-config";

export function UrgencyBar() {
  return (
    <div className="urgency-bar" role="status" aria-live="polite">
      <p>
        {OFFERS.headline} • Packages from AED {OFFERS.startsFromAed} • {OFFERS.packageDepositText}
      </p>
    </div>
  );
}
