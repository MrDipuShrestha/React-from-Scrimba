import { createContext, useContext, useState } from "react";
export const translations = {
  en: {
    welcome: "Welcome",
    // Add other English translations here
  },
  es: {
    welcome: "Bienvenido",
    // Add other Spanish translations here
  },
  // Add more languages and their translations as needed
};

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, switchLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
