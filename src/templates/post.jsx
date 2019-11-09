import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../layouts/layout";
import Content from "../layouts/content";
import SEO from "../components/seo";
import "../styles/prism";

const Post = ({ data, pageContext }) => {
  const { html, frontmatter } = data.markdownRemark;
  const { date, title, path } = frontmatter;

  return (
    <Layout>
      <SEO
        title={title}
        pathname={path}
        article
      />
     {title} {date}
      <div>
        <Content input={html} />
      </div>     
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
      }
    }
  }
`;
