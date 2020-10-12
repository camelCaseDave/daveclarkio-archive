import styled from "@emotion/styled";
import React from "react";

import Logo from "../components/logo";
import logo from "../images/favicon.png";

const Container = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: row;
  height: 2.5em;
  margin-bottom: 2.5em;
  margin-top: 1.5em;
`;

const Header = () => {
  return (
    <Container >
      <Logo src={logo} colour={"grey"} />
    </Container>
  );
};

export default Header;
