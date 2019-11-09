import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { theme } from "../../config/theme";

const Title = styled.h1`
  margin-bottom: 0.25em;

  @media (max-width: ${theme.breakpoints.l}) and (min-width: ${theme.breakpoints.m}) {
    font-size: 1.75em;
  }

  @media (max-width: ${theme.breakpoints.m}) {
    font-size: 1.5em;
  }
`;

const Description = styled.h3`
  color: grey;
  font-weight: normal;
  margin: 0;
`;

const HeadlineImage = styled(Img)`
  @media (max-width: ${theme.breakpoints.m}) {
    margin-left: -1em;
    margin-right: -1em;
  }
`;

const Headline = ({ data }) => {
  return (
    <>
      <HeadlineImage fluid={data.frontmatter.cover.childImageSharp.fluid} />
      <Title>{data.frontmatter.title}</Title>
      <Description>{data.frontmatter.description}</Description>
    </>
  );
};

export default Headline;
