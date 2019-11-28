import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../config/theme";
import logo from "../images/logo-white.svg";
import Wrapper from "../components/wrapper";
import Logo from "../components/logo";

const Background = styled.div`
  height: 3.5em;
  width: 100%;
  margin-top: 3.5em;
  background-color: ${theme.colours.black.base};
  color: white;
`;

const Footer = () => (
  <Background>
    <Wrapper>
      <Logo src={logo} colour={theme.colours.white.base} />
    </Wrapper>
  </Background>
);

export default Footer;
