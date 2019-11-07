import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 100%;
  flex-basis: 25%;
`;

const Image = styled.a`
  background-image: url(${props => props.url});
  background-position: 50% 50%;
  background-size: cover;
  background-origin: border-box;
  height: 100%;
  width: 100%;
  display: block;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    margin: 0;
    color: grey;
  }
`;

const TextWrapper = styled.div`
  flex-basis: 75%;
`;

const StoryTileBig = ({ title, description, timeToRead, imageData }) => {
  return (
    <Container>
      <TextWrapper>
        <h3>{title}</h3>
        <h4>{description}</h4>
      </TextWrapper>
      <ImageWrapper>
        <Image url={imageData.src} />
      </ImageWrapper>
    </Container>
  );
};

export default StoryTileBig;
