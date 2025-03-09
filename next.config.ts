/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "uz", "ru"],
    defaultLocale: "en",
    localeDetection: false,
  },
};

module.exports = nextConfig;
