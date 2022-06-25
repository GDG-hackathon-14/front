import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, #1565c0, #2196f3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  position: fixed;
  top: 0;
  // animation: 0.5s ease-in-out unloadEffect;
  // animation-direction: reverse;
  // @keyframes unloadEffect {
  //   0% {
  //     transform: translateX(0px);
  //     opacity: 1;
  //   }
  //   100% {
  //     transform: translateX(-30px);
  //     opacity: 0;
  //   }
  // }
`;
const Title = styled.h1`
  color: white;
  font-size: 50px;
`;
function Splash() {
  return (
    <Div>
      <Title>야나야</Title>
    </Div>
  );
}

export default Splash;
