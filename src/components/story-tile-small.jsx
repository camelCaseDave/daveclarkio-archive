import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";

import { theme } from "../../config/theme";

import DotSeparator from "./dot-separator";
import FlatLink from "./flat-link";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2em;

  @media (max-width: ${theme.breakpoints.l}) and (min-width: ${theme.breakpoints
      .m}) {
    padding-top: 1em;
  }
`;

const Title = styled.h4`
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Footer = styled.h4`
  margin: 0;
  margin-top: 0.5em;
  font-weight: 500;
  color: ${theme.colours.black.base};
  font-size: 0.9em;
`;

const StoryTileSmall = ({ title, path, date, readingTime }) => {
  return (
    <Container>
      <Title>
        <FlatLink to={path}>{title}</FlatLink>
        <Footer>
          {date}
          <DotSeparator />
          {readingTime}
        </Footer>
      </Title>
    </Container>
  );
};

StoryTileSmall.propTypes = {
  date: PropTypes.strong,
  title: PropTypes.string,
  path: PropTypes.string,
  readingTime: PropTypes.string,
};

export default StoryTileSmall;
