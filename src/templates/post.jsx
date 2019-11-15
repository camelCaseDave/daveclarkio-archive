import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../layouts/layout";
import Content from "../layouts/content";
import SEO from "../components/seo";
import "../styles/prism";
import styled from "@emotion/styled";
import DotSeparator from "../components/dot-separator";

const Wrapper = styled.div`
  max-width: 680px;
  margin: auto;
  margin-top: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 0;
`;

const Description = styled.h3`
  color: grey;
  font-weight: normal;
  margin-top: 1em;
`;

const Meta = styled.div`
  margin-bottom: 2rem;
`;

const Post = ({ data }) => {
  const { html, frontmatter, fields } = data.markdownRemark;
  const readingTime = fields.readingTime.text;
  const { date, title, path, description, cover } = frontmatter;
  console.log(data);
  return (
    <Layout>
      <Wrapper>
        <SEO
          title={title}
          pathname={path}
          article
          banner={cover}
          description={description}
        />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Meta>
          {date}
          <DotSeparator />
          {readingTime}{" "}
        </Meta>
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
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        date(formatString: "MMM Do YYYY")
        title
        description
      }
    }
  }
`;
