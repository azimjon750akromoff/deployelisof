import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "../i18n.config";

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locale || "en"; // Default to English if undefined

  if (!locales.includes(resolvedLocale as any)) {
    notFound();
  }

  return {
    locale: resolvedLocale, // Ensure a locale is explicitly returned
    messages: (await import(`../locales/${resolvedLocale}.json`)).default,
  };
});
