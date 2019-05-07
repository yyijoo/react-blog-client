import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import circle from "data/image/circle.png";
import { faintBlack } from "components/shared/colors.js";

const HeaderWrapper = styled.div`
  display: flex;
  height: 62px;
  background-color: ${faintBlack};
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
`;

const HeaderLink = styled(Link)`
  margin-left: 3rem;
  color: white;
  max-width: 50%;
  text-decoration: none;
  font-size: 14px;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={circle} />
      <HeaderLink to="/about">ABOUT</HeaderLink>
      <HeaderLink to="/resume">RESUME</HeaderLink>{" "}
      <HeaderLink to="/portfolio">PORTFOLIO</HeaderLink>{" "}
      <HeaderLink to="/til">TIL</HeaderLink>
      {/*<HeaderLink to="/blog">BLOG</HeaderLink>*/}
    </HeaderWrapper>
  );
};

export default Header;
