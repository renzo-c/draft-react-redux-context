import React /*, { useContext }*/ from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

const Button = () => {
  //hook syntaxis that replaces consumer or contextType api
  
  // const context = useContext(LanguageContext);
  // const text = context === "english" ? "Submit" : "Voorleggen";
  // return <button className="ui button primary">{text}</button>;

  const renderButton = (color) => (
    <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>
        {(value) => (value === "english" ? "Submit" : "Voorleggen")}
      </LanguageContext.Consumer>
    </button>
  );

  return <ColorContext.Consumer>{color => renderButton(color)}</ColorContext.Consumer>;
};

export default Button;
