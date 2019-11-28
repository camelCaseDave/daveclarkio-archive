import { theme } from "../../config/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  
margin: 0;
max-width: ${theme.breakpoints.l};
margin-left: auto;
margin-right: auto;
padding-left: 1em;
padding-right: 1em;

  @media (max-width ${theme.breakpoints.m}) and (min-width: ${theme.breakpoints.s}) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export default Wrapper;
