import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";
import Header from "./header";
import { theme } from "../../config/theme";
import styled from "styled-components";

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
  }    
`;

const Wrapper = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;

  @media (max-width ${theme.breakpoints.m}) and (min-width: ${theme.breakpoints.s}) {
    padding-left: 24px;
    padding-right: 24px;
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
      <Wrapper>
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
