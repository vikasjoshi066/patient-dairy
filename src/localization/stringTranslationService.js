// helper.js
import i18next from "i18next";
import { StringConstants } from "../utils/constants";
import { i18nInitializedPromise } from "./i18nConfig";

// Define an object that will hold the localized strings
const Strings = {};

// Function to update the localized strings
const updateStrings = () => {
  // Loop through StringConstants and update the Strings object
  Object.entries(StringConstants).forEach(([key, translationKey]) => {
    if (typeof translationKey === "object") {
      // Handle nested objects
      Object.entries(translationKey).forEach(([nestedKey, nestedValue]) => {
        Strings[nestedKey] = i18next.t(nestedValue);
      });
    } else {
      // Handle flat keys
      Strings[key] = i18next.t(translationKey);
    }
  });
};

// Initialize translations only after i18next is ready
const initializeStrings = async () => {
  try {
    await i18nInitializedPromise; // Wait for i18next to be initialized
    i18next.on("languageChanged", updateStrings); // Update strings on language change
    updateStrings(); // Initial update
  } catch (error) {
    console.error("Failed to initialize strings:", error);
  }
};

// Start initialization
initializeStrings();

export default Strings;
