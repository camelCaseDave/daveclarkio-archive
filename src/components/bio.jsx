import styled from "@emotion/styled";
import React from "react";

import { theme } from "../../config/theme";
import avatar from "../images/dave.png";
import ThemedLink from "./themed-link";

const Heading = styled.h2`
  margin: 0;
  margin-bottom: 0.5em;
`;

const TextContainer = styled.div`
  flex-basis: 75%;
  padding-right: 2rem;
  font-weight: 500;
  font-size: 1em;
  line-height: 1.5em;
  color: ${theme.colours.black.base};
`;

const AvatarContainer = styled.div`
  flex-basis: 25%;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-diretion: row;
  justify-content: space-between;

  p {
    margin: 0;
    margin-bottom: 0.5em;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const Avatar = styled.img`
  width: 100%;
`;

const Bio = () => (
  <>
    <Heading>About Dave</Heading>
    <AboutContainer>
      <TextContainer>
        <p>
          Hi I&apos;m Dave, a full stack .NET developer and consultant for
          Microsoft Power Platform.
        </p>
      </TextContainer>
      <AvatarContainer>
        <Avatar src={avatar} />
      </AvatarContainer>
    </AboutContainer>
    <ThemedLink text="Read more" path="/about" />
  </>
);

export default Bio;
