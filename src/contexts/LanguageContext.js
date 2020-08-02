import React, { useState } from "react";

const Context = React.createContext("english");

export const LanguageStore = ({ children }) => {
  const [state, setState] = useState({language: "english"});

  const onLanguageChange = (language) => setState({language});

  return (
    <Context.Provider value={{ ...state, onLanguageChange }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
