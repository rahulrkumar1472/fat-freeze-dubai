"use client";

import * as React from "react";

type TypewriterProps = {
  phrases: string[];
  className?: string;
  /**
   * ms per character typed
   */
  typeSpeed?: number;
  /**
   * ms per character deleted
   */
  deleteSpeed?: number;
  /**
   * pause after a phrase is fully typed (ms)
   */
  pauseMs?: number;
  /**
   * show the caret cursor
   */
  showCursor?: boolean;
};

export function Typewriter({
  phrases,
  className,
  typeSpeed = 42,
  deleteSpeed = 28,
  pauseMs = 1200,
  showCursor = true,
}: TypewriterProps) {
  const safePhrases = React.useMemo(
    () => (Array.isArray(phrases) && phrases.length ? phrases : [""]),
    [phrases]
  );

  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    const current = safePhrases[phraseIndex] ?? "";
    const nextIndex = (phraseIndex + 1) % safePhrases.length;

    if (!isDeleting) {
      // typing
      if (text.length < current.length) {
        timer = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, typeSpeed);
      } else {
        // finished typing — pause, then start deleting
        timer = setTimeout(() => setIsDeleting(true), pauseMs);
      }
    } else {
      // deleting
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(current.slice(0, Math.max(0, text.length - 1)));
        }, deleteSpeed);
      } else {
        // move to next phrase
        setIsDeleting(false);
        setPhraseIndex(nextIndex);
      }
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [deleteSpeed, isDeleting, pauseMs, phraseIndex, safePhrases, text, typeSpeed]);

  return (
    <span className={className}>
      <span>{text}</span>
      {showCursor ? (
        <span
          aria-hidden="true"
          className="inline-block align-baseline ml-[2px] w-[1px] h-[1em] bg-current opacity-80 animate-pulse"
        />
      ) : null}
    </span>
  );
}
