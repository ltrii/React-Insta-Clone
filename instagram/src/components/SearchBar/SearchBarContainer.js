import React from 'react';
import IGLogo from '../../assets/instagramlogo.svg';
import CameraLogo from '../../assets/instagram.svg'
import CompassIMG from '../../assets/compass.svg';
import HeartIMG from '../../assets/heart.svg';
import UserIMG from '../../assets/user.svg';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className="searchBarFull">
      <div className="imageContain">
      <div className="img1">
        <img alt="camera logo" src={CameraLogo} className="cameraLogo" />
      </div>
      <div className="img2">
        <img alt="instagram logo" src={IGLogo} className="logoImage" />
      </div>
      </div>
      <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
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