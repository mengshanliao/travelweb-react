import { initReactI18next } from "react-i18next";

import en_US from "./locales/en_US.json";
import zh_TW from "./locales/zh_TW.json";

import i18n from "i18next";
const userState = localStorage.getItem("user");

const resources = {
  en_US: {
    translation: en_US,
  },
  zh_TW: {
    translation: zh_TW,
  },
};
i18n.use(initReactI18next).init({
  resources, // 所有翻譯資源
  fallbackLng: "en_US", // 如果當前切換的語言沒有對應的翻譯則使用這個語言
  lng: userState ? JSON.parse(userState).state.language : "zh_TW", // 預設語言
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
