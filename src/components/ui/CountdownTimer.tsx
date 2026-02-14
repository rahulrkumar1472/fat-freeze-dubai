"use client";

import { useEffect, useMemo, useState } from "react";

type CountdownTimerProps = {
  targetISO: string;
};

function getTimeLeft(targetISO: string) {
  const target = new Date(targetISO).getTime();
  const now = Date.now();
  const diff = Math.max(target - now, 0);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, done: diff <= 0 };
}

export function CountdownTimer({ targetISO }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetISO));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetISO));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetISO]);

  const items = useMemo(
    () => [
      { label: "Days", value: timeLeft.days },
      { label: "Hours", value: timeLeft.hours },
      { label: "Minutes", value: timeLeft.minutes },
      { label: "Seconds", value: timeLeft.seconds },
    ],
    [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds],
  );

  if (timeLeft.done) {
    return <p className="countdown-ended">Offer refreshed. Contact us for latest packages.</p>;
  }

  return (
    <div className="countdown-grid" aria-live="polite">
      {items.map((item) => (
        <div key={item.label} className="countdown-card">
          <strong>{String(item.value).padStart(2, "0")}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
