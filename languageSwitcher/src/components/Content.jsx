import React from "react";
import { useLanguage } from "../context/Language";

function Content() {
  const { language, translations } = useLanguage();
  return (
    <div>
      <h1>{translations[language].welcome} Dipesh</h1>
    </div>
  );
}

export default Content;
