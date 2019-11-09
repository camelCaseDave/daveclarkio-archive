import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../layouts/layout";
import Content from "../layouts/content";
import SEO from "../components/seo";
import "../styles/prism";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  max-width: 680px;
  margin: auto;
  margin-top: 2rem;
`;

const Description = styled.h3`
  color: grey;
`;

const Post = ({ data, pageContext }) => {
  const { html, frontmatter } = data.markdownRemark;
  const { date, title, path, description } = frontmatter;

  return (
    <Layout>
      <Wrapper>
        <SEO title={title} pathname={path} article />
        <h1>{title}</h1>
        <Description>{description}</Description>
        {date}
        <div>
          <Content input={html} />
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        description
      }
    }
  }
`;
