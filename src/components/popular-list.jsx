import PropTypes from "prop-types";
import React from "react";

import StoryTileSmall from "./story-tile-small";

const PopularList = ({ data }) => {
  return (
    <>
      {data.map(({ node }) => {
        const { id, frontmatter, fields } = node;
        const readingTime = fields.readingTime.text;
        const { title, description, date, path } = frontmatter;

        return (
          <StoryTileSmall
            key={id}
            title={title}
            description={description}
            path={path}
            date={date}
            readingTime={readingTime}
          />
        );
      })}
    </>
  );
};

export default PopularList;

PopularList.propTypes = {
  data: {
    map: PropTypes.func,
  },
};
