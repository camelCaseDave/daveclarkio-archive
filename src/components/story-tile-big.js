import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
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

  @media (max-width: ${theme.breakpoints.l}) and (min-width: ${theme.breakpoints.m}) {
    margin-bottom: 1em;
  }

  @media (max-width: ${theme.breakpoints.m}) {
    font-size: 1em;
    margin-bottom: 1em;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const Date = styled.h4`
  margin: 0;
  font-weight: normal;

  @media (max-width: ${theme.breakpoints.m}) {
    font-size: 0.8em;
  }
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
