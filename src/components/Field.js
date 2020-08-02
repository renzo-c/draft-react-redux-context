import React, {useContext} from "react";
import LanguageContext from "../contexts/LanguageContext";

const Field = () => {
  const {language} = useContext(LanguageContext);

  const text = language === "english" ? "Name" : "Naam";
  console.log(language)

  return (
    <div className="ui field">
      <label>{text}</label>
      <input />
    </div>
  );
};

export default Field;
