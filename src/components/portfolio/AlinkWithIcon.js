import React from "react";
import styled from "styled-components";
import { faintBlack } from "components/shared/colors";
import linkIcon from "data/image/portfolio/link.png";

const Container = styled.div`
  position: relative;
`;

const LinkIcon = styled.img`
  position: absolute;
  width: 10px;
  height: auto;
  top: 9px;
  left: 2px;
  z-index: -1;
  opacity: 0.8;
`;

const A = styled.a`
  text-decoration: none;
  color: ${faintBlack};
  font-size: 1rem;
  padding-left: 20px;
`;

const AlinkWithIcon = ({ url }) => {
  return (
    <Container>
      <LinkIcon src={linkIcon} />
      <A target="_blank" href={url.link}>
        {url.text}
      </A>
    </Container>
  );
};

export default AlinkWithIcon;
