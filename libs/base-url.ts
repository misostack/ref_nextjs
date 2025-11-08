import { headers } from "next/headers";

export async function getBaseUrl() {
  // Prefer proxy headers in prod (Vercel, reverse proxies)
  const h = await headers();
  const proto = h.get("x-forwarded-proto");
  const host = h.get("x-forwarded-host") ?? h.get("host");

  if (proto && host) return `${proto}://${host}`;

  // Fallback to env or localhost in dev / build time
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}
