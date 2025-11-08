import { defineRouting } from "next-intl/routing";

export const SUPPORTED_LOCALES = ["en", "vi"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: SupportedLocale = "vi";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: SUPPORTED_LOCALES,
  localeDetection: false,

  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,

  localePrefix: {
    mode: "as-needed",
  },
});
