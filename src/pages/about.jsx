import React from "react";
import Layout from "../layouts/layout";
import SEO from "../components/seo";
import styled from "@emotion/styled";
import { theme } from "../../config/theme";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media (max-width: ${theme.breakpoints.m}) {
    margin-top: 1.33em;
  }
`;

const AboutPage = () => {
  
  return (
    <Layout>
      <SEO title="About | Dave Clark" />
      <Container>
          <h1>Coming soon!</h1>
      </Container>
    </Layout>
  );
};

export default AboutPage;

