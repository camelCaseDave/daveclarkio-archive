import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";

import { theme } from "../../config/theme";
import GreyLogo from "../images/logo-full.png";
import WhiteLogo from "../images/logo-white.png";
import FlatLink from "./flat-link";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => props.colour};
  align-items: center;
  height: 3.5em;
  flex-grow: 0;

  @media (max-width: ${theme.breakpoints.m}) {
    flex-basis: 80%;
  }
`;

const LogoImage = styled.img`
  height: 1.5em;

  @media (max-width: ${theme.breakpoints.m}) {
    height: 1.25em;
    font-size: 1.25em;
  }
`;

const LogoText = styled.img`
  height: 1.5em;
  line-height: 0;
`;

const StyledFlatLink = styled(FlatLink)`
  display: flex;
`;

const Logo = ({ src, colour }) => {
  return (
    <Container>
      {colour === "grey" ? (
        <></>
      ) : (
        <StyledFlatLink to={"/"}>
          <LogoImage src={src} alt="Dave Clark IO" />
        </StyledFlatLink>
      )}
      <FlatLink to={"/"}>
        {colour === "grey" ? (
          <LogoText src={GreyLogo} />
        ) : (
          <LogoText src={WhiteLogo} style={{ paddingLeft: "0.67em" }} />
        )}
      </FlatLink>
    </Container>
  );
};

export default Logo;

Logo.propTypes = {
  src: PropTypes.string,
  colour: PropTypes.string,
};
