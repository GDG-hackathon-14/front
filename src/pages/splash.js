import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, #1565c0, #2196f3);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  font-size: 64px;
`;
function Splash() {
  return (
    <Div>
      <Title>야나야</Title>
    </Div>
  );
}

export default Splash;
