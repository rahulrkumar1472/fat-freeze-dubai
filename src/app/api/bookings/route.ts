import { NextResponse } from "next/server";

type BookingRequest = {
  treatment: string;
  bodyArea?: string;
  packageOption?: string;
  preferredDate?: string;
  preferredTime?: string;
  fullName: string;
  phone: string;
  email: string;
  language: string;
  notes?: string;
  honeypot?: string;
};

type RateEntry = {
  count: number;
  resetAt: number;
};

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 6;

const globalRateLimitStore = globalThis as typeof globalThis & {
  bookingRateLimit?: Map<string, RateEntry>;
};

const rateLimitMap = globalRateLimitStore.bookingRateLimit ?? new Map<string, RateEntry>();
if (!globalRateLimitStore.bookingRateLimit) {
  globalRateLimitStore.bookingRateLimit = rateLimitMap;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(input: string): string {
  return input.replace(/[<>]/g, "").trim();
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();

  // Lightweight cleanup for expired buckets.
  for (const [key, value] of rateLimitMap.entries()) {
    if (value.resetAt <= now) {
      rateLimitMap.delete(key);
    }
  }

  const existing = rateLimitMap.get(ip);

  if (!existing || existing.resetAt <= now) {
    rateLimitMap.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (existing.count >= RATE_LIMIT_MAX) {
    return true;
  }

  existing.count += 1;
  rateLimitMap.set(ip, existing);
  return false;
}

function validateBooking(payload: BookingRequest): string | null {
  if (payload.honeypot && payload.honeypot.trim() !== "") {
    return "Spam check failed";
  }

  if (!payload.treatment || payload.treatment.length < 3) {
    return "Treatment selection is required";
  }

  if (!payload.fullName || payload.fullName.length < 2) {
    return "Full name is required";
  }

  if (!payload.phone || payload.phone.length < 7) {
    return "Phone number is required";
  }

  if (!payload.email || !isValidEmail(payload.email)) {
    return "Valid email is required";
  }

  if (!payload.language) {
    return "Preferred language is required";
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);

    if (checkRateLimit(clientIp)) {
      return NextResponse.json(
        { ok: false, error: "Too many booking attempts. Please try again shortly." },
        { status: 429 },
      );
    }

    let body: BookingRequest;
    try {
      body = (await request.json()) as BookingRequest;
    } catch {
      return NextResponse.json({ ok: false, error: "Invalid request payload." }, { status: 400 });
    }

    const payload: BookingRequest = {
      treatment: sanitize(body.treatment || ""),
      bodyArea: sanitize(body.bodyArea || ""),
      packageOption: sanitize(body.packageOption || ""),
      preferredDate: sanitize(body.preferredDate || ""),
      preferredTime: sanitize(body.preferredTime || ""),
      fullName: sanitize(body.fullName || ""),
      phone: sanitize(body.phone || ""),
      email: sanitize(body.email || ""),
      language: sanitize(body.language || ""),
      notes: sanitize(body.notes || ""),
      honeypot: body.honeypot || "",
    };

    const validationError = validateBooking(payload);
    if (validationError) {
      return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
    }

    const bookingRecord = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      source: "website_v2",
      ...payload,
    };

    // Placeholder-only capture for Layer 2 scope:
    // no database write and no external dependency required.
    console.info("[booking] placeholder submission accepted", {
      id: bookingRecord.id,
      createdAt: bookingRecord.createdAt,
      treatment: bookingRecord.treatment,
      bodyArea: bookingRecord.bodyArea,
    });

    return NextResponse.json({ ok: true, id: bookingRecord.id });
  } catch (error) {
    console.error("[booking] failed", error);
    return NextResponse.json(
      { ok: false, error: "Unable to submit booking right now. Please try again." },
      { status: 500 },
    );
  }
}
