import type { NextRequest } from "next/server";

import createMiddleware from "next-intl/middleware";
import { DEFAULT_LOCALE, routing, SupportedLocale } from "./i18n/routing";

const parseLocale = (locale: SupportedLocale) => {
  if (routing.locales.includes(locale)) {
    return locale;
  }
  const baseLocale = locale.split("-")[0] as SupportedLocale;
  if (routing.locales.includes(baseLocale)) {
    return baseLocale;
  }
  return routing.defaultLocale;
};

export default async function proxy(request: NextRequest) {
  // Step 1: Use the incoming request (example)
  const defaultLocale: SupportedLocale = parseLocale(
    (request.headers.get("x-lang") as SupportedLocale) || DEFAULT_LOCALE
  );

  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(request);

  // Step 3: Alter the response (example)
  response.headers.set("x-lang", defaultLocale);

  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)", "/"],
};
