import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Container from "../components/Container";
import QRCode from "react-qr-code";
import MainContainer from "../components/MainContainer";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 20px;
`;

const NextButton = styled.div`
  width: 90%;
  border-radius: 10px;
  background-color: #1565c0;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

function Information() {
  const [code, userCode] = useState("dd");
  // useEffect(() => {
  //   fetch("")
  //     .then((res) => res.json())
  //     .then((response) => {});
  // }, []);

  return (
    <Container>
      <Header title="뒤로가기" />
      <MainContainer>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          사용자의 정보입니다! 사용자의 정보입니다!사용자의 정보입니다!v
          사용자의 정보입니다! 사용자의 정보입니다! 사용자의 정보입니다!
        </div>
      </MainContainer>
    </Container>
  );
}

export default Information;
