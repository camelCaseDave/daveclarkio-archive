import React from "react";
import StoryTileSmall from "../components/story-tile-small";

const PopularList = ({ data }) => {
  return (
    <>
      <StoryTileSmall
        title="Part two of a cool series that you should read"
        description="Some text that makes you want to read it Some text that makes you want to read it Some text that makes you want to read it"
       
      />
      <StoryTileSmall
        title="Part three of a cool series"
        description="Some text that makes you want to read it Some text that makes you want to read it Some text that makes you want to read it"
       
      />
      <StoryTileSmall
        title="Part four of a cool series and I have a really long title like really long"
        description="Some text that makes you want to read it Some text that makes you want to read it Some text that makes you want to read it"
       
      />
    </>
  );
};

export default PopularList;
