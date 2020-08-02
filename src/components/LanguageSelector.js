import React from "react";

const LanguageSelector = ({onLanguageChange}) => {
  return (
    <div>
      Select language:
      <i className="flag us" onClick={() => onLanguageChange("english")} />
      <i className="flag nl" onClick={() => onLanguageChange("dutch")} />
    </div>
  );
};

export default LanguageSelector;
