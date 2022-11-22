import styled from "@emotion/styled";
import React from "react";
import SEO from "../components/seo";
import { theme } from "../../config/theme";
import Layout from "../layouts/layout";

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

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Dave Clark IO" />
      <Container>
        Hello World
      </Container>
    </Layout>
  );
};

export default IndexPage;
