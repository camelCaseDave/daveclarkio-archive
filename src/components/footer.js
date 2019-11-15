import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../config/theme";
import { links } from "../../config/links";
import logo from "../images/logo-white.svg";
import Wrapper from "./wrapper";
import FlatLink from "../components/flat-link";
import DotSeparator from "../components/dot-separator";

const Container = styled.div`
  color: white;
  background-color: ${theme.colours.black.base};
  margin-top: 3.5em;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -1000px;
  margin-right: -1000px;
  @media (max-width: ${theme.breakpoints.m}) {
    margin-top: 1.33em;
  }
`;

const Logo = styled.img`
  height: 1.5em;
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin: 0;
  margin-left: 0.5em;
  font-weight: 300;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const LinkWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
`;

const StyledWrapper = styled(Wrapper)`
  max-width: ${theme.breakpoints.l};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(FlatLink)``;

const StyledLinkExternal = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Footer = () => (
  <Container>
    <StyledWrapper>
      <TitleWrapper>
        <Logo src={logo} />
        <Title>Dave Clark</Title>
      </TitleWrapper>
      <LinkWrapper>
        <StyledLink>subscribe</StyledLink>
        <DotSeparator />
        <StyledLinkExternal href={links.linkedIn} target="_blank">
          connect
        </StyledLinkExternal>
        <DotSeparator />
        <StyledLink to="about">about</StyledLink>
      </LinkWrapper>
    </StyledWrapper>
  </Container>
);

export default Footer;
