import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

const Header = () => {
  return (
    <Container>
      <h1>Dave Clark</h1>      
    </Container>
  );
};

export default Header;
