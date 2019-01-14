import React from 'react';
import IGLogo from '../../logo.svg';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="searchBarFull">
      <div className="imageContain">
        <img alt="instagram logo" src={IGLogo} className="logo-image" />
      </div>
      <div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="socialSection">
        <div className="social">
          <i className="sea compass" />
        </div>
        <div className="social">
          <i className="sea heart" />
        </div>
        <div className="social">
          <i className="sea user" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;