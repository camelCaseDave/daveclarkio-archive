import React from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import SEO from "../components/seo";
import Wrapper from "../components/wrapper";
import GlobalStyle from "../styles/global-style";

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
