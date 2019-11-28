import React from "react";
import { Global, css } from "@emotion/core";
import { theme } from "../../config/theme";

const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      html {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
          Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
        color: ${theme.colours.black.base};
      }
      body {
        margin: 0;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
      }
      h1,
      h2 {
        font-weight: 600;
      }
      p,
      h3,
      h4 {
        line-height: 1.5;
      }

      #___gatsby {
        @media (max-width: ${theme.breakpoints.m}) {
          overflow-x: hidden;
        }
      }
    `}
  />
);

export default GlobalStyle;
