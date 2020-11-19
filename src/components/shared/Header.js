import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { faintBlack } from "components/shared/colors.js";
import { Logo } from "components/shared/Logo";

const HeaderWrapper = styled.div`
  display: flex;
  height: 62px;
  background-color: ${faintBlack};
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  @media screen and (max-width: 500px) {
    height: 40px;
    justify-contenet: space-around;
    text-align: center;
    width: 100vw;
  }
`;

const HeaderLink = styled(NavLink)`
  margin-left: 4rem;
  color: white;
  max-width: 50%;
  text-decoration: none;
  font-size: 14px;
  position: relative;

  @media screen and (max-width: 500px) {
    margin: 0;
    flex: 1;
  }

  :before {
    visibility: hidden;
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -7px;
    left: 0;
    background-color: white;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  :hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo header />
      {/* <div>Jooyeon Yi</div> */}
      <HeaderLink to="/about">ABOUT</HeaderLink>
      {/* <HeaderLink to="/resume">RESUME</HeaderLink>{" "} */}
      {/* <HeaderLink to="/portfolio">PORTFOLIO</HeaderLink>{" "} */}
      <HeaderLink to="/til">TIL</HeaderLink>
      {/* <HeaderLink to="/blog">BLOG</HeaderLink> */}
    </HeaderWrapper>
  );
};

export default Header;
