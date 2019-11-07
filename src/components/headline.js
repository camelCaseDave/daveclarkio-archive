import React from "react";
import Img from "gatsby-image";

const Headline = ({ data }) => {
  return (
    <>
      <Img fluid={data} />
      <h1>Overcome the Five Fears of Automation Testing</h1>
      <h3>Some description let's go</h3>
    </>
  );
};

export default Headline;
