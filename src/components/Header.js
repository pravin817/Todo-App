import React from "react";

const Header = ({ handleToogleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="btn"
        onClick={()=>handleToogleDarkMode((previousDarkMode) => !previousDarkMode)}
      >
        Toogle
      </button>
    </div>
  );
};

export default Header;
