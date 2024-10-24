// i18n.js
import "intl-pluralrules";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import languages from "./languages";

// Create a promise that resolves when i18n is initialized
let i18nInitialized = false;
export const i18nInitializedPromise = new Promise((resolve) => {
  i18n.on("initialized", () => {
    i18nInitialized = true;
    resolve();
  });
});

// Load the language from AsyncStorage or fallback to the system language
const loadLanguage = async () => {
  try {
    const savedLanguage = await AsyncStorage.getItem("appLanguage");
    return savedLanguage || Localization.getLocales()[0].languageTag;
  } catch (error) {
    console.warn("Failed to load language:", error);
    return "en"; // Fallback to English
  }
};

export const initializeI18n = async () => {
  const language = await loadLanguage();
  await i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      lng: language,
      debug: true, // Set to false in production
      resources: languages,
      ns: ["translation"],
      defaultNS: "translation",
      interpolation: {
        escapeValue: false,
      },
    });
};

// Initialize i18n
initializeI18n().catch(console.error);

export default i18n;
