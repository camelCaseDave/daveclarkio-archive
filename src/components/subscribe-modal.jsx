import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { theme } from "../../config/theme";
import addToMailchimp from "gatsby-plugin-mailchimp";
import Fade from "react-reveal/Fade";

const Modal = styled.div`
  z-index: ${props => (props.show ? "1" : "-1")};
  position: absolute;
  height: 3.5em;
  width: calc(${theme.breakpoints.l} / 3 - 4em);
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  box-sizing: border-box;
  transform: translate(4em, 4.5em);

  @media (max-width: ${theme.breakpoints.l}) {
    width: calc(33vw - 3em);
    transform: translate(2em, 4.5em);
  }

  @media (max-width: ${theme.breakpoints.m}) {
    width: calc(100vw - 3em);
    text-align: center;
    transform: translate(0, 4.3em);
    left: 0;
    right: 0;
    margin: auto;
  }

  @media (max-width: ${theme.breakpoints.s}) {
    width: calc(100% - 2em);
    left: 1em;
    margin: 0;
  }

  input {
    transform: none;
    padding: 0.2em;
    padding-top: 0.3em;
    padding-bottom: 0.3em;
    border: 1px solid ${theme.colours.black.base};
    border-radius: 1px;
    width: 100%;
    font-weight: 600;
    letter-spacing: 0.05em;

    @media (max-width: ${theme.breakpoints.m}) {
      padding-top: 0.5em;
      padding-bottom: 0.5em;
    }

    ::placeholder {
      color: ${theme.colours.black.base};
      opacity: 1;
    }

    :-ms-input-placeholder {
      color: red;
    }

    ::-ms-input-placeholder {
      color: red;
    }
  }
`;

const Button = styled.button`
  height: 100%;
  width: 100%;
  font-size: 1.2em;
  border: none;
  box-sizing: border-box;
  color: white;
  background-color: ${theme.colours.black.base};
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
`;

const ButtonContainer = styled.div`
  @media (max-width: ${theme.breakpoints.m}) {
    width: 25%;
  }
`;

const Feedback = styled.div`
  position: absolute;
  height: 26px;
  width: calc(${theme.breakpoints.l} / 3 - 4em);
  background-color: ${theme.colours.green.light};
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 1px;
  text-align: center;
  color: white;
  font-weight: 600;

  @media (max-width: ${theme.breakpoints.l}) {
    width: calc(33vw - 3em);
  }

  @media (max-width: ${theme.breakpoints.m}) {
    width: calc(100vw - 3em);
    text-align: center;
    left: 0;
    right: 0;
    margin: auto;
    transform: translate(0, 3.5em);
  }

  @media (max-width: ${theme.breakpoints.s}) {
    width: calc(100% - 2em);
    margin: 0;
    left: 1em;
  }
`;

const SubscribeModal = props => {
  const [email, setEmail] = useState("");
  const [showState, setShowState] = useState(props);

  useEffect(() => {
    setShowState(props);
  }, [props]);

  const handleSubmit = event => {
    event.preventDefault();
    setShowState({ show: !showState.show });

    addToMailchimp(email)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value);
  };

  return (
    <>
      <Modal show={props.show}>
        <Fade opposite when={showState.show}>
          <Form onSubmit={handleSubmit}>
            <input
              placeholder="Email address"
              name="email"
              type="text"
              onChange={handleEmailChange}
            />
            <ButtonContainer>
              <Button type="submit">&#10004;</Button>
            </ButtonContainer>
          </Form>
        </Fade>
      </Modal>
      <Feedback>Thanks for subscribing!</Feedback>
    </>
  );
};

export default SubscribeModal;
