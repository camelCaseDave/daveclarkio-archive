import styled from "@emotion/styled";
import React, { useState } from "react";
import BellIcon from "react-bell-icon";

import { theme } from "../../config/theme";
import SubscribeModal from "./subscribe-modal";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3.5em;
  flex-basis: 33.333333%;
  flex-grow: 0;

  @media (max-width: ${theme.breakpoints.m}) {
    flex-basis: 20%;
  }
`;

const Button = styled.a`
  color: ${props => props.colour};
  background-color: ${props => props.backgroundColour};
  width: 100%;
  height: 26px;
  text-align: center;
  margin-left: 4em;
  font-weight: 600;
  cursor: pointer;
  border-radius: 0;
  line-height: 1.1em;

  @media (max-width: ${theme.breakpoints.l}) {
    margin-left: 2em;
    font-size: 1em;
  }

  @media (max-width: ${theme.breakpoints.m}) {
    height: 30px;
    border-radius: 2px;
    margin-left: 0;
    line-height: normal;
  }

  span {
    height: 100%;
    width: 100%;
    letter-spacing: 0.1em;
    vertical-align: middle;
    @media (max-width: ${theme.breakpoints.m}) {
      display: none;
    }
  }
`;

const StyledBellIcon = styled(BellIcon)`
  display: none;
  margin-top: 0.29em;

  @media (max-width: ${theme.breakpoints.m}) {
    display: inline-block;
  }
`;

const Subscribe = ({ colour, backgroundColour }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <Container>
        <Button
          colour={colour}
          backgroundColour={backgroundColour}
          type="button"
          onClick={handleClick}
        >
          <span>Subscribe</span>
          <StyledBellIcon
            width="20"
            height="20"
            color={theme.colours.white.base}
            active={true}
            animate={false}
          />
        </Button>
        <SubscribeModal show={show} />
      </Container>
    </>
  );
};

export default Subscribe;
