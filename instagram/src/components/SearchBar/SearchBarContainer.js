import React from 'react';
import IGLogo from '../../assets/instagramlogo.svg';
import CompassIMG from '../../assets/compass.svg';
import HeartIMG from '../../assets/heart.svg';
import UserIMG from '../../assets/user.svg';
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
               src={CompassIMG} alt="Compass" />
        </div>
        <div className="social">
        <img className="sea heart"
               src={HeartIMG} alt="Heart"/>
        </div>
        <div className="social">
        <img className="sea user"
               src={UserIMG} alt="User"/>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;