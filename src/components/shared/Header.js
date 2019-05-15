import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import circle from "data/image/shared/circle.png";
import { faintBlack } from "components/shared/colors.js";
import logo from "data/image/shared/logo.png";

const HeaderWrapper = styled.div`
  display: flex;
  height: 62px;
  background-color: ${faintBlack};
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;

  @media screen and (max-width: 500px) {
    height: 40px;
    justify-contenet: space-around;
    text-align: center;
    width: 100vw;
  }
`;

const HeaderLink = styled(Link)`
  margin-left: 4rem;
  color: white;
  max-width: 50%;
  text-decoration: none;
  font-size: 14px;

  @media screen and (max-width: 500px) {
    margin: 0;
    flex: 1;
  }
`;

const LogoCircle = styled.img`
  height: 45px;
  width: auto;
  vertical-align: middle;
`;

const Logo = styled.img`
  height: 15px;
  position: absolute;
  left: 23px;
  top: 24px;
`;
const LogoDiv = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoDiv>
        <Logo src={logo} />
        <LogoCircle src={circle} />
      </LogoDiv>
      <HeaderLink to="/about">ABOUT</HeaderLink>
      <HeaderLink to="/resume">RESUME</HeaderLink>{" "}
      <HeaderLink to="/portfolio">PORTFOLIO</HeaderLink>{" "}
      <HeaderLink to="/til">TIL</HeaderLink>
      {/*<HeaderLink to="/blog">BLOG</HeaderLink>*/}
    </HeaderWrapper>
  );
};

export default Header;
