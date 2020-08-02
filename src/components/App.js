import React, { useState } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

const App = () => {
  return (
    <LanguageStore>
      <div className="ui container">
        <LanguageSelector />
        <ColorContext.Provider value="red">
            <UserCreate />
        </ColorContext.Provider>
      </div>
    </LanguageStore>
  );
};

export default App;
