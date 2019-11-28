import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../config/theme";
import PropTypes from "prop-types";
import FlatLink from "./flat-link";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => props.colour};
  align-items: center;
  height: 3.5em;
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 1.5em;
  margin: 0;
  margin-left: 0.5em;
  margin-bottom: 2px;

  @media (max-width: ${theme.breakpoints.m}) {
    margin-left: 0.5em;
    display: table-caption;
    font-size: 1em;
    font-weight: 500;
    line-height: 1.15em;
    margin-bottom: 0;
  }
`;

const LogoImage = styled.img`
  height: 1.5em;

  @media (max-width: ${theme.breakpoints.m}) {
    font-size: 1.25em;
  }
`;

const StyledFlatLink = styled(FlatLink)`
  display: flex;
`;

const Logo = ({ src, colour }) => {
  return (
    <Container>
      <StyledFlatLink to={"/"}>
        <LogoImage src={src} alt="Dave Clark IO" />
      </StyledFlatLink>
      <FlatLink to={"/"}>
        <Title colour={colour}>Dave Clark</Title>
      </FlatLink>
    </Container>
  );
};

export default Logo;

Logo.propTypes = {
  src: PropTypes.string,
  colour: PropTypes.string,
};