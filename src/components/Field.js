import React, {useContext} from "react";
import LanguageContext from "../contexts/LanguageContext";

const Field = () => {
  const context = useContext(LanguageContext);

  const text = context === "english" ? "Name" : "Naam";

  return (
    <div className="ui field">
      <label>{text}</label>
      <input />
    </div>
  );
};

export default Field;
