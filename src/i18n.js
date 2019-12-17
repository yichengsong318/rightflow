import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DEBUG } from "constants/constants";
import common_en from "translations/en/common.json";
import BrowserLanguage from "services/BrowserLanguage";

const CURRENT_LANG = BrowserLanguage.getDefaultLanguage();

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: CURRENT_LANG, // Default language
    fallbackLng: "en",
    ns: ["common"],
    defaultNS: "common",
    fallbackNS: ["common"],
    debug: DEBUG,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    resources: {
      en: {
        common: common_en
      }
    }
  });
export default i18n;
