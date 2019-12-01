import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";

import { theme } from "../../config/theme";
import prism from "../styles/prism";

const Wrapper = styled.div`
  ${prism};
  line-height: 1.6;
  p,
  li {
    letter-spacing: -0.003em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    code {
      padding: 0.2rem 0.5rem;
      margin: 0.5rem 0;
    }
  }
  a:not(.gatsby-resp-image-link):not(.anchor) {
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
  img {
    width: 100%;
  }
  h1 {
    margin-top: 3rem;
  }
  h2 {
    margin-top: 1rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: inline-block;
    position: relative;
    a {
      box-shadow: none;
      border-bottom: none;
      &:hover,
      &:focus {
        background: none;
      }
    }
    &:hover {
      .anchor svg {
        opacity: 0.8;
      }
    }
  }

  .gatsby-resp-image-wrapper {
    margin-bottom: 1.2em;
  }

  @media (max-width: ${theme.breakpoints.m}) {
    span.gatsby-resp-image-wrapper {
      margin-left: -1em !important;
      margin-right: -1em !important;
    }
  }
`;

const Content = ({ input }) => (
  <Wrapper dangerouslySetInnerHTML={{ __html: input }} />
);

export default Content;

Content.propTypes = {
  input: PropTypes.any.isRequired,
};
