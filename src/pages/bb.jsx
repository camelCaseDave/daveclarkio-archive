import styled from "@emotion/styled";
import React from "react";

import { theme } from "../../config/theme";
import SEO from "../components/seo";
import Layout from "../layouts/layout";

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

const BbPage = () => {
  return (
    <Layout>
      <SEO title="Bristol Burgers" />
      <Container>
        <p>Coming soon 👷</p>
      </Container>
    </Layout>
  );
};

export default BbPage;
