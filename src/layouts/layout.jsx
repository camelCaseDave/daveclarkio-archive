import React from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import SEO from "../components/seo";
import Wrapper from "../components/wrapper";
import GlobalStyle from "../styles/global-style";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <SEO />
        <Header />
        <main>{children}</main>
      </Wrapper>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
