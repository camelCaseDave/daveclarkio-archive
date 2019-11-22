import React from "react";
import styled from "@emotion/styled";
import ThemedLink from "./themed-link";

const Heading = styled.h2`
  margin: 0;
`;

const Bio = () => (
  <>
    <div>
      <Heading>About Dave</Heading>
    </div>
    <p>
      Hi I'm Dave, a full stack developer and consultant for Microsoft Power
      Platform software solutions.
    </p>
    <ThemedLink text="Read more" path="/about" />
  </>
);

export default Bio;
