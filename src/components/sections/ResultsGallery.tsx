"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { BEFORE_AFTER_GALLERY } from "@/lib/assets-map";

type CuratedSlide = {
  id: string;
  areaSlug: string;
  area: string;
  caption: string;
  before: string;
  after: string;
  showOnHome: boolean;
};

const curatedSlides: CuratedSlide[] = [
  {
    id: "stomach",
    areaSlug: "stomach",
    area: "Stomach",
    caption: "Lower abdominal contour progression",
    before: BEFORE_AFTER_GALLERY.stomach.before,
    after: BEFORE_AFTER_GALLERY.stomach.after,
    showOnHome: true,
  },
  {
    id: "love-handles",
    areaSlug: "loveHandles",
    area: "Love Handles",
    caption: "Waistline and flank refinement",
    before: BEFORE_AFTER_GALLERY.loveHandles.before,
    after: BEFORE_AFTER_GALLERY.loveHandles.after,
    showOnHome: true,
  },
  {
    id: "thighs",
    areaSlug: "thighs",
    area: "Thighs",
    caption: "Inner and outer thigh shaping",
    before: BEFORE_AFTER_GALLERY.thighs.before,
    after: BEFORE_AFTER_GALLERY.thighs.after,
    showOnHome: true,
  },
  {
    id: "arms",
    areaSlug: "arms",
    area: "Arms",
    caption: "Upper-arm contour support",
    before: BEFORE_AFTER_GALLERY.arms.before,
    after: BEFORE_AFTER_GALLERY.arms.after,
    showOnHome: true,
  },
  {
    id: "chin",
    areaSlug: "chin",
    area: "Chin",
    caption: "Submental profile refinement",
    before: BEFORE_AFTER_GALLERY.chin.before,
    after: BEFORE_AFTER_GALLERY.chin.after,
    showOnHome: true,
  },
  {
    id: "back",
    areaSlug: "back",
    area: "Back",
    caption: "Upper-back contour balancing",
    before: BEFORE_AFTER_GALLERY.back.before,
    after: BEFORE_AFTER_GALLERY.back.after,
    showOnHome: false,
  },
];

const PLACEHOLDER_IMAGE = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1125" viewBox="0 0 900 1125">
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#f4f0ea"/>
        <stop offset="100%" stop-color="#dee7e4"/>
      </linearGradient>
    </defs>
    <rect width="900" height="1125" fill="url(#g)"/>
    <circle cx="450" cy="470" r="72" fill="#b7c5c1" opacity="0.5"/>
    <rect x="300" y="610" width="300" height="28" rx="14" fill="#97aaa5" opacity="0.55"/>
  </svg>`,
)}`;

type ResultImageProps = {
  src: string;
  alt: string;
};

function ResultImage({ src, alt }: ResultImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={640}
      height={800}
      loading="lazy"
      unoptimized={imgSrc.startsWith("data:image/")}
      onError={() => setImgSrc(PLACEHOLDER_IMAGE)}
      sizes="(max-width: 780px) 100vw, 50vw"
    />
  );
}

type ResultsGalleryProps = {
  mode?: "preview" | "full";
};

function ResultsPreviewCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
  const previewSlides = curatedSlides.filter((slide) => slide.showOnHome).slice(0, 5);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(previewSlides.length);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setSnapCount(emblaApi.scrollSnapList().length);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const canPrev = selectedIndex > 0;
  const canNext = selectedIndex < snapCount - 1;

  return (
    <div className="results-preview-shell">
      <div className="results-preview-controls" aria-label="Results preview navigation">
        <p>Curated treatment examples</p>
        <div>
          <button type="button" onClick={() => emblaApi?.scrollPrev()} disabled={!canPrev}>
            Prev
          </button>
          <button type="button" onClick={() => emblaApi?.scrollNext()} disabled={!canNext}>
            Next
          </button>
        </div>
      </div>

      <div className="results-preview-embla" ref={emblaRef}>
        <div className="results-preview-track">
          {previewSlides.map((slide) => (
            <article className="results-preview-slide" key={slide.id}>
              <div className="results-preview-slide-head">
                <span>{slide.area}</span>
                <p>{slide.caption}</p>
              </div>

              <div className="results-preview-pair">
                <figure className="results-preview-frame">
                  <span className="results-preview-label">Before</span>
                  <ResultImage src={slide.before} alt={`${slide.area} before treatment`} />
                </figure>
                <figure className="results-preview-frame">
                  <span className="results-preview-label">After</span>
                  <ResultImage src={slide.after} alt={`${slide.area} after treatment`} />
                </figure>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="results-preview-dots" aria-hidden="true">
        {Array.from({ length: snapCount }).map((_, index) => (
          <span key={`result-dot-${index}`} className={selectedIndex === index ? "active" : ""} />
        ))}
      </div>
    </div>
  );
}

function ResultsFullGrid() {
  const [activeArea, setActiveArea] = useState<string>("all");
  const areaFilters = [
    { id: "all", label: "All Areas" },
    ...Array.from(
      new Map(curatedSlides.map((slide) => [slide.areaSlug, { id: slide.areaSlug, label: slide.area }])).values(),
    ),
  ];

  const filteredSlides =
    activeArea === "all" ? curatedSlides : curatedSlides.filter((slide) => slide.areaSlug === activeArea);

  return (
    <div className="results-gallery-full">
      <div className="results-filter-list" role="tablist" aria-label="Filter by area">
        {areaFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={activeArea === filter.id}
            className={`results-filter-btn ${activeArea === filter.id ? "active" : ""}`}
            onClick={() => setActiveArea(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="results-full-grid">
        {filteredSlides.map((slide) => (
          <article key={`full-${slide.id}`} className="results-full-card">
            <div className="results-full-head">
              <h3>{slide.area}</h3>
              <p>{slide.caption}</p>
            </div>

            <div className="results-preview-pair">
              <figure className="results-preview-frame">
                <span className="results-preview-label">Before</span>
                <ResultImage src={slide.before} alt={`${slide.area} before treatment`} />
              </figure>
              <figure className="results-preview-frame">
                <span className="results-preview-label">After</span>
                <ResultImage src={slide.after} alt={`${slide.area} after treatment`} />
              </figure>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function ResultsGallery({ mode = "preview" }: ResultsGalleryProps) {
  if (mode === "full") {
    return <ResultsFullGrid />;
  }

  return <ResultsPreviewCarousel />;
}
