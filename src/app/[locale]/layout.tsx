import "./globals.css";
import "../../assets/fonts/stylesheet.css";
import { locales } from "../../../i18n.config";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import Navbar from "@/components/header/header";
import Footer from "@/components/footer/footer";

// ✅ Import messages statically (avoid dynamic import issues)
import enMessages from "../../../locales/en.json";
import ruMessages from "../../../locales/ru.json";
import uzMessages from "../../../locales/uz.json";

const messagesMap: Record<string, any> = {
  en: enMessages,
  ru: ruMessages,
  uz: uzMessages,
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params }: Props) {
  const locale = params?.locale || "en"; // ✅ Default to "en" if undefined

  if (!locales.includes(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  const messages = messagesMap[locale] || messagesMap["en"]; // ✅ Fallback to English if missing

  return (
    <html lang={locale}>
      <body className="font-federo text-[16px] font-normal antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
