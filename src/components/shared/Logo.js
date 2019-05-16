import React from "react";
import styled from "styled-components";
import { faintBlack } from "components/shared/colors.js";
import logo from "data/image/shared/logo.png";

const Circle = styled.div`
  ${props =>
    props.header
      ? `
      background-color: white;
        height: 40px;
  width: 40px;
  vertical-align: middle;
    border-radius: 50%;
  display: inline-block;
  position: relative;
      `
      : `
    height: 60px;
  width: 60px;
  border: 1rem ${faintBlack} solid;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  `};
`;

const LogoImg = styled.img`
  ${props =>
    props.header
      ? `height: 17px;
  position: absolute;
  left: 3px;
  top: 12px;`
      : `
    height: 25px;
  position: absolute;
  left: 5px;
  top: 17px;
  
  `}
`;

const LogoDiv = styled.div`
  ${props =>
    props.header
      ? `  margin-left: 1rem;
  margin-right: 1rem;

  @media screen and (max-width: 500px) {
    display: none;
  }`
      : ` margin: 0 1rem 3rem 1rem;
  text-align: center;
  transform: scale(1.1);

  @media screen and (max-width: 500px) {
    margin: 1rem;
  }`}
`;

export const Logo = ({ header }) => {
  console.log("header", header);
  return (
    <LogoDiv header={header}>
      <Circle header={header}>
        <LogoImg header={header} src={logo} />
      </Circle>
    </LogoDiv>
  );
};
