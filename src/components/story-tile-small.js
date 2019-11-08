import React from "react";
import styled from "styled-components";

import InlineImage from "./inline-image";

const ImageWrapper = styled.div`
  flex-basis: 25%;
  height: 50px;
  width: 50px;
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

const Title = styled.h4`
  margin: 0;
  margin-bottom: 0.5em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Date = styled.h5`
  margin: 0;
  font-weight: normal;
`;

const StoryTileSmall = ({ title, imageData }) => {
  return (
    <Container>
      <TextWrapper>
        <Title>{title}</Title>
      </TextWrapper>
      <ImageWrapper>
        <InlineImage url={imageData.src} />
      </ImageWrapper>
    </Container>
  );
};

export default StoryTileSmall;