import { APP_VERSION } from "@/env";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return Response.json({
    request: {
      url: request.url,
      headers: Object.fromEntries(request.headers),
    },
    version: APP_VERSION,
  });
}
