import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";

import { theme } from "../../config/theme";
import DotSeparator from "./dot-separator";
import FlatLink from "./flat-link";
import InlineImage from "./inline-image";

const ImageWrapper = styled.div`
  width: 100%;
  flex-basis: 20%;
`;

const Container = styled.div`
  display: flex;
  padding-top: 2em;
  min-height: 148px;

  @media (max-width: ${theme.breakpoints.m}) {
    min-height: auto;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 80%;
  padding-right: 2rem;
`;

const Title = styled.h3`
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.m}) {
    font-size: 1.1em;
  }
`;

const Description = styled.h4`
  margin: 0;
  color: grey;
  font-weight: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.m}) {
    font-size: 0.8em;
    -webkit-line-clamp: 2;
    margin-bottom: 0.5em;
  }
`;

const Footer = styled.h4`
  margin: 0;
  font-weight: normal;

  @media (max-width: ${theme.breakpoints.m}) {
    font-size: 0.8em;
  }
`;

const MetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const StoryTileBig = ({
  title,
  description,
  date,
  cover,
  path,
  readingTime,
}) => {
  return (
    <Container>
      <TextWrapper>
        <div>
          <Title>
            <FlatLink to={path}>{title}</FlatLink>
          </Title>
        </div>
        <MetaWrapper>
          <Description>
            <FlatLink to={path}>{description}</FlatLink>
          </Description>
          <Footer>
            {date}
            <DotSeparator />
            {readingTime}
          </Footer>
        </MetaWrapper>
      </TextWrapper>
      <ImageWrapper>
        <FlatLink to={path}>
          <InlineImage url={cover.src} />
        </FlatLink>
      </ImageWrapper>
    </Container>
  );
};

export default StoryTileBig;

StoryTileBig.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  cover: {
    src: PropTypes.string,
  },
  path: PropTypes.string,
  readingTime: PropTypes.string,
};
