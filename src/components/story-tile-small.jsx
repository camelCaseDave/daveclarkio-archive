import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";

import { theme } from "../../config/theme";
import FlatLink from "./flat-link";
import InlineImage from "./inline-image";

const ImageWrapper = styled.div`
  flex-basis: 25%;
  height: 50px;
  width: 50px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2em;

  @media (max-width: ${theme.breakpoints.l}) and (min-width: ${theme.breakpoints
      .m}) {
    padding-top: 1em;
  }
`;

const TextWrapper = styled.div`
  flex-basis: 75%;
  padding-right: 1.5rem;
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

const StoryTileSmall = ({ title, cover, path }) => {
  return (
    <Container>
      <TextWrapper>
        <Title>
          <FlatLink to={path}>{title}</FlatLink>
        </Title>
      </TextWrapper>
      <ImageWrapper>
        <FlatLink to={path}>
          <InlineImage url={cover ? cover.src : ""} />
        </FlatLink>
      </ImageWrapper>
    </Container>
  );
};

StoryTileSmall.propTypes = {
  title: PropTypes.string,
  cover: {
    src: PropTypes.string,
  },
  path: PropTypes.string,
};

export default StoryTileSmall;
