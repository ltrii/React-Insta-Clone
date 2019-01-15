import React from 'react';
import IGLogo from '../../assets/instagramlogo.svg';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="searchBarFull">
      <div className="imageContain">
        <img alt="instagram logo" src={IGLogo} className="logoImage" />
      </div>
      <div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="socialSection">
        <div className="social">
          <img className="sea compass"
               src="../../assets/compass.svg" />
        </div>
        <div className="social">
        <img className="sea heart"
               src="../../assets/heart.svg" />
        </div>
        <div className="social">
        <img className="sea user"
               src=".../assets/user.svg" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;