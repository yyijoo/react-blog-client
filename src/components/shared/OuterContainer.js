import styled from "styled-components";
import { faintBlack } from "components/shared/colors.js";

export const Wrapper = styled.div`
  margin: 8rem 8rem 0 8rem;
  color: ${faintBlack};
  line-height: 1.7;

  @media screen and (max-width: 500px) {
    margin: 0 1rem 0 1rem;
  }
`;
