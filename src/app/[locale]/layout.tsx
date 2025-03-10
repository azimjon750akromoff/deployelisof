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
  params: Promise<{ locale: string }>; // params is a Promise
};

export default async function RootLayout({ children, params }: Props) {
  // Await the params promise to resolve the actual values
  const resolvedParams = await params;
  const locale = resolvedParams.locale || "en"; // Default to "en" if undefined

  // Validate the locale and ensure it's of type Locale
  if (!locales.includes(locale as Locale)) {
    notFound(); // Return a 404 if the locale is invalid
  }

  // Dynamically load messages for the locale
  let messages;
  try {
    messages = (await import(`../../../locales/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    notFound(); // Return a 404 if the messages file is missing
  }

  return (
    <html lang={locale}>
      <body className="font-federo text-[16px] font-normal antialiased">
        <NextIntlClientProvider locale={locale as Locale} messages={messages}>
          <Navbar locale={locale as Locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}