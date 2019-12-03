import styled from "@emotion/styled";
import React from "react";

import { links } from "../../config/links";
import { theme } from "../../config/theme";
import ExternalLink from "../components/external-link";
import FlatLink from "../components/flat-link";
import Logo from "../components/logo";
import Wrapper from "../components/wrapper";
import logo from "../images/logo-white.svg";

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
  font-weight: 500;
  height: 10.5em;
  justify-content: space-evenly;
`;

const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid white;
`;

const Footer = () => (
  <Background>
    <StyledWrapper>
      <Logo src={logo} colour={theme.colours.white.base} />
    </StyledWrapper>
    <Wrapper>
      <Divider />
    </Wrapper>
    <Wrapper>
      <Links>
        <FlatLink to="/about">About</FlatLink>
        <ExternalLink href={links.linkedin} target="_blank">
          LinkedIn
        </ExternalLink>
        <ExternalLink href={links.twitter} target="_blank">
          Twitter
        </ExternalLink>
        <ExternalLink href={links.github} target="_blank">
          GitHub
        </ExternalLink>
      </Links>
    </Wrapper>
  </Background>
);

export default Footer;
