"use client";

import { useState } from "react";
import type { FAQItem } from "@/lib/content";

type FAQAccordionProps = {
  faqs: FAQItem[];
};

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list" role="list">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;

        return (
          <article key={faq.question} className={`faq-item ${isOpen ? "open" : ""}`}>
            <button
              className="faq-question"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
              type="button"
            >
              <span>{faq.question}</span>
              <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="faq-answer">{faq.answer}</p>}
          </article>
        );
      })}
    </div>
  );
}
