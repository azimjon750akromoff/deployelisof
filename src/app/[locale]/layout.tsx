import "./globals.css";
import "../../assets/fonts/stylesheet.css";
import { locales } from "../../../i18n.config";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { getMessages } from "next-intl/server";
import Navbar from "@/components/header/header";
import Footer from "@/components/footer/footer";

type Props = {
  children: ReactNode;
  params: { locale: "en" | "uz" | "ru" };
};

export default async function RootLayout({ children, params }: Props) {
  const locale = params?.locale || "en"; // Default to English if undefined

  if (!locales.includes(locale as any)) { 
    throw new Error(`Invalid locale: ${locale}`);
  }

  const messages = await getMessages({ locale }).catch(() => ({}));

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

