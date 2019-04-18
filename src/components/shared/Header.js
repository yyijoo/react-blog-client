import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  height: 62px;
  background-color: #303030;
  align-items: center;
`;

const HeaderLink = styled(Link)`
  margin-left: 3rem;
  color: white;
  max-width: 50%;
  text-decoration: none;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLink to="/about">ABOUT</HeaderLink>
      <HeaderLink to="/resume">RESUME</HeaderLink>{" "}
      <HeaderLink to="/portfolio">PORTFOLIO</HeaderLink>{" "}
      <HeaderLink to="/til">TIL</HeaderLink>{" "}
      <HeaderLink to="/blog">BLOG</HeaderLink>{" "}
    </HeaderWrapper>
  );
};

export default Header;
