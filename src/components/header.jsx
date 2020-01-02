import styled from "@emotion/styled";
import React from "react";

import Logo from "../components/logo";
import logo from "../images/favicon.png";

const Container = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: row;
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.1);
  height: 3.5em;
  margin-bottom: 3.5em;
`;

const Header = () => {
  return (
    <Container>
      <Logo src={logo} colour={"grey"} />
    </Container>
  );
};

export default Header;
