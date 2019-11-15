import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
import Header from "../components/header";
import SEO from "../components/seo";
import { theme } from "../../config/theme";
import Wrapper from "../components/wrapper";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    color: ${theme.colours.black.base};
  }
  body {
    margin: 0;
    max-width: ${theme.breakpoints.l};
    margin-left: auto;
    margin-right: auto;
  }    
  h1, h2 {
    font-weight: 600;
  }
  p, h3, h4 {
    line-height: 1.5;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <SEO />
        <Header />
        <main>{children}</main>
      </Wrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
