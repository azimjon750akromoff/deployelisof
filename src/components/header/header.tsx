"use client";

import { useTranslations } from "next-intl";
import LangSwitcher from "./lang-switcher";
import { Locale } from "../../../i18n.config";
import BurgerMenu from "./burger-menu";
import ResponsiveLogo from "../responsivelogo/responsiveLogo";

const Navbar = ({ locale }: { locale: Locale }) => {
  const t = useTranslations("Header.Nav");
  const keysNav = [
    "Home",
    "Products",
    "AboutUs",
    "OurClients",
    "News",
    "ContactUs",
  ] as const;

  // Smooth scrolling function
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // ✅ Smooth scroll
    }
  };

  return (
    <nav className="my-container flex justify-between items-center">
      {/* Left Logo Section */}
      <div className="left">
        <ResponsiveLogo />
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-[48px] hidden md:flex">
        {keysNav.map((item, index) => {
          const sectionId = t(`${item}.link`); // "#clients", "#about", etc.

          return (
            <li className="font-gilroy text-[16px] font-medium" key={index}>
              <a
                href={sectionId} // ✅ This makes it work for SEO and no-JS users
                onClick={(e) => handleScroll(e, sectionId)}
                className="cursor-pointer hover:text-accentColor"
              >
                {t(`${item}.name`)}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Right Language Selector */}
      <div className="right flex items-center hidden md:flex">
        <LangSwitcher type="default" locale={locale} />
      </div>
      <div className="md:hidden">
        <BurgerMenu locale={locale} />
      </div>
    </nav>
  );
};

export default Navbar;
