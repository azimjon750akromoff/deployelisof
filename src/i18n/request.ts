import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "../../i18n.config";
import enMessages from "../../locales/en.json";
import ruMessages from "../../locales/ru.json"; // ✅ Fixed the extra slash
import uzMessages from "../../locales/uz.json";

const messagesMap: Record<string, any> = {
  en: enMessages,
  ru: ruMessages,
  uz: uzMessages,
};

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locale || "en"; // ✅ Default to English if undefined

  if (!locales.includes(resolvedLocale as any)) {
    notFound();
  }

  return {
    locale: resolvedLocale,
    messages: messagesMap[resolvedLocale] || messagesMap["en"], // ✅ Fallback to English if missing
  };
});
