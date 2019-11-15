import React from "react";
import StoryTileSmall from "../components/story-tile-small";

const PopularList = ({ data }) => {
  return (
    <>
      {data.map(({ node }) => {
        const { id, frontmatter } = node;
        const { title, description, cover, path } = frontmatter;

        return (
          <StoryTileSmall
            key={id}
            title={title}
            description={description}
            cover={cover.childImageSharp.fluid}
            path={path}
          />
        );
      })}
    </>
  );
};

export default PopularList;
