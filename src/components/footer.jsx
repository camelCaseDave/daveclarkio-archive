import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../config/theme";
import { links } from "../../config/links";
import logo from "../images/logo-white.svg";
import Wrapper from "../components/wrapper";
import Logo from "../components/logo";
import FlatLink from "../components/flat-link";
import ExternalLink from "../components/external-link";

const Background = styled.div`
  width: 100%;
  margin-top: 3.5em;
  background-color: ${theme.colours.black.base};
  color: white;
`;

const StyledWrapper = styled(Wrapper)`
  height: 3.5em;
  width: 100%;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1em;
  font-weight: 400;

  a {
    padding-bottom: 0.1em;
  }
`;

const Footer = () => (
  <Background>
    <StyledWrapper>
      <Logo src={logo} colour={theme.colours.white.base} />
    </StyledWrapper>
    <Wrapper>
      <Links>
        <FlatLink to="/about">About</FlatLink>
        <ExternalLink href={links.linkedin} target="_blank">
          LinkedIn
        </ExternalLink>
        <ExternalLink href={links.github} target="_blank">
          GitHub
        </ExternalLink>
      </Links>
    </Wrapper>
  </Background>
);

export default Footer;
