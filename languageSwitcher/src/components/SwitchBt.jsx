import React from "react";
import { useLanguage } from "../context/Language";

function SwitchBt() {
  const { switchLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => switchLanguage("en")}>English</button>
      <button onClick={() => switchLanguage("es")}>Español</button>
      {/* Add more buttons for additional languages */}
    </div>
  );
}

export default SwitchBt;
