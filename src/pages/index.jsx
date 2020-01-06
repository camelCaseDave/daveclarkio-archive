import styled from "@emotion/styled";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { theme } from "../../config/theme";
import Bio from "../components/bio";
import BlockHeading from "../components/block-heading";
import Headline from "../components/headline";
import PopularList from "../components/popular-list";
import SEO from "../components/seo";
import StoryList from "../components/story-list";
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

const Left = styled.div`
  max-width: 66.666667%;
  flex-basis: 66.666667%;
  flex-grow: 0;

  @media (max-width: ${theme.breakpoints.m}) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;

const Right = styled.div`
  max-width: 33.333333%;
  flex-basis: 33.333333%;
  flex-grow: 0;

  @media (max-width: ${theme.breakpoints.m}) {
    max-width: 0%;
    flex-basis: 0%;
    display: none;
  }
`;

const RightContainer = styled.div`
  padding-left: 4em;

  @media (max-width: ${theme.breakpoints.l}) {
    padding-left: 2em;
  }
`;

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const headline = edges.find(e => e.node.frontmatter.headline === true).node;
  const latest = edges.filter(
    e =>
      e.node.frontmatter.headline !== true &&
      e.node.frontmatter.popular !== true
  );
  const popular = edges.filter(e => e.node.frontmatter.popular === true);

  return (
    <Layout>
      <SEO title="Dave Clark IO" />
      <Container>
        <Left>
          <Headline data={headline} />
          <StoryList data={latest} />
        </Left>
        <Right>
          <RightContainer>
            <Bio />
            <BlockHeading text="popular" />
            <PopularList data={popular} />
          </RightContainer>
        </Right>
      </Container>
    </Layout>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  data: {
    allMarkdownRemark: {
      edges: {
        find: PropTypes.finc,
        filter: PropTypes.func,
      },
    },
  },
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            readingTime {
              text
            }
          }
          frontmatter {
            title
            path
            date(formatString: "MMM Do YYYY")
            headline
            popular
            description
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
