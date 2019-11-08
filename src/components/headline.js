import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const Title = styled.h1`
  margin-bottom: 0.25em;
`;

const Description = styled.h3`
  color: grey;
  font-weight: normal;
  margin: 0;
`;

const Headline = ({ data }) => {
  return (
    <>
      <Img fluid={data} />
      <Title>Overcome the Five Fears of Automation Testing</Title>
      <Description>Some description let's go</Description>
    </>
  );
};

export default Headline;
