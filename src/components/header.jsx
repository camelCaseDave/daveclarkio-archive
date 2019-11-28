import React from "react";
import styled from "@emotion/styled";
import Logo from "../components/logo";
import logo from "../images/favicon.png";
import { theme } from "../../config/theme";

const Container = styled.div`
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.05);
  height: 3.5em;
  margin-bottom: 3.5em;
`;

const Header = () => {
  return (
    <Container>
      <Logo src={logo} colour={theme.colours.black.base} />
    </Container>
  );
};

export default Header;
