import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../config/theme";
import FlatLink from "./flat-link";
import logo from "../images/favicon.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.05);
  height: 3.5em;
  margin-bottom: 3.5em;

  h1 {
    font-weight: 400;
    font-size: 1.5em;
    margin: 0;
    margin-left: 0.5em;
  }

  @media (max-width: ${theme.breakpoints.m}) {   
    margin-bottom: 0em;
    
    h1 {
      margin-left: 0.5em;
      display: table-caption;
      font-size: 1em;
      font-weight: 500;
    }

    img {
      font-size: 1.25em;
    }
  }
`;

const Logo = styled.img`
  height: 1.5em;
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
      <FlatLink to={"/"}>
        <h1>Dave Clark</h1>
      </FlatLink>
    </Container>
  );
};

export default Header;
