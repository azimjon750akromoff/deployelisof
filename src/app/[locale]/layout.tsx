import "./globals.css";
import "../../assets/fonts/stylesheet.css";
import { locales } from "../../../i18n.config"; // Adjust the path as needed
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { notFound } from "next/navigation"; // Import notFound
import Navbar from "@/components/header/header";
import Footer from "@/components/footer/footer";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function RootLayout({ children, params }: Props) {
  const locale = params.locale || "en"; // Default to "en" if undefined

  // Validate the locale
  if (!locales.includes(locale as typeof locales[number])) {
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
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}