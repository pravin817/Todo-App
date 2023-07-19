import React from "react";
import { MdSearch } from "react-icons/md";

const SearchNote = ({handleSearchNote}) => {
  return (
    <div className="search-note">
    
      <MdSearch className="search-icon" size="1.3rem" />
      <input type="text" placeholder="Search note..."  onChange={(event)=>handleSearchNote(event.target.value)}/>
    </div>
  );
};

export default SearchNote;
