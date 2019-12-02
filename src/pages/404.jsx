import React from "react";

import SEO from "../components/seo";
import Layout from "../layouts/layout";
import styled from "@emotion/styled";
import { theme } from "../../config/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: calc(100vh - 17.5em - 57px);
  flex-wrap: wrap;
  margin-top: 2rem;

  @media (max-width: ${theme.breakpoints.m}) {
    margin-top: 1.33em;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <Container>
      <SEO title="404: Not found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
