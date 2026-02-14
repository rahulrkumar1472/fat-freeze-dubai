import Image from "next/image";
import { BEFORE_AFTER_GALLERY } from "@/lib/assets-map";

const areas = [
  { key: "stomach", label: "Stomach" },
  { key: "loveHandles", label: "Love Handles" },
  { key: "thighs", label: "Thighs" },
  { key: "arms", label: "Arms" },
  { key: "chin", label: "Chin" },
  { key: "back", label: "Back" },
] as const;

export function BeforeAfterGallery() {
  return (
    <div className="ba-grid">
      {areas.map((area) => (
        <article className="ba-card" key={area.key}>
          <h3>{area.label}</h3>
          <div className="ba-images">
            <div>
              <Image
                src={BEFORE_AFTER_GALLERY[area.key].before}
                alt={`${area.label} before fat freezing`}
                width={480}
                height={320}
                loading="lazy"
              />
              <span>Before</span>
            </div>
            <div>
              <Image
                src={BEFORE_AFTER_GALLERY[area.key].after}
                alt={`${area.label} after fat freezing`}
                width={480}
                height={320}
                loading="lazy"
              />
              <span>After</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
