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

    @media screen and (max-width: 515px) {   
      padding-right: 1rem;
      padding-left: 1rem;    
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
