"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { bookingPackages, bookingTreatments, fatFreezingAreas } from "@/lib/content";
import { CONTACT } from "@/lib/site-config";

type BookingState = {
  treatment: string;
  bodyArea: string;
  packageOption: string;
  preferredDate: string;
  preferredTime: string;
  fullName: string;
  phone: string;
  email: string;
  language: string;
  notes: string;
  honeypot: string;
};

const initialState: BookingState = {
  treatment: "Fat Freezing (Cryolipolysis)",
  bodyArea: "Stomach",
  packageOption: "Starter: 1 area from AED 489",
  preferredDate: "",
  preferredTime: "",
  fullName: "",
  phone: "",
  email: "",
  language: "English",
  notes: "",
  honeypot: "",
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateDetails(state: BookingState): string | null {
  if (!state.fullName || state.fullName.length < 2) {
    return "Please enter your full name.";
  }

  if (!state.phone || state.phone.length < 7) {
    return "Please enter a valid phone number.";
  }

  if (!validateEmail(state.email)) {
    return "Please enter a valid email address.";
  }

  return null;
}

export function BookingFunnel() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [state, setState] = useState<BookingState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const packageOptions = useMemo(() => {
    const options = bookingPackages[state.treatment as keyof typeof bookingPackages];
    return options ?? ["Consultation package from AED 489"];
  }, [state.treatment]);

  const isFatFreezingTreatment = state.treatment === "Fat Freezing (Cryolipolysis)";

  const update = <K extends keyof BookingState>(key: K, value: BookingState[K]) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const next = () => {
    setError(null);

    if (step === 1 && !state.treatment) {
      setError("Select a treatment to continue.");
      return;
    }

    if (step === 2 && !state.packageOption) {
      setError("Choose a package option.");
      return;
    }

    if (step === 3 && !state.preferredDate) {
      setError("Please choose a preferred date.");
      return;
    }

    if (step === 4) {
      const detailsError = validateDetails(state);
      if (detailsError) {
        setError(detailsError);
        return;
      }
    }

    if (step < 5) {
      setStep((prev) => prev + 1);
    }
  };

  const back = () => {
    setError(null);
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const submit = async () => {
    setError(null);
    const detailsError = validateDetails(state);
    if (detailsError) {
      setError(detailsError);
      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      const result = (await response.json()) as { ok: boolean; id?: string; error?: string };

      if (!response.ok || !result.ok) {
        setError(result.error ?? "Unable to submit booking right now.");
        return;
      }

      const bookingId = result.id ?? crypto.randomUUID();
      router.push(`/book/success?ref=${encodeURIComponent(bookingId)}`);
    } catch {
      setError("Network issue. Please retry or contact us on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  const summaryDateTime = `${state.preferredDate || "Not selected"} ${state.preferredTime || ""}`.trim();

  return (
    <section className="booking-page container">
      <div className="booking-shell">
        <div className="booking-header">
          <p className="eyebrow" style={{ color: "#a3f5de" }}>
            Booking Funnel
          </p>
          <h1>Book Your Consultation</h1>
          <p>Complete the 5-step flow and we will confirm your appointment shortly.</p>
          <div className="step-progress" aria-label="Booking progress">
            {["Treatment", "Body Area", "Date & Time", "Your Details", "Confirm"].map((label, index) => (
              <span key={label} className={`step-pill ${step === index + 1 ? "active" : ""}`}>
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="booking-body">
          {step === 1 && (
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="treatment">Step 1: Choose treatment</label>
                <select
                  id="treatment"
                  value={state.treatment}
                  onChange={(event) => {
                    const treatment = event.target.value;
                    update("treatment", treatment);
                    update(
                      "packageOption",
                      bookingPackages[treatment as keyof typeof bookingPackages]?.[0] ??
                        "Consultation package from AED 489",
                    );
                  }}
                >
                  {bookingTreatments.map((treatment) => (
                    <option key={treatment} value={treatment}>
                      {treatment}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="form-grid two">
              {isFatFreezingTreatment && (
                <div className="form-field">
                  <label htmlFor="area">Step 2: Choose body area</label>
                  <select
                    id="area"
                    value={state.bodyArea}
                    onChange={(event) => update("bodyArea", event.target.value)}
                  >
                    {fatFreezingAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="form-field">
                <label htmlFor="package">Choose package</label>
                <select
                  id="package"
                  value={state.packageOption}
                  onChange={(event) => update("packageOption", event.target.value)}
                >
                  {packageOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="form-grid two">
              <div className="form-field">
                <label htmlFor="date">Step 3: Preferred date</label>
                <input
                  id="date"
                  type="date"
                  value={state.preferredDate}
                  onChange={(event) => update("preferredDate", event.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="time">Preferred time</label>
                <input
                  id="time"
                  type="time"
                  value={state.preferredTime}
                  onChange={(event) => update("preferredTime", event.target.value)}
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="form-grid two">
              <div className="form-field">
                <label htmlFor="name">Step 4: Full name</label>
                <input
                  id="name"
                  type="text"
                  value={state.fullName}
                  onChange={(event) => update("fullName", event.target.value)}
                  placeholder="Your full name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  value={state.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  placeholder="+971..."
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={state.email}
                  onChange={(event) => update("email", event.target.value)}
                  placeholder="you@email.com"
                />
              </div>
              <div className="form-field">
                <label htmlFor="language">Preferred language</label>
                <select
                  id="language"
                  value={state.language}
                  onChange={(event) => update("language", event.target.value)}
                >
                  <option>English</option>
                  <option>Arabic</option>
                  <option>Hindi</option>
                  <option>Urdu</option>
                </select>
              </div>
              <div className="form-field" style={{ gridColumn: "1 / -1" }}>
                <label htmlFor="notes">Additional notes (optional)</label>
                <textarea
                  id="notes"
                  value={state.notes}
                  onChange={(event) => update("notes", event.target.value)}
                  placeholder="Any additional request or body area detail"
                />
              </div>
              <div className="form-field" style={{ display: "none" }}>
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  value={state.honeypot}
                  onChange={(event) => update("honeypot", event.target.value)}
                  autoComplete="off"
                />
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="booking-summary">
              <h2>Step 5: Confirm and Submit</h2>
              <p>Review your booking request before sending it to our Jumeirah 1 team.</p>
              <dl>
                <div>
                  <dt>Treatment</dt>
                  <dd>{state.treatment}</dd>
                </div>
                {isFatFreezingTreatment && (
                  <div>
                    <dt>Body area</dt>
                    <dd>{state.bodyArea}</dd>
                  </div>
                )}
                <div>
                  <dt>Package</dt>
                  <dd>{state.packageOption}</dd>
                </div>
                <div>
                  <dt>Preferred time</dt>
                  <dd>{summaryDateTime}</dd>
                </div>
                <div>
                  <dt>Name</dt>
                  <dd>{state.fullName}</dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>{state.phone}</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>{state.email}</dd>
                </div>
                <div>
                  <dt>Language</dt>
                  <dd>{state.language}</dd>
                </div>
              </dl>
              <p className="summary-disclaimer">
                Final package suitability and price are confirmed only after consultation.
              </p>
              <a
                href={CONTACT.whatsappHref}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Need help first? WhatsApp us
              </a>
            </div>
          )}

          {error && <p className="error-text">{error}</p>}

          <div className="booking-actions">
            {step > 1 && (
              <button type="button" className="btn btn-secondary" onClick={back} disabled={submitting}>
                Back
              </button>
            )}
            {step < 5 && (
              <button type="button" className="btn btn-primary" onClick={next} disabled={submitting}>
                Continue
              </button>
            )}
            {step === 5 && (
              <button type="button" className="btn btn-primary" onClick={submit} disabled={submitting}>
                {submitting ? "Submitting..." : "Submit Booking"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
