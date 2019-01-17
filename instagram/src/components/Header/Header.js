import React from 'react';
import IGLogo from '../../assets/instagram.svg';
import styled, { css } from 'styled-components';


const HeaderContain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 100%;
    border-bottom: 1px solid rgb(233,233,233);
    `;

const LogoContain = styled.div`
    width: 175px;
    display: flex;
    align-items: center;

    img {
        height: 50px;
        padding: 0 5px;
        border-right: 1px solid rgb(233,233,233);
        margin-right: 3px;
        padding: 0 10px;
    }

    h1 {
        display: flex;
        font-size: 3.5em;
        align-items: center;
        font-family: 'Cookie';
        padding: 0 10px;
    }
    `;

const SearchContain = styled.div`
    width: 250px;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    background-color: rgb(244,244,244);
    border: 1px solid rgb(233,233,233);
    border-radius: 3px;

    i {
        display: flex;
        align-items: center;
        padding: 5px;
        font-size: 1.5em;
        color: rgb(200,200,200);
    }
`;

const SocialContain = styled.div`
    width: 175px;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 50px;
        font-size: 1.5em;
    }
    `;

const SearchBox = styled.input`
    width: 100%;
    padding: 4px;
    border: none;
    background-color: rgb(244,244,244);
    color: rgb(200,200,200);
    font-size: .95em;
`;

const Header = props => {
  return (
    <HeaderContain>
         <link href='https://fonts.googleapis.com/css?family=Cookie' rel='stylesheet' type='text/css' />
        <LogoContain>
            <img src={IGLogo} alt="logo" />
            <h1>Instagram</h1>
        </LogoContain>
        <SearchContain>
        <i class="fas fa-search"></i>
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