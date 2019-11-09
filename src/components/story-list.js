import React from "react";
import BlockHeading from "../components/block-heading";
import StoryTileBig from "../components/story-tile-big";

const StoryList = ({ data }) => {
  return (
    <>
      <BlockHeading text="latest" />
      {data.map(({ node }) => {
        const { id, frontmatter } = node;
        const { cover, path, title, date, description } = frontmatter;
        return (
          <StoryTileBig
            key={id}
            cover={cover.childImageSharp.fluid}
            path={path}
            title={title}
            description={description}
            date={date}
          />
        );
      })}
    </>
  );
};

export default StoryList;
