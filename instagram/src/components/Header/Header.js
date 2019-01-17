import React from 'react';
import IGLogo from '../../assets/instagram.svg';
import styled, { css } from 'styled-components';


const HeaderContain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 100%;
    `;

const LogoContain = styled.div`
    width: 175px;
    display: flex;
    align-items: center;

    `;

const SearchContain = styled.div`
    width: 225px;
`;

const SocialContain = styled.div`
    width: 175px;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
        height: 50px;
        width: 50px;
        font-size: 1.5em;
    }
    `;

const SearchBox = styled.input`
    width: 100%;
    padding: 5px;
`;

const Header = props => {
  return (
    <HeaderContain>
         <link href='https://fonts.googleapis.com/css?family=Cookie' rel='stylesheet' type='text/css' />
        <LogoContain>
            <img src={IGLogo} alt="logo" />
            <h1 className="headerName">Instagram</h1>
        </LogoContain>
        <SearchContain>
            <SearchBox type="text" placeholder="Search" onKeyDown={props.searchPosts} />
        </SearchContain>
        <SocialContain>
            <i class="far fa-compass"></i>
            <i class="far fa-heart"></i>
            <i class="far fa-user"></i>
        </SocialContain>
    </HeaderContain>
  );
};

export default Header;