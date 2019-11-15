import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import ThemedLink from "./themed-link";

const Heading = styled.h2`
  margin: 0;
`;

const ReadMore = styled.span`
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

const Bio = () => (
  <>
    <div>
      <Heading>About Dave</Heading>
    </div>
    <p>
      Hi I'm Dave, a full stack developer and consultant for Microsoft Power
      Platform software solutions.
    </p>
    <ThemedLink text="Read more" path="/about" />
  </>
);

export default Bio;
