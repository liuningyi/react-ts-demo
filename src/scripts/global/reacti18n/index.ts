import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translation_zh from "./locales/zh";
import translation_en from "./locales/en";

const resources = {
  en: {
    translation: translation_en,
  },
  zh: {
    translation: translation_zh,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // 修改此值即可切换语言 i18n.changeLanguage("en");进行切换
  // lng:'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
