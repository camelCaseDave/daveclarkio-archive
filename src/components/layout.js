import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";
import Header from "./header";
import { theme } from "../../config/theme";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${theme.colours.white.base};
    font-family: Helvetica;
    color: ${theme.colours.black.base};
  }
  body {
    margin: 0;
    max-width: 1192px;
    margin-left: auto;
    margin-right: auto;
    padding-right: 1rem;
    padding-left: 1rem;   
    
    media="(min-width: 1080px)" {
      margin: 0 64px;
    }
  }    
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
