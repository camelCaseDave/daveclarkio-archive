import React from "react";
import BlockHeading from "../components/block-heading";
import StoryTileBig from "../components/story-tile-big";

const StoryList = ({ data }) => {
  return (
    <>
      <BlockHeading text="latest" />
      <StoryTileBig
        title="Part two of a cool series"
        description="Some text that makes you want to read it"
        imageData={data}
      />
    </>
  );
};

export default StoryList;
