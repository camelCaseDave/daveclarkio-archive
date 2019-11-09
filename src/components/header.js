import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import FlatLink from "../components/flat-link";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;

  @media (max-width: ${theme.breakpoints.m}) {
    h1 {
      font-size: 1.5em;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <FlatLink to={"/"}>
        <h1>Dave Clark</h1>
      </FlatLink>
    </Container>
  );
};

export default Header;
