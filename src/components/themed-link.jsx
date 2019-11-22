import React from "react";
import styled from "@emotion/styled";
import FlatLink from "./flat-link";
import { theme } from "../../config/theme";

const StyledLink = styled.span`
    text-decoration: none;
    box-shadow: inset 0 -2px 0 ${theme.colours.blue.dark};
    border-bottom: 1px solid ${theme.colours.blue.dark};
    color: ${theme.colours.black.base};
    -webkit-transition: all 0.15s ease;
    -moz-transition: all 0.15s ease;
    transition: all 0.15s ease;
    background-size: 100% 200%;
    background-position: 0 -100%;
    background-image: linear-gradient(
      to top,
      transparent 50%,
      ${theme.colours.blue.dark} 50%
    );
    &:hover,
    &:focus {
      color: #fff;
      background-position: 0 0;
    }
  }
`;

const ThemedLink = ({ text, path }) => (
  <FlatLink to={path}>
    <StyledLink>{text}</StyledLink>
  </FlatLink>
);

export default ThemedLink;
