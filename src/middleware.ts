import createMiddleware from "next-intl/middleware";

const middleware = createMiddleware({
  locales: ["ru", "uz", "en"], // Keep the order the same as in your config
  defaultLocale: "en", // Set the default language
});

export default middleware; // ✅ Correctly export as default

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // Ensures middleware runs on all pages
};
