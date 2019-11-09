import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import FlatLink from "../components/flat-link";
import logo from "../images/favicon.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid black;

  @media (max-width: ${theme.breakpoints.m}) {
    h1 {
      font-size: 1.5em;
    }
  }
`;

const Separator = styled.svg`
  margin-left: 1em;
  margin-right: 1em;
`;

const Logo = styled.img`
  height: 2em;
`;

const StyledFlatLink = styled(FlatLink)`
  display: flex;
`;

const Header = () => {
  return (
    <Container>
      <StyledFlatLink to={"/"}>
        <Logo src={logo} alt="Dave Clark IO" />
      </StyledFlatLink>
      <Separator width="2" height="29">
        <path
          d="M1 29V1"
          stroke="black"
          stroke-width="0.5"
          fill="none"
          stroke-linecap="round"
        ></path>
      </Separator>
      <FlatLink to={"/"}>
        <h1>Dave Clark</h1>
      </FlatLink>
    </Container>
  );
};

export default Header;
