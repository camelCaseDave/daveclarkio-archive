import { theme } from "../../config/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;

  @media (max-width ${theme.breakpoints.m}) and (min-width: ${theme.breakpoints.s}) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export default Wrapper;
