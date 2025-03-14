import "./globals.css";
import "../../assets/fonts/stylesheet.css";
import { locales, Locale } from "../../../i18n.config"; // Import Locale type
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { notFound } from "next/navigation"; // Import notFound
import Navbar from "@/components/header/header";
import Footer from "@/components/footer/footer";

type Props = {
  children: ReactNode;
  params: { locale: Locale }; // params is not a Promise
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = params;

  // Validate the locale
  if (!locales.includes(locale)) {
    notFound(); // Return a 404 if the locale is invalid
  }

  // Dynamically load messages for the locale
  let messages;
  try {
    messages = (await import(`../../../locales/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // Provide fallback messages or return a 404
    notFound();
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