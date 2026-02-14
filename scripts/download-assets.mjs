import fs from "fs";
import path from "path";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

const ORIGIN = "https://fatfreezing.ae";

// Seed pages (safe list). We will ALSO auto-discover more pages from /sitemap.
const PAGES = [
  "/",
  "/home",
  "/sitemap",
  "/reviews",
  "/contact",
  "/treatments",
  "/pricing",
  "/prices",
  "/book",
  "/book-online",
];

const OUT_DIR = path.join(process.cwd(), "public", "media", "imported");
fs.mkdirSync(OUT_DIR, { recursive: true });

const seenAssets = new Set();
const seenPages = new Set();

const BROWSER_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "Accept-Language": "en-GB,en;q=0.9",
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
};

const ASSET_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  Accept: "*/*",
  "Accept-Language": "en-GB,en;q=0.9",
};

function absolutize(u) {
  if (!u) return null;
  if (u.startsWith("data:")) return null;
  if (u.startsWith("//")) return "https:" + u;
  if (u.startsWith("http")) return u;
  if (u.startsWith("/")) return ORIGIN + u;
  return ORIGIN + "/" + u;
}

function isAsset(u) {
  return /\.(png|jpe?g|webp|svg|gif|ico|woff2?|ttf|otf|mp4|webm)$/i.test(u);
}

// Avoid collisions by using full path, not just filename
function cleanName(u) {
  const url = new URL(u);
  const pathname = url.pathname.replaceAll("/", "_").replace(/^_/, "");
  const safe = pathname.replace(/[^a-zA-Z0-9._-]/g, "_");
  return safe || "asset";
}

async function fetchText(url) {
  const attempts = 4;

  for (let i = 0; i < attempts; i++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 30000); // 30s

      const res = await fetch(url, {
        redirect: "follow",
        headers: BROWSER_HEADERS,
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!res.ok) {
        console.log(`Skip page (HTTP ${res.status}): ${url}`);
        return null;
      }

      return await res.text();
    } catch (err) {
      const wait = 1000 * (i + 1);
      console.log(
        `Fetch failed (${i + 1}/${attempts}) for ${url}. Retrying in ${wait}ms...`
      );
      await new Promise((r) => setTimeout(r, wait));
      if (i === attempts - 1) {
        console.log("Final fetch failure:", url, err?.message || err);
        return null;
      }
    }
  }

  return null;
}

function extractUrls(html) {
  const urls = new Set();

  // src/href
  const re = /(src|href)=["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(html))) {
    const u = absolutize(m[2]);
    if (u) urls.add(u);
  }

  // inline CSS url(...)
  const reCss = /url\(["']?([^"')]+)["']?\)/gi;
  while ((m = reCss.exec(html))) {
    const u = absolutize(m[1]);
    if (u) urls.add(u);
  }

  return [...urls];
}

// Pull internal links from the /sitemap HTML page (not XML) if present.
function extractInternalLinks(html) {
  const links = new Set();
  const re = /href=["']([^"']+)["']/gi;
  let m;

  while ((m = re.exec(html))) {
    const raw = m[1];
    if (!raw) continue;

    // normalize to path
    if (raw.startsWith("/") && !raw.startsWith("//")) {
      links.add(raw);
      continue;
    }

    if (raw.startsWith(ORIGIN)) {
      try {
        const p = new URL(raw).pathname;
        if (p) links.add(p);
      } catch {}
    }
  }

  return [...links];
}

async function downloadFile(u) {
  if (seenAssets.has(u)) return;
  seenAssets.add(u);

  const filename = cleanName(u);
  const outPath = path.join(OUT_DIR, filename);

  if (fs.existsSync(outPath)) return;

  // retry asset downloads too
  const attempts = 3;
  for (let i = 0; i < attempts; i++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 30000);

      const res = await fetch(u, {
        redirect: "follow",
        headers: ASSET_HEADERS,
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!res.ok) return;

      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(outPath, buf);
      console.log("Saved:", filename);
      return;
    } catch {
      const wait = 600 * (i + 1);
      await new Promise((r) => setTimeout(r, wait));
      if (i === attempts - 1) return;
    }
  }
}

async function crawlPage(pagePath) {
  const pageUrl = absolutize(pagePath);
  if (!pageUrl || seenPages.has(pageUrl)) return;
  seenPages.add(pageUrl);

  console.log("Crawling:", pageUrl);
  const html = await fetchText(pageUrl);

  // ✅ critical: if fetch failed or 404, don't crash
  if (!html) return;

  const urls = extractUrls(html);
  for (const u of urls) {
    if (isAsset(u)) await downloadFile(u);
  }
}

(async () => {
  // 1) Crawl seed pages first
  for (const p of PAGES) await crawlPage(p);

  // 2) Auto-discover more internal pages from /sitemap (if available)
  const sitemapHtml = await fetchText(`${ORIGIN}/sitemap`);
  if (sitemapHtml) {
    const discovered = extractInternalLinks(sitemapHtml);
    console.log(`Discovered ${discovered.length} internal links from /sitemap`);

    for (const p of discovered) {
      await crawlPage(p);
    }
  } else {
    console.log("No sitemap HTML found or blocked. Continuing with seeds only.");
  }

  console.log(`Done. Downloaded ${seenAssets.size} assets to ${OUT_DIR}`);
})();