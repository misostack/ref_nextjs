import faqsMap from "@/content/faqs";
import type { NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  ctx: RouteContext<"/api/faqs/[locale]">
) {
  const { locale } = await ctx.params;
  const faqs = faqsMap[locale] || [];
  return Response.json({ locale, faqs });
}
