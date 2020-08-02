import React, { useState, useEffect } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Header = ({ callBack, getQuery }) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <nav className="navbar">
      <div className="navbar_left">
        <FontAwesomeIcon icon={faBars} className="burger_icon" onClick={callBack} />
        <h3 className="navbar_title">ET</h3>
      </div>
      
      <div className="navbar_middle">
        <input
          type="text"
          className="navbar_searchInput"
          placeholder="Search..."
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
        />
        <FontAwesomeIcon icon={faSearch} className="navbar_searchIcon" onClick={event => getQuery(searchQuery)} />
      </div>
      
      <div className="navbar_right">
        <FontAwesomeIcon icon={faUserCircle} />
      </div>
    </nav>
  );
}

export default Header;