import styled from "styled-components";
import { faintBlack } from "components/shared/colors.js";

export const NarrowedContainer = styled.div`
  width: ${props => (props.width ? props.width : "70%")};
  margin-left: auto;
  margin-right: auto;
  margin-top: 8rem;
`;

export const Wrapper = styled.div`
  margin-left: 7rem;
  margin-top: 6rem;
  color: ${faintBlack};
`;

export default NarrowedContainer;
