import "./globals.css";
import "../../assets/fonts/stylesheet.css";
import { locales, defaultLocale } from "../../../i18n.config";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import Navbar from "@/components/header/header";
import Footer from "@/components/footer/footer";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function RootLayout({ children, params }: Props) {
  const locale = params?.locale || defaultLocale; // Default to English if undefined

  if (!locales.includes(locale)) { 
    throw new Error(`Invalid locale: ${locale}`);
  }

  // ✅ Manually import locale messages
  let messages = {};
  try {
    messages = (await import(`../../../locales/${locale}.json`)).default;
  } catch (error) {
    console.error(`Error loading locale messages for ${locale}:`, error);
  }

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
