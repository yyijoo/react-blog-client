import styled from "styled-components";

const NarrowedContainer = styled.div`
  width: ${props => (props.width ? props.width : "70%")};
  margin-left: auto;
  margin-right: auto;
  margin-top: 8rem;
`;

export default NarrowedContainer;
