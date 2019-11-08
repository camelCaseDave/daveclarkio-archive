import React from "react";
import styled from "styled-components";

import InlineImage from "./inline-image";

const ImageWrapper = styled.div`
  width: 100%;
  flex-basis: 25%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1em;
  padding-bottom: 1em;
`;

const TextWrapper = styled.div`
  flex-basis: 75%;
  padding-right: 2rem;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 0.5em;
`;

const Description = styled.h4`
  margin: 0;
  margin-bottom: 2em;
  color: grey;
  font-weight: normal;
`;

const Date = styled.h4`
  margin: 0;
  font-weight: normal;
`;

const StoryTileBig = ({ title, description, timeToRead, imageData }) => {
  return (
    <Container>
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Date>Nov 7th</Date>
      </TextWrapper>
      <ImageWrapper>
        <InlineImage url={imageData.src} />
      </ImageWrapper>
    </Container>
  );
};

export default StoryTileBig;