import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { theme } from "../../config/theme";
import FlatLink from "../components/flat-link";

const Title = styled.h1`
  margin-bottom: 0.25em;

  @media (max-width: ${theme.breakpoints.l}) and (min-width: ${theme.breakpoints
      .m}) {
    font-size: 1.75em;
  }

  @media (max-width: ${theme.breakpoints.m}) {
    font-size: 1.5em;
  }
`;

const Description = styled.h4`
  color: grey;
  font-weight: normal;
  margin: 0;

  @media (max-width: ${theme.breakpoints.m}) {
    font-size: 1em;
  }
`;

const HeadlineImage = styled(Img)`
  height: 407px;
  @media (max-width: ${theme.breakpoints.m}) {
    margin-left: -1em;
    margin-right: -1em;
    height: 280px;
  }
`;

const Headline = ({ data }) => {
  return (
    <>
      <FlatLink to={data.frontmatter.path}>
        <HeadlineImage fluid={data.frontmatter.cover.childImageSharp.fluid} />
      </FlatLink>
      <Title>
        <FlatLink to={data.frontmatter.path}>{data.frontmatter.title}</FlatLink>
      </Title>
      <Description>
        <FlatLink to={data.frontmatter.path}>
          {data.frontmatter.description}
        </FlatLink>
      </Description>
    </>
  );
};

export default Headline;
