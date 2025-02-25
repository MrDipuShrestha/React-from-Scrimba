import React from "react";
import { LanguageProvider } from "./context/Language";
import SwitchBt from "./components/SwitchBt";
import Content from "./components/Content";

function App() {
  return (
    <LanguageProvider>
      <SwitchBt />
      <Content />
    </LanguageProvider>
  );
}

export default App;
