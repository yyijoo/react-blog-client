import React from "react";
import { Link } from "react-router-dom";
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

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo header />
      <HeaderLink to="/about">ABOUT</HeaderLink>
      <HeaderLink to="/resume">RESUME</HeaderLink>{" "}
      <HeaderLink to="/portfolio">PORTFOLIO</HeaderLink>{" "}
      <HeaderLink to="/til">TIL</HeaderLink>
      {/*<HeaderLink to="/blog">BLOG</HeaderLink>*/}
    </HeaderWrapper>
  );
};

export default Header;
