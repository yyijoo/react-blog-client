import styled from "styled-components";

const Icon = styled.img`
  width: 18px;
  height: auto;
  position: absolute;
  top: 6px;
  left: -25px;
  z-index: -1;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export default Icon;
